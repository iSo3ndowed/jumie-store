import React from 'react';
import Header from './assets/Header';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Cart from './assets/Cart';
import ProductListing from './assets/ProductListing';
import Footer from './assets/Footer';
import ProductDetails from './assets/ProductDetails';
import User from './assets/User';


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="main-page">
          <Routes>
            <Route path = '/Cart.js' element={<Cart/>}/>
            <Route path = '/' element={<ProductListing/>}/>
            <Route path = '/User.js' element={<User/>}/>
            <Route path = '/product/:productId' element={<ProductDetails/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
