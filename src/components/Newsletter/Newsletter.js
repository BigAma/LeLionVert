import React from 'react'

import './newsletter.css'

const Newsletter = () => {
    return (
        <div className='newsletter'>
            <h2>Inscrivez vous a notre Newsletter</h2>
            <div className='input-box'>
                <input className='newsletterInput' type='email' placeholder='Entrer votre email'></input>
                <button className='newsletterBtn'>Envoyer</button>
            </div>
        </div>
    )
}

export default Newsletter