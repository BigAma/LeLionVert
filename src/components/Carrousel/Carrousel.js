import React from 'react'

import './carrousel.css'

import Ag from '../../assets/Artemisia-annua-gélules.png'
import Ai from '../../assets/Artemisia-annua-infusettes.png'
import Cg from '../../assets/Corossol-gélules.png'
import Ci from '../../assets/Corossol-infusettes.png'
import Mg from '../../assets/Moringa-gélules.png'
import Mi from '../../assets/Moringa-infusettes.png'

import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'

const Carrousel = () => {
  return (
    <div className='carrousel'>
        <h2>Nos Produit</h2>
        <div className='carrousel-item-wrapper'>
            <div className='chevronGauche'><BsChevronLeft/></div>
            <img src={Ag} alt='...' width='200px'></img>
            <img src={Ai} alt='...' width='200px'></img>
            <img src={Cg} alt='...' width='200px'></img>
            <img src={Ci} alt='...' width='200px'></img>
            <img src={Mg} alt='...' width='200px'></img>
            <img src={Mi} alt='...' width='200px'></img>
            <div className='chevronDroit'><BsChevronRight/></div>
        </div>
    </div>
  )
}

export default Carrousel