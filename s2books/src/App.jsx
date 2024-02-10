import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import {Route,Routes} from 'react-router-dom'
import FORM from './Components/FORM';
import MAINPAGE1 from './Components/MAINPAGE1';


function App() {



  return (
    <>
   
      <Routes>
        <Route path="/" element={<MAINPAGE1 />} />
        <Route path="/FORM" element={<FORM />} />
      </Routes>
    
    
    </>
  );
}

export default App;