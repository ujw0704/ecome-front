
import './App.css';
import Login from './components/Login';
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';

import Cart from './components/Cart';
import { createContext, useState } from 'react';

export const cont = createContext({})


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(
    (localStorage.getItem("cartitems") === null)
      ? []
      : JSON.parse(localStorage.getItem("cartitems"))
  )
  return (
    <div className="App">
      <cont.Provider value={{ products, setProducts, cart, setCart }}>
        <BrowserRouter>
          <Header />
          <Routes>

            <Route path='/' element={<Home />}>Login</Route>
            <Route path='/about' element={<About />}>About</Route>
            <Route path='/login' element={<Login />}>Login</Route>
            <Route path='/Product' element={<Products />}></Route>
            <Route path='/Cart' element={<Cart />}></Route>


          </Routes>
        </BrowserRouter>
      </cont.Provider>
    </div>
  );
}

export default App;
