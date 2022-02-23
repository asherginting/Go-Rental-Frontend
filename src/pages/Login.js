import React, { Component } from 'react'
import '../assets/css/login.css'
import Footer from '../components/Footer'
import Ellipse from '../assets/images/login/ellipse.png'
import Google from '../assets/images/login/google.png'

export default class Login extends Component {
  state = {
    email: '',
    pass: '',
    isLogged: false,
  }

  checkLogin = (ev) => {
    ev.preventDefault()
    if (this.state.email === 'admin@mail.com') {
      if (this.state.pass === '1234') {
        this.setState({isLogged: true})
        this.props.isLogged(true)
      } else {
        window.alert('Wrong Password!')
      }
    } else {
      window.alert('Wrong Email!')
    }
  }

  render() {
    return (
      <>
        <header className="login mb-5">
          <div className="opacity">
            <div className="container">
              <div className="row">
                <div className="col-md-6 desc">
                  <div className="ellipse top"><img src={Ellipse} alt="ellipse" /></div>
                  <h1>Let's Explore <br/> The World</h1>
                  <div className="text">Don't have account?</div>
                  <a href="/signup.html" className="btn btn-signup">Sign Up</a>
                  <div className="ellipse bottom"><img src={Ellipse} alt="ellipse" /></div>
                </div>
                <div className="col-md-6 form">
                  <form className="form-login row">
                    <input onChange={(ev) => this.setState({email: ev.target.value})} type="email" placeholder="Email" /> <br/>
                    <input onChange={(ev) => this.setState({pass: ev.target.value})} type="password" placeholder="Password" /> <br/>
                    <div><a href="/forgot-pass.html" clasName="forgot">Forgot password?</a> <br/></div>
                    <button onClick={this.checkLogin} type='submit' className='btn login'>Login</button>
                    <a href="#" className="btn google"><img src={Google} alt='Google' /> Login With Google </a>
                    <div className="reverse-bottom d-none g-0">
                      <a href="#" className="text">Don’t have account?</a> <br />
                      <a href="signup.html" className="btn btn-signup">Sign Up</a>
                    </div>
                  </form >
                </div>
              </div>
            </div>
          </div>
        </header>
      
      <Footer />
      </>
    )
  }
}
  