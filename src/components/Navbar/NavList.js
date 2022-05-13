import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavList() {
    return (
        <ul className="navbar-nav me-xl-5">
            <li className="nav-item">
                <NavLink to='/' className={(navData) => navData.isActive ? 'active nav-link' : 'nav-link' } id='home'>Home</NavLink>
            </li>
            <li className="nav-item mx-xl-3">
                <NavLink to='/vehicle-type' className={(navData) => navData.isActive ? 'active nav-link' : 'nav-link' }  id='vehicleType'>Vehicle Type</NavLink>
            </li>
            <li className="nav-item me-xl-3">
                <NavLink to='/history' className='nav-link' id='history'>History</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/about' className='nav-link' id='about'>About</NavLink>
            </li>
        </ul>
    );
}
