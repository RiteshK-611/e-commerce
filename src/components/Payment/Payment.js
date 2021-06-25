import React, { useState, useEffect } from 'react'
import "./Payment.css"
import { Link, useHistory } from 'react-router-dom'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import { useStateValue } from '../Context_API/StateProvider'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { getCartTotal } from '../Context_API/Reducer'
import CurrencyFormat from 'react-currency-format'
import axios from '../CloudFunction(axios)/Axios'
import { db } from '../Firebase/Firebase'

const Payment = () => {
  const [{ cart, user }, dispatch] = useStateValue()
  const history = useHistory()
  
  const stripe = useStripe()
  const elements = useElements()

  const [error, setError] = useState(null)
  const [disable, setDisable] = useState(true)
  const [processing, setProcessing] = useState("")
  const [succedded, setSuccedded] = useState(false)
  const [clientSecret, setClientSecret] = useState(true)

   useEffect(() => {
    // generate the special stripe secret which allows us to charge  a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getCartTotal(cart) * 100}`,
      })
      setClientSecret(response.data.clientSecret)
    }

    getClientSecret()
  }, [cart])

  console.log('THE SECRET IS ===> ', clientSecret)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setProcessing(true)

    const billingDetails = {
      name: "AshK",
      email: user?.email,
      address: {
        city: "Mumbai",
        line1: "React Lane",
        state: "Maharashtra",
        postal_code: "90124"
      }
    };

    // const paymentMethodReq = await stripe.createPaymentMethod({
    //   type: "card",
    //   card: elements.getElement(CardElement),
    //   billing_details: billingDetails
    // })

    // console.log(paymentMethodReq)

    const confirmCardPayment = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: billingDetails,
      }
    })
      .then(({ paymentIntent }) => {
      // paymentIntent = payment confirmation        
        db
          .collection('users')
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            cart: cart,
            amount: paymentIntent.amount,
            created: paymentIntent.created
        })
        
        setSuccedded(true)
        setError(null)
        setProcessing(false)

        dispatch({
          type: "EMPTY_CART"
        })

        history.replace('./orders')
      })
    console.log(confirmCardPayment);
  }

  const handleChange = e => {
    setDisable(e.empty)
    setError(e.error ? e.error.message : "")
  }

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>Checkout (<Link to="/checkout">{cart?.length} items</Link>)</h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123, React Lane</p> 
            <p>Mumbai, India</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {cart.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment</h3>
          </div>
          <div className="payment__details">
            {/* Stripe Payment */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <h3>Order Total: {value}</h3>
                  )}
                  decimalScale={2}
                  value={getCartTotal(cart)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disable || succedded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {/* error */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
