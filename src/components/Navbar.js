import React, { Component } from 'react'
import logo from '../assets/images/logo.png'

export default class Navbar extends Component {
  render() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="logo" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./vehicle.html">Vehicle</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">History</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
            </ul>
            <div class="toggled-action">
              <button onclick="alert('Login Needed!')" class="button-outline mx-3">Login</button>
              <button class="button-filled">Register</button>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
