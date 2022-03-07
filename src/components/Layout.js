import React from 'react'
import NavAfterLogin from './Navbar/NavAfterLogin'
import NavBeforeLogin from './Navbar/NavBeforeLogin'
import NavPopular from './Navbar/NavPopular'
import Footer from './Footer'
import { useSelector } from 'react-redux'

const Layout = (props) => {
  const {noNavbar, signup, vehicleMore, children} = props
  const {auth} = useSelector(state => state)

  return (
    <div>
      {!noNavbar && (vehicleMore ? <NavPopular /> : (auth.token ? <NavAfterLogin /> : <NavBeforeLogin />))}
      {children}
      {!signup && <Footer />}
    </div>
  )
}
export default Layout
