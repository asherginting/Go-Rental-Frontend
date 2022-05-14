import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default function NavList() {
    const [progress, setProgress] = useState(0);
  
    return (
        <ul className="navbar-nav me-xl-5">
            <LoadingBar
                color='#0085DF'
                height={7}
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            <li className="nav-item">
                <NavLink to='/' className={(navData) => navData.isActive ? 'active nav-link' : 'nav-link' } id='home' onClick={() => setProgress(100)}>Home</NavLink>
            </li>
            <li className="nav-item mx-xl-3">
                <NavLink to='/vehicle-type' className={(navData) => navData.isActive ? 'active nav-link' : 'nav-link' }  id='vehicleType' onClick={() => setProgress(100)}>Vehicle Type</NavLink>
            </li>
            <li className="nav-item me-xl-3">
                <NavLink to='/history' className='nav-link' id='history' onClick={() => setProgress(100)}>History</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/about' className='nav-link' id='about' onClick={() => setProgress(100)}>About</NavLink>
            </li>
        </ul>
    );
}
