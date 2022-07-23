import React from 'react'

import Nav from './components/Nav/Nav'
import Produit from './components/Produit/Produit'
import Carrousel from './components/Carrousel/Carrousel'
import Footer from './components/Footer/Footer'
import Newsletter from './components/Newsletter/Newsletter'

export const App = () => {
  
  return (
    <div className='app'>
        <div className='header'>
            <Nav />
            <Produit />
        </div>

        <Carrousel />

        <Newsletter />

        <Footer />

        <div className='credits'>
          <p>Tout droits reserver. Ce site a ete cree avec Coeur par UP-SET</p>
        </div>
    </div>
  )
}

export default App