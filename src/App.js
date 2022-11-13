import './App.css';

import AuthContext from './Admin/contexts/AuthProvider';
import { createRoutesFromChildren } from 'react-router-dom';

import React, { Component, useEffect } from 'react'
import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './Admin/pages/Login/Login';

import AdminLayout from './Admin/layouts/AdminLayout'

import RequireAuth from './Admin/components/RequireAuth';
import Unauthorized from './Admin/pages/Unauthorized';
import Page404 from './Admin/pages/Page404';

import UserList from './Admin/pages/User/UserList';
import UserCreate from './Admin/pages/User/UserCreate';

import AttributeShow from './Admin/pages/Attribute/AttributeShow';
import AttributeCreate from './Admin/pages/Attribute/AttributeCreate';
import AttributeValueCreate from './Admin/pages/Attribute/AttributeValueCreate';
import AttributeList from './Admin/pages/Attribute/AttributeList';

import ProductList from './Admin/pages/Product/ProductList'
import ProductEdit from './Admin/pages/Product/ProductEdit';

import RoleList from './Admin/pages/Role/RoleList'
import RoleCreate from './Admin/pages/Role/RoleCreate';

import BrandList from './Admin/pages/Brand/BrandList'
import BrandCreate from './Admin/pages/Brand/BrandCreate';

import CategoryList from './Admin/pages/Category/CategoryList'
import CategoryCreate from './Admin/pages/Category/CategoryCreate';

import Dashboard from './Admin/pages/Dashboard/Dashboard';
import PersistLogin from './Admin/components/PersistLogin';
import CurrentUserProfile from './Admin/pages/CurrentUserProfile/CurrentUserProfile';
import adminRoutes from './router/adminRouter'
import shopRoutes from './router/shopRouter'


// import Profile from './Admin/pages/profile/Profile'

const App = () => {
// const {dispatch, token, isLoggedIn} = useContext(AuthContext);

// get access token
// useEffect(()=> {
//   const _appSigning = localStorage.getItem("_appSigning")
//   if(_appSigning) {
//     const getToken = async () => {
//       const res = await api.post("/auth/access")
//       dispatch({type: "GET_TOKEN", payload: res.data.ac_token})

//       // // set token for upcoming axios calls
//       // api.interceptors.request.use(request => {
//       //   request.headers.common.Authorization = `Bearer ${token}`;
//       //   return request;
//       // });
//     }
//     getToken();
//   }
// }, [dispatch, isLoggedIn])

// useEffect(() => {
//   if (token) {
//     const getUser = async () => {
//       dispatch({ type: "SIGNING" });
//       const res = await api.get("/api/auth/user");
//       dispatch({ type: "GET_USER", payload: res.data });
//     };
//     getUser();
//   }
// }, [dispatch, token]);

const {isLoggedIn} = useContext(AuthContext);

  return (
    <div>
      <Routes>
      {shopRoutes}

        <Route path='/admin/login' element={<Login />} />
        
        {/* <Route path='/' element={isLoggedIn ? <HomeLayout /> : <Login />} /> */}
        
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />} >
            <Route path='/admin' element={<AdminLayout />}>
              <Route path='profile' element={<CurrentUserProfile />} />
              <Route path="dashboard" element={<Dashboard />} />
              
              <Route path="attribute/list" element={<AttributeList />} />
              <Route path="attribute/:attributeId" element={<AttributeShow />} />
              <Route path="attribute/create" element={<AttributeCreate />} />
              <Route path="attribute/:attributeId/values/create" element={<AttributeValueCreate />} />
              
              <Route path="product/list" element={<ProductList />} />
              <Route path="product/edit/:productId" element={<ProductEdit />} />
              <Route path="product/create" element={<ProductEdit />} />

              <Route path="role/list" element={<RoleList />} />
              <Route path="role/create" element={<RoleCreate />} />

              <Route path="brand/list" element={<BrandList />} />
              <Route path="brand/create" element={<BrandCreate />} />
           
              <Route path="category/list" element={<CategoryList />} />
              <Route path="category/create" element={<CategoryCreate />} />
   
              <Route path="user/list" element={<UserList />} />
              <Route path='user/edit/:userId' element={<UserCreate />} />
              <Route path='user/create' element={<UserCreate />} />
            </Route>

          </Route>
        </Route>


        

        <Route path="/unauthorized" element={<Unauthorized />} />
        
        {/* <Route path='/profile' element={<Profile />} />  */}
        {/* <Route path='/admin' element={<Admin />} /> */}

        {/* Catch all */}
        <Route path="*" element={<Page404 />} />
        

      </Routes>
    </div>
  )
}

export default App