import { Auth } from 'aws-amplify';
import React, { useState } from 'react';

Auth.currentAuthenticatedUser()

const NavBar = (props) => {
  return (
    <nav>
      <div class='navbar'>
        <ul class='nav-list nav-list-left'>
          <li class='nav-item'>
            <button class='nav-item' onClick={() => props.setPage('Blog')}>Blog</button>
          </li>
          <li class='nav-item'>
            <button class='nav-item' onClick={() => props.setPage('Dance')}>Dance</button>
          </li>
          <li class='nav-item'>
            <button class='nav-item' onClick={() => props.setPage('PlantShop')}>Plant Shop</button>
          </li>
          <li class='nav-item'>
            <button class='nav-item' onClick={() => props.setPage('Dev')}>Home</button>
          </li>
          <li class='nav-item'>
            <button class='nav-item' onClick={props.openModal}>Sign In</button>
          </li>
          <li class='nav-item'>
            <div>Current user: {props.currentUser} </div >
          </li>

        </ul>
      </div>
    </nav>
  )
}

export default NavBar;