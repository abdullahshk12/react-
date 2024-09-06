import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Feature from './components/Feature'
import Work from './components/Work'
import Price from './components/Price'
import Tst from './components/Tst'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
   <Navbar/>
   <div className="max-w-7xl mx-auto pt-20 px-6">
   <Hero/>
   <Feature/>
   <Work/>
   <Price/>
   <Tst/>
   <Footer/>
   </div>
   
    </>
  )
}

export default App