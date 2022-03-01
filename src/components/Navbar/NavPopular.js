import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavList from './NavList'
import '../../assets/css/vehicle-type.css'
import logo from "../../assets/images/login/Go-Rental x100.png"
import photo from "../../assets/images/profile/profile.png"
import {FiMail} from 'react-icons/fi'
import {AiOutlineSearch} from 'react-icons/ai'

export default class NavPopular extends Component {
  render() {
    return (
      <div className='vehicle-type'>
        <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
          <div class="container-fluid bg-white navigation">
            <a href="index.html" class="navbar-brand">
              <img src={logo} alt="Logo" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="navbar button">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse navigation" id="navbarNav">
              <NavList />
              <form class="d-flex position-relative">
                <input class="form-control" type="search" placeholder="Search vehicle" />
                <button type="submit" class="btn position-absolute end-0">
                  <AiOutlineSearch className='search-icon' />
                  <i class="fa-solid fa-magnifying-glass search-icon"></i>
                </button>
              </form>
              <div class="mail-profile ms-xl-5 d-flex align-items-center">
                <Link to='/message' class="me-4 message"><span class="text-white badge total-message">1</span><FiMail className='icon-message' /></Link>
                <Link to='/profile/41' className='profile'>
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
