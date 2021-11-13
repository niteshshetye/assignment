import React from 'react'
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux';

// component

// pages
import Home from './pages/Home/Home';
import ProductList from './pages/ProductList/ProductList';
import Product from './pages/Product/Product';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart'
import Admin from './pages/admin/pages';

// css
import './App.css'


const App = () => {
    const user = useSelector(state => state.user)
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
                    <Route exact path='/admin' >
                        {!(user.currentUser && user.currentUser.isAdmin)? <Redirect to='/' />: <Admin />}
                    </Route>
                    <Route exact path='/register'>
                        {user.currentUser? <Redirect to='/' />: <Register />}
                    </Route>
                    <Route exact path='/login'>
                        {user.currentUser? <Redirect to='/' />: <Login />}     
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
