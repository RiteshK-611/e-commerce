import React from 'react'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import { useStateValue } from '../Context_API/StateProvider'
import './Checkout.css'
import Subtotal from './Subtotal'

const Checkout = () => {
  const [{ cart, user }, dispatch] = useStateValue()

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__list">Your shopping Basket</h2>
          {cart?.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
