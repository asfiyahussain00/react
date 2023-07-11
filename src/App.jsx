import React from 'react'
import { BrowserRouter  } from 'react-router-dom'
import { Link,  Routes, Route , Navigate } from 'react-router-dom'
import Home from './Page/Home'
import Products from './Page/Products'
import Singleproduct from './Page/Singleproduct'
import Page404 from './Page/Page404'
import Navigation from './Component/Navigation'
import Header from './Component/Header'
import { useState } from 'react'
import Footer from './Component/Footer'
import Signup from './Page/SIgnup'
import Login from './Page/Login'
import ProductPage from './Page/ProductPage'
import ImageSection from './Component/ImageSection'





function App() {

  return (
    <>  
       <Navigation/> 
       
    
      
         <Routes>
          <Route path ="/Products"  element={<Products />}/>
          <Route path ="/Products/:ProductID"  element={<ProductPage />}/>
          <Route path="/products/category/:singleproduct" element={<Singleproduct />}/>
           <Route path="/" element={<Home />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="*" element={ <Page404  />}/>
        </Routes>
      

  <Footer/>
  
  

  
  


  
  

      </>
  )}

export default App

