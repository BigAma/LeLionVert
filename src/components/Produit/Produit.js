import React, { useState } from 'react'

import Description from '../Description/Description'

import {BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from 'react-icons/bs'

import Ag from '../../assets/Artemisia-annua-gélules.png'
import Ai from '../../assets/Artemisia-annua-infusettes.png'
import Cg from '../../assets/Corossol-gélules.png'
import Ci from '../../assets/Corossol-infusettes.png'
import Mg from '../../assets/Moringa-gélules.png'
import Mi from '../../assets/Moringa-infusettes.png'


import './produit.css'

const Produit = () => {
  const produits = [{titre:'Artémisia Annua Géllules x63', img: Ag}, {titre:'Artémisia Annua Infusettes x20', img: Ai}, {titre:'Graviola Corossol Géllules x60', img: Cg},
  {titre:'Graviola Corossol Infusettes x20', img: Ci}, {titre:'Moringa Oleifera Géllules x60', img: Mg}, {titre:'Moringa Oleifera Infusettes x20', img: Mi}]

  
  const length = 6

  const [element, setElement ] = useState(0)

  const nextElement = () => {
    setElement(element === length - 1 ? 0 : element + 1)
  }

  const prevElement = () => {
    setElement(element === 0 ? length - 1  : element - 1)
  }

  return (
  <div className='product-wrapper'>  
     <div className='btnchoix'>
      <BsFillArrowLeftSquareFill className='left-arrow arr' onClick={prevElement}/>
      <BsFillArrowRightSquareFill className='right-arrow arr' onClick={nextElement}/>
    </div>
    <div >
      <div className='produit'>
        <div className='img-produit'>
          <img src={produits[element].img} alt='Complement Alimentaire' width='300px'></img>
        </div>

        <div className='specifications'>
          <h1>{produits[element].titre}</h1>
          <p>disponible</p>
        </div>
      </div>
    </div>

    <Description produit={element}/>
  </div>
  )
}


export default Produit