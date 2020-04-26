import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import Contact from './components/Contact'
import User from './components/User'
import Product from './components/Product'
import NotFound from './components/NotFound'

const routing = (
    
    <Router>
      <div className='navBar'>
        <Link to='/'>Home</Link><br/>
        <Link to='/product'>Product</Link><br/>
        <Link to='/user'>User</Link><br/>
        <Link to='/contact'>Contact</Link><br/>
      </div>
      <Switch>
        <Route exact path='/' component={App}></Route>
        <Route path='/contact' component={Contact}></Route>
        <Route path='/user' component={User}></Route>
        <Route path='/product' component={Product}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
    )
    

ReactDOM.render(
  routing,
  document.getElementById('root')
);
