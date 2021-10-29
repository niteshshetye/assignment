import React from 'react'

// component

// pages
import Home from './pages/Home/Home';
import ProductList from './pages/ProductList/ProductList';
import Product from './pages/Product/Product';

// css
import './App.css'


const App = () => {
    return (
        <div className='App'>
            {/* <Home /> */}
            {/* <ProductList /> */}
            <Product />
        </div>
    )
}

export default App
