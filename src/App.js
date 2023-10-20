import React, { useEffect, Component } from 'react';
import{ BrowserRouter, Routes, Route } from 'react-router-dom';
import {NewProduct,NewShop } from './pages';
import './App.css';



export default class App extends Component {
  
  constructor() {
    super();
   
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      loading:false,
      user:{}
     
    };

    
  }

  

  componentDidMount() {
  }

  

  render() {
   
   return (
      <div> 
        <BrowserRouter>
        
        <Routes>
                  {/* Log In / Sign Up */}
                  <Route path='/' element={ <NewShop/>}/>
                  <Route path='/NewShop' element={<NewShop/>}/>
                  <Route path='/NewProduct' element={ <NewProduct/>}/>

                

          </Routes>
        </BrowserRouter>
      </div>
  )
  }
}