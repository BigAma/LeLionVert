import React from 'react'

import './nav.css'

import logo from '../../assets/lion_vert_.png'

import { MdContacts } from 'react-icons/md'


const Nav = () => {
  return (
    <div className='myNav'>
        <div className='marque'>
            <div className='logo'>
                <img src={logo} className='logo-img' alt='Le Lion Vert'></img>
            </div>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <h1>LE LION VERT</h1>
                </li>
            </ul>
        </div>
        <div className='humburger-menu'>
            <MdContacts />
        </div>
    </div>
  )
}

export default Nav