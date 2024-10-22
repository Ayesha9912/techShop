import React from 'react'
import Mainpage from './components/Mainpage';
import Cart from './components/Cart';
import { BrowserRouter, Routes , Route } from 'react-router-dom';



function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
    </BrowserRouter>
    </>
     
  )
}
export default App