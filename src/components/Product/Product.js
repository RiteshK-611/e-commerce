import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useStateValue } from '../Context_API/StateProvider'
import "./Product.css"

const Product = ({ id, title, price, rating, image }) => {
  const [{ user }, dispatch] = useStateValue()
  
  const addToCart = () => {
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

    toast(<Product />, {
      progressClassName: 'progress__bar'
    })
  }

  const Product = () => {
    return (
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img style={{objectFit: 'contain', width: '15%'}} src={image} alt="" />
        <p style={{marginLeft: '30px', color: '#0e0e0e'}}>Item Added to Cart!</p>
      </div>
    )
  }

  return (
    <>
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

        <button style={{padding: '5px 15px', borderRadius: '3px'}} onClick={addToCart}>Add to Cart</button>
      </div>
      <ToastContainer style={{marginTop: '60px'}} />
    </>
  )
}

export default Product
