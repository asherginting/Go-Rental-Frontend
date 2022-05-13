import React, { useEffect } from 'react';
import '../assets/css/forgot-password.css';
import { useNavigate } from 'react-router-dom';
import { verifyRegister } from '../redux/actions/verifyRegister';
import { useDispatch } from 'react-redux';

export default function Verify() {
    const dispatch = useDispatch();
    useEffect(()=> {
        window.scrollTo(0, 0);
    }, []);
    const navigate = useNavigate();

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const username = document.getElementById('username').value;
        const verification = document.getElementById('verification').value;
        const password = document.getElementById('password').value;
        dispatch(verifyRegister(username,verification, password));
        navigate('/login');
    };
    return (
        <div className='forgot'>
            <header>
                <div className="opacity">
                    <div className="container">
                        <h1 className="text-center">Don`t worry, we got your back!</h1>
                        <p className="text-center">You will receive a link to reset your password. <br />
                          If you haven`t received any link, click resend link</p>
                        <form className="text-center form">
                            <input id="username" type="text" placeholder="Username" />
                            <input id="verification" type="number" placeholder="Code Verification" />
                            <input id="password" type="password" placeholder="Password" />
                            <button onClick={handleSubmit} className="btn send-link">Confirmation</button>
                        </form>
                    </div>
                </div>
            </header>
        </div>
    );
}
