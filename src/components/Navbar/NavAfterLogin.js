/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavList from './NavList'
import '../../assets/css/nav-after.css'
import {FiMail} from 'react-icons/fi'
import logo from '../../assets/images/login/Go-Rental x100.png'
import photo from '../../assets/images/profile/profile.png'

export default class NavAfterLogin extends Component {
  render() {
    return (
      <div className='nav-after'>
        <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
          <div class="container-fluid bg-white navigation">
            <Link to='/' class="navbar-brand">
              <img src={logo} alt="Logo" />
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="navbar button">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse navigation" id="navbarNav">
              <NavList />
              <div class="mail-profile ms-xl-5 d-flex align-items-center">
                <Link to='/message' class="me-4 message"><span class="text-white badge total-message">1</span><FiMail className='icon-message' /></Link>
                <Link to='/profile' className='profile' activeClassName='active'>
                  <img src={photo} alt="Photoprofile." />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
