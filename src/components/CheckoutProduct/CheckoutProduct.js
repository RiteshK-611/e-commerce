import React from 'react'
import { useStateValue } from '../Context_API/StateProvider'
import "./CheckoutProduct.css"
import FlipMove from 'react-flip-move'

const CheckoutProduct = ({ key, id, title, price, rating, image, hideButton }) => {
  const [{ cart }, dispatch] = useStateValue()

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",  
      id,
    })
  }

  return (
    <FlipMove duration={1000} easing="ease-in-out">
      <div className="checkoutProduct">
        <img className='checkoutProduct__image' src={image} alt={key} />

        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>⭐</p>
                ))}
            </div>
            {!hideButton && (
                <button onClick={removeFromCart}>Remove from Cart</button>
            )}
        </div>
      </div>
    </FlipMove>
  )
}

export default CheckoutProduct
