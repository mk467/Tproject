import {  } from 'react';
import './App.css'
import { NavBar } from './NavBar';
import Map from './Map';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Products } from './Products';


function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/Products' element={<Products/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
