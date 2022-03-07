import React, { Component } from 'react'
import '../assets/css/forgot-password.css'
import {IoChevronBack} from 'react-icons/io5'
import { Link } from 'react-router-dom'

export default class ForgotPassword extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className='forgot'>
      <header>
        <div className="opacity">
          <div className="container">
            <Link className="back" to='/login'>
              <IoChevronBack />
              <span>Back</span>
            </Link>
            <h1 className="text-center">Don`t worry, we got your back!</h1>
            <p className="text-center">You will receive a link to reset your password. <br />
              If you haven`t received any link, click resend link</p>
            <form className="text-center form">
              <input type="email" placeholder="Enter your email address" />
              <button className="btn send-link">Send Link</button>
              <button className="btn resend-link">Resend Link</button>
            </form>
          </div>
        </div>
      </header>
      </div>
    )
  }
}
