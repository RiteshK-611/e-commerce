import React from 'react'
import { useStateValue } from '../Context_API/StateProvider'
import "./Product.css"

const Product = ({ id, title, price, rating, image }) => {
  const [{ user }, dispatch] = useStateValue()
  
  const addToCart = () => {
    if (!user) {
      alert("Sign In/ Sign Up to Add Product")
    }
    else {
      dispatch({
        type: "ADD_TO_CART",  
        item: {
          id: id,
          title: title,
          price: price,
          rating: rating,
          image: image,
        }
      })
    }
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_, i) => (
            <p>⭐</p>
          ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToCart}>Add to Cart</button>
    </div>
  )
}

export default Product
