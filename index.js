import { combineReducers } from "redux";
import { ProductReducer, selectedProductReducer } from "./Productsreducer";

const allReducers = combineReducers({
    allProducts: ProductReducer,
    product: selectedProductReducer,
})

export default allReducers