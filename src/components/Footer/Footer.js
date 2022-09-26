import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { BsInstagram, BsTelephoneFill, BsWhatsapp } from 'react-icons/bs'

import './footer.css'

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a5aum0c', 'template_tt3g0jr', form.current, '4cZaJ-L3Y0aLtcKxs')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div id='footer-id'className='footer bg-dark'>
      <div className='footer-header'>
        <h1>Le Lion Vert</h1>
        <p>Nous contactez ? Rien de plus facile :   </p>
        <div className='footer-contact-link'>
          <div className='footer-contact-link-1'>
            <BsInstagram />
            <strong>        Instagram :  </strong>
            <br/>
            <a href='https://instagram.com/lionvertdjibouti?igshid=YmMyMTA2M2Y='>   Le Lion Vert Djibouti</a>
          </div>
          <div>
            <BsTelephoneFill />
            <strong>        Telephone :  </strong> 
            <p>   +253 77 60 00 90</p>
          </div>
          <div>
            <BsWhatsapp />
            <strong>        Whatsapp :  </strong> 
            <p>   +221 775 531 873</p>
          </div>
        </div>

        <p>Ou en remplissant ce formulaire que nous recevrons par email :  </p>
      </div>

      <div className='contact-form'>
        <h1>Contact</h1>
        <form className='form-form' onSubmit={sendEmail} ref={form} >
          <label>Nom : </label>
          <input className='input-legit' type='text' placeholder='Nom' name='user_nom'/>
          <label>Prénom : </label>
          <input className='input-legit' type='text' placeholder='Prénom' name='user_prenom'/>
          <label>Email : </label>
          <input className='input-legit' type='email' placeholder='example.dj' name='user_email'/>
          <label placeholder='Votre message'>Message : </label>
          <textarea name='message'/>
          <input type='submit' value="Envoyer" className="btn btn-success submit-btn" />
        </form>
      </div>
    </div>
  )
}

export default Footer