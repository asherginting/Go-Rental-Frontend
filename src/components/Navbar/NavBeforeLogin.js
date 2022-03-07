/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import NavList from './NavList'
import '../../assets/css/nav-main.css'
import logo from "../../assets/images/Go-Rental x100.png"
import { Link } from 'react-router-dom'

export default class NavBeforeLogin extends Component {
  render() {
    return (
      <div className='nav-main'>
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
          <div className="container-fluid bg-white navigation">
            <Link to='/' className="navbar-brand">
              <img src={logo} alt="Logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="navbar button">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navigation" id="navbarNav">
              <NavList />
              <div className="button-list d-flex align-items-center">
                <Link to='/login' className="mx-lg-3 ms-xl-1 me-xl-5 btn btn-outline">Login</Link>
                <Link to='signup' className="btn btn-green">Register</Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
