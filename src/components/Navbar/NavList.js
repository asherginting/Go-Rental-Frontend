import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavList() {
  return (
    <ul class="navbar-nav me-xl-5">
      <li class="nav-item">
        <NavLink to='/' className='nav-link' activeClassName='active'>Home</NavLink>
      </li>
      <li class="nav-item mx-xl-3">
        <NavLink to='/vehicle/type' className='nav-link' activeClassName='active'>Vehicle Type</NavLink>
      </li>
      <li class="nav-item me-xl-3">
        <NavLink to='/history' className='nav-link' activeClassName='active'>History</NavLink>
      </li>
      <li class="nav-item">
        <NavLink to='/about' className='nav-link' activeClassName='active'>About</NavLink>
      </li>
    </ul>
  )
}
