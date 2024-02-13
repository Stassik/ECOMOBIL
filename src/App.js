import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Navibar from './components/Navibar';

function App() {
return (
  <>
  <BrowserRouter>
  <Navibar />
  <Routes>
    <Route path="/" Component={Home}/>
    <Route />
    <Route />
  </Routes>
  </BrowserRouter>
  </>
)
}

export default App;
