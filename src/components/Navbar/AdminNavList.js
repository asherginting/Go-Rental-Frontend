import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AdminNavList() {
    return (
        <ul className="navbar-nav me-xl-5">
            <li className="nav-item mx-xl-3">
                <NavLink to='/add-items' className={(navData) => navData.isActive ? 'active nav-link' : 'nav-link' }  id='vehicleType'>Add Items</NavLink>
            </li>
        </ul>
    );
}
