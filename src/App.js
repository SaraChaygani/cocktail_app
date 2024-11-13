
import { Routes, Route } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Nav from './components/Nav';
import Missing from './pages/Missing';
import { useNavigate } from 'react-router-dom';
import OrderSummary from './pages/OrderSummary';
import ProductDetails from './pages/ProductDetails';

function App() {
  const navigateBack = useNavigate();
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About navigateBack={navigateBack} />} />
        <Route path='/Products' element={<Products navigateBack={navigateBack} />} />
        <Route path='/order-summary' element={<OrderSummary />} />
        <Route path='/Products/:slug' element={<ProductDetails />} />
        <Route path='*' element={<Missing />} />

      </Routes>
    </div>
  );
}

export default App;
