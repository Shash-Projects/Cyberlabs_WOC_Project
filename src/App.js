import React, {useEffect, useState} from 'react';
import Home from './Home.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/reg/Signup.js";
import Login from "./components/reg/Login.js";
import { auth } from './Firebase.js';
import DisplayPage from './components/DisplayPage.js';


export default function App() {

  const [userName, setUserName] =useState("")

  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.displayName)          // When a user signs up/logs in, this will bring the name which he gave 
      }else{                                   // while authenticating
        setUserName("")
      }
    });
  },[]);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home name={userName}/>}/>     {/*  sending 'name' as a prop to home page  */}
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>                {/*These four are my major routes as they are a separate entity in themselves */}
        <Route path='/DisplayPage' element={<DisplayPage/>}/>
      </Routes>
    </Router>
  )
}
