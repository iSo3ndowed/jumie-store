import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const ProductComponent = () => {
    const result = Math.floor(2.7)
    const products = useSelector((state) => state.allProducts.products)
    const ProductList = products.map((product) => {
        const {id, title, image, category, price} = product
        return (
            <>
                <div className='products-wrap' key={id}>
                    <Link to={`./product/${id}`}>
                       <div className="product-details">
                                <img src={image} alt={title} />
                                <div className="product-price">
                                    <h1>{category}</h1>
                                    <h1>${price}</h1>
                                    <h1 className='price-slash'>${price * result}</h1>  
                                </div>
                        </div>
                            
                            
                    </Link>   
                    <button className='add_cart-btn'>add to cart</button>            
                </div>
                </>
        )
    })
    return (
        <>{ProductList}</>
    )
}
    
export default ProductComponent