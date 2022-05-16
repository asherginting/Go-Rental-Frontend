import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/btn-admin.css';
import { useSelector } from 'react-redux';

function BtnAdmin(props) {
    const navigate = useNavigate();
    const auth = useSelector(state => state.auth);

    const admin = (ev) => {
        ev.preventDefault();
        navigate('/add-items');
    };
    const {className} = props;
    return (
        <div>
            {auth.userData.username ==='Admin' &&
            <button onClick={admin} className={`btn-admin ${className}`}>Add Vehicles</button>}
        </div>
    );
}

export default BtnAdmin;