/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import NavList from './NavList';
import '../../assets/css/nav-main.css';
import {FiMail} from 'react-icons/fi';
import logo from '../../assets/images/Go-Rental x100.png';
import noImage from '../../assets/images/no-pp.jpg';
import { useSelector } from 'react-redux';
import AdminNavList from './AdminNavList';
import LoadingBar from 'react-top-loading-bar';

const NavAfterLogin = () => {
    const auth = useSelector(state => state.auth);
    const [progress, setProgress] = useState(0);

    return (
        <div className='nav-main'>
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                <div className="container-fluid bg-white navigation">
                    <LoadingBar
                        color='#0085DF'
                        height={7}
                        progress={progress}
                        onLoaderFinished={() => setProgress(0)}
                    />
                    <Link onClick={() => setProgress(100)} to='/' className="navbar-brand" >
                        <img src={logo} alt="Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="navbar button">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navigation" id="navbarNav">
                        <NavList onClick={() => setProgress(100)}/>
                        <AdminNavList onClick={() => setProgress(100)}/>
                        <div className="mail-profile ms-xl-5 d-flex align-items-center">
                            <Link onClick={() => setProgress(100)} to='/message' className="ms-lg-3 me-4 message"><span className="text-white badge total-message">0</span><FiMail className='icon-message' /></Link>
                            <Link onClick={() => setProgress(100)} to='/profile' className='profile' >
                                <img src={auth.userData.image || noImage} alt="Photoprofile."  />
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavAfterLogin;
