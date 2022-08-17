import React from 'react'

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
          <p>Tout droits reserver. Ce site a ete cree avec Coeur par UP-SET</p>
        </div>
    </div>
  )
}

export default App