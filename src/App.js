import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// component

// pages
import Home from './pages/Home/Home';
import ProductList from './pages/ProductList/ProductList';
import Product from './pages/Product/Product';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart'

// css
import './App.css'


const App = () => {
    return (
        <div className='App'>
            <Router>
                <Switch>
                    <Route exact path='/productlist/:categories'>
                        <ProductList />
                    </Route>
                    <Route exact path='/product/:id'>
                        <Product />
                    </Route>
                    <Route exact path='/register'>
                        <Register />
                    </Route>
                    <Route exact path='/login'>
                        <Login />
                    </Route>
                    <Route exact path='/cart'>
                        <Cart />
                    </Route>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
