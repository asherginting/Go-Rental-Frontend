import React from 'react';
import { Link } from 'react-router-dom';
import NavList from './NavList';
import AdminNavList from './AdminNavList';
import '../../assets/css/vehicle-type.css';
import logo from '../../assets/images/Go-Rental x100.png';
import {FiMail} from 'react-icons/fi';
import noImage from '../../assets/images/no-pp.jpg';
import { useSelector } from 'react-redux';

export default function NavPopular() {
    const {auth} = useSelector(state => state);

    return (
        <div className='vehicle-type'>
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
                        <AdminNavList/>
                        <div className="mail-profile ms-xl-5 d-flex align-items-center">
                            <Link to='/message' className="me-4 message"><span className="text-white badge total-message">1</span><FiMail className='icon-message' /></Link>
                            <Link to='/profile' className='profile'>
                                <img src={auth.userData.image || noImage} alt="Photoprofile." />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
