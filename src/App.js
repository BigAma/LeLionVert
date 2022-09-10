import React from 'react'
import { BsSuitHeartFill } from 'react-icons/bs'

import Nav from './components/Nav/Nav'
import Produit from './components/Produit/Produit'
import Footer from './components/Footer/Footer'

export const App = () => {
  
  return (
    <div className='app'>
        <div className='header'>
            <Nav />
            <Produit />
        </div>

         <Footer />

        <div className='credits'>
          <p>Tout droits réserver. Ce site a ete crée avec  <BsSuitHeartFill/>  par <strong>UP-SET</strong></p>
        </div>
    </div>
  )
}

export default App