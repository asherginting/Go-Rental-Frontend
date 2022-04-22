import React, { useEffect } from 'react';
import '../assets/css/forgot-password.css';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { verify, verifyPassword, changePassword } from '../redux/actions/user';

function Verify() {
  const { type } = useParams();
  const { registerUser, verifyUser } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch({ type: 'VERIFY_USER_CLEAR' });
  }, []);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (type === 'register') {
      const username = ev.target.elements.username.value;
      const password = ev.target.elements.password.value;
      const code = ev.target.elements.code.value;
      dispatch(verify(username, code, password));
      // navigate('/login');
    }
    if (type === 'password') {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const code = document.getElementById('code').value;
      const confirmPassword = document.getElementById('confirm').value;
      dispatch(verifyPassword(email, code, password, confirmPassword));
      navigate('/login');
    }
  };

  const resendCode = (ev) => {
    ev.preventDefault();
    const email = document.getElementById('email').value;
    dispatch(changePassword(email));
  };

  return (
    <div className="forgot">
      <header>
        <div className="opacity" style={{ height: '1090px' }}>
          <div className="container">
            <h1 className="text-center">
              Verify your
              {type === 'register' ? 'new account' : 'forgot password'}
            </h1>
            <p className="text-center">{registerUser.message}</p>
            {type === 'register'
            && (
            <form onSubmit={handleSubmit} className="text-center form">
              {verifyUser.isSuccess && <Navigate to="/login" />}
              <input name="username" type="text" placeholder="Enter your username" />
              <input name="code" type="text" placeholder="Enter your code" />
              <input name="password" type="password" placeholder="Enter your password" />
              {verifyUser.isError && verifyUser.errMessage && <div className="mx-5 text-center text-danger h4 mt-3 bg-white py-2 px-5 fw-bold">{verifyUser.errMessage}</div>}
              {verifyUser.isLoading
                ? <div className="spinner-border mt-5" role="status" />
                : <button type="submit" className="btn send-link">Send</button>}
            </form>
            )}
            {type === 'password'
            && (
            <form className="text-center form">
              <input type="email" placeholder="Enter your email address" id="email" />
              <input type="number" placeholder="Enter your code" id="code" />
              <input type="password" placeholder="Enter your password" id="password" />
              <input type="password" placeholder="Enter your confirm password" id="confirm" />
              <button type="submit" onClick={handleSubmit} className="btn send-link">Confirm</button>
              <button onClick={resendCode} className="btn resend-link" type="button">Resend Link</button>
            </form>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Verify;