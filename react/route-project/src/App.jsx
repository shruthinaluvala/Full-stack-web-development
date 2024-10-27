import React from 'react'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Products from './pages/Products'
import{BrowserRouter,Route,Router,Routes} from 'react-router-dom'
//import {} from 'react'
const App = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/products' element={<Products/>} />
                <Router path='/contact' element={<Contact/>} />
            </Routes>
        </BrowserRouter>
      
    </>
  )
}

export default App

