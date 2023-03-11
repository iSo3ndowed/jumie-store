import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import {setProducts} from './redux/actions/ProductActions'



const ProductListing = () => {
    const products = useSelector((state) => state)
    const dispatch = useDispatch()
    const GetProducts = async () => {
        const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch((err) => {
            console.log('Err', err)
        })
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        GetProducts()
    },[])
    console.log(products);
  return (
    <div className='product-flex'>
        <ProductComponent/>
    </div>
  )
}

export default ProductListing