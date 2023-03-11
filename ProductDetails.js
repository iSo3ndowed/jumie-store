import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectedProduct, RemoveSelectedProduct } from './redux/actions/ProductActions'
 

const ProductDetails = () => {
  const product = useSelector((state) => state.product)
  const {image, title, price, description, category} = product
  const { productId } = useParams()
  const dispatch = useDispatch()
  const result = Math.floor(2.7)

  console.log(product);

  const FetchProductsDetails = async () => {
    const response = await axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .catch((err) => {
      console.log('Err', err);
    })

    dispatch(selectedProduct(response.data))
  }

  useEffect(() => {
    if(productId && productId !== '' ) FetchProductsDetails()
    return () => {
      dispatch(RemoveSelectedProduct())
    }
  },[productId])

  return (
    <div className='productDetails'>
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <>
        <div className="avatar">
          <img src={image} alt={title} className='avatar-details'/>
        </div>
        <div className="other-details">
          <h1>{title}</h1>
          <hr />
          <h2>{category}</h2>
          <hr />
          <h3>${price}</h3>
          <h3 className='price-slash-2'>${price * result}</h3>  
          <p>{description}</p>
          <button className='add_cart-btn'>add to cart</button>
        </div>
        </>
      )}
      
    </div>
  )
}

export default ProductDetails