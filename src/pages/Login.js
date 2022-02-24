import React, { Component } from 'react'
import '../assets/css/login.css'
import dot from '../assets/images/login/ellipse.png'
import google from '../assets/images/login/google.png'

export default class Login extends Component {
  state = {
    email: '',
    pwd: '',
    isLogged: false,
  }
  
  checkLogin = (ev) => {
    ev.preventDefault()
    if (this.state.email === 'admin@mail.com') {
      if (this.state.pwd === '1234') {
        this.setState({isLogged: true})
        this.props.isLogin(true)
      } else {
        window.alert('Wrong password!')
      }
    } else {
      window.alert('Wrong email!')
    }
  }

  render() {
    return (
      <>
        <header className="register login">
          <div className="opacity">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6 desc">
                  <div className="dot top"><img src={dot} alt="dot" /></div>
                  <div className="d-flex flex-column align-items-center left-section">
                    <h1>Le`ts Explore <br /> The World</h1>
                    <div className="reverse-top">
                      <a href="#" className="dont-have">Don`t have account?</a> <br />
                      <a href="signup.html" className="btn btn-signup">Sign Up</a>
                    </div>
                  </div>
                  <div className="dot bottom"><img src={dot} alt="dot" /></div>
                </div>
                
                <div className="col-12 col-md-6 form">
                  <form className="form-register row">
                    <input onChange={(ev) => this.setState({email: ev.target.value})} type="email" placeholder="Email" /> <br />
                    <input onChange={(ev) => this.setState({pwd: ev.target.value})} type="password" placeholder="Password" /> <br />
                    <div><a href="forgot.html" className="forgot">Forgot password?</a> <br/></div>
                    <button onClick={this.checkLogin} type='submit' className="btn login">Login</button>
                    <a href="#" className="btn google"><img src={google} alt="google"/> Login With Google</a>
                    <div className="reverse-bottom d-none g-0">
                      <a href="#" className="dont-have">Don’t have account?</a> <br />
                      <a href="signup.html" className="btn btn-signup">Sign Up</a>
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
}