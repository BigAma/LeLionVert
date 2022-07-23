import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

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
    <div className='footer bg-dark'>
      <div className='footer-header'>
        <h1>Le Lion Vert</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod rerum nam quae laboriosam. 
            Ullam error minus, nisi dolorem consectetur 
        </p>
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