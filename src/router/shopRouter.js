import React from "react";
import ProductDetails from "../Shop/pages/ProductDetails";
import Home from "../Shop/pages/Home";

import ProductList from "../Shop/pages/ProductList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "../Shop/pages/Register";
import Login from "../Shop/pages/Login";
import Cart from "../Shop/pages/Cart"; 

const ShopRouter = [
<>
<Route exact path='/' element={<Home/>} />
    <Route exact path='/register' element={<Register/>} />
    <Route exact path='/login' element={<Login/>} />
    <Route path='/products/:category' element={<ProductList/>} />
    <Route path='/product/:productId' element={<ProductDetails/>} />
    <Route exact path='/cart' element={<Cart/>} />
</>

]




export default ShopRouter