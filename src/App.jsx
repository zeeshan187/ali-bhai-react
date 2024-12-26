import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import About from './components/About'
import Contact from "./components/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



// class base comp  (by default)(state, componentDidMount, ComponentDidUpdate, ComponentDidUnMount)
// functional base comp 


// HOOKS(the concepts that was by default in class base component but was not exist in functional base component)
// (UseState, UseEffect, UseMemo, UseContext, UseRef)