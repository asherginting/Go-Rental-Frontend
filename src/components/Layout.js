import React, { Component } from 'react'
import NavAfterLogin from './Navbar/NavAfterLogin'
import NavBeforeLogin from './Navbar/NavBeforeLogin'
import NavPopular from './Navbar/NavPopular'
import Footer from './Footer'

export default class Layout extends Component {
  render() {
    const {noNavbar, signup, isLogin, vehiclePopular, children} = this.props
    return (
      <div>
        {!noNavbar && (vehiclePopular ? <NavPopular /> : (isLogin ? <NavAfterLogin /> : <NavBeforeLogin />))}
        {children}
        {!signup && <Footer />}
      </div>
    )
  }
}
