/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import NavList from './NavList'
import '../../assets/css/nav-before.css'
import logo from "../../assets/images/login/Go-Rental x100.png"

export default class NavBeforeLogin extends Component {
  render() {
    return (
      <div className='nav-before'>
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
          <div className="container-fluid bg-white nav-fluid">
            <div className="container navigation">
              <a href="index.html" className="navbar-brand">
                <img src={logo} alt="Logo" />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="navbar">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse main-nav" id="navbarNav">
                <NavList />
                <div className="button-section ms-lg-5">
                  <a href="../pages/Login" className="me-lg-4 btn btn-outline">Login</a>
                  <a href="signup.html" className="btn btn-green">Register</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
