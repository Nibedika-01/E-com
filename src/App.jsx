import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Category from './Pages/Category'
import Product from './Pages/Product'
import LoginSignUp from './Pages/LoginSignUp'
import Cart from './Pages/Cart'
import Footer from './Components/Footer/Footer'
import { assets } from './Components/assets/assets'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/top' element={<Category category = "Top"/>}/>
          <Route path='/bottom' element={<Category category = "Bottom"/>}/>
          <Route path='/dress' element={<Category category = "Dress"/>}/>
          <Route path='/accesories' element={<Category category = "Accesories"/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignUp/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
