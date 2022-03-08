import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import '../assets/css/login.css'
import dot from '../assets/images/dot-register.png'
import google from '../assets/images/google.png'
import { login } from '../redux/actions/auth'

const Login = () => {
  const dispatch = useDispatch()
  const {auth} = useSelector(state => state)

  useEffect(() => {
    window.scrollTo(0, 0)
    console.log(auth)
  }, [])

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const username = ev.target.elements['username'].value
    const password = ev.target.elements['password'].value
    dispatch(login(username, password))
  }
  
  return (
    <>
      {auth.token !== null && <Navigate to='/profile' />}
      <header className="register login">
        <div className="opacity">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 desc">
                <div className="dot top"><img src={dot} alt="dot" /></div>
                <div className="d-flex flex-column align-items-center left-section">
                  <h1>Le`ts Explore <br /> The World</h1>
                  <div className="reverse-top">
                    <Link to="#" className="dont-have">Don`t have account?</Link> <br />
                    <Link to='/signup' className="btn btn-signup">Sign Up</Link>
                  </div>
                </div>
                <div className="dot bottom"><img src={dot} alt="dot" /></div>
              </div>
              
              <div className="col-12 col-md-6 form">
                <form onSubmit={handleSubmit} className="form-register row">
                  {auth.isError && auth.errorMessage && <div style={{backgroundColor: 'red'}} className='alert' role='alert'>{auth.errorMessage}</div>}
                  <input name='username' type="text" placeholder="Username" /> <br />
                  <input name='password' type="password" placeholder="Password" /> <br />
                  <div><Link to='/forgot-password' className="forgot">Forgot password?</Link> <br/></div>
                  <button type='submit' className="btn login">Login</button>
                  <Link to="#" className="btn google"><img src={google} alt="google"/> Login With Google</Link>
                  <div className="reverse-bottom d-none g-0">
                    <Link to="#" className="dont-have">Don’t have account?</Link> <br />
                    <Link to='/signup' className="btn btn-signup">Sign Up</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

// const mapStateToProps = (state) => ({auth: state.auth}) // read data from redux
// const mapDispatchToProps = (dispatch) =>({dispatch})

// export default connect(mapStateToProps, mapDispatchToProps)(Login)
export default Login
