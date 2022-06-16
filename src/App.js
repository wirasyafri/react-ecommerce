import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Routes,Route} from 'react-router-dom';
import { render } from 'react-dom'

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
window.React = React

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      
      <Routes>
        <Route exact path='/' element={<ProductList/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<Default/>}/>
      </Routes>
      <Modal/>
    </React.Fragment>
  );
}

export default App;
