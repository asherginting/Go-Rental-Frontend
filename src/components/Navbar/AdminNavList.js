import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default function AdminNavList() {
    const [progress, setProgress] = useState(0);

    return (
        <ul className="navbar-nav me-xl-5">
            <LoadingBar
                color='#0085DF'
                height={7}
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            <li className="nav-item mx-xl-3">
                <NavLink to='/add-items' className={(navData) => navData.isActive ? 'active nav-link' : 'nav-link' }  id='vehicleType' onClick={() => setProgress(100)}>Add Items</NavLink>
            </li>
        </ul>
    );
}
