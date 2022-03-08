import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavList from './NavList'
import '../../assets/css/vehicle-type.css'
import logo from "../../assets/images/Go-Rental x100.png"
import {FiMail} from 'react-icons/fi'
import {AiOutlineSearch} from 'react-icons/ai'
import noImage from '../../assets/images/no-pp.jpg'
import { useSelector } from 'react-redux'

export default function NavPopular() {
  const navigate = useNavigate()
  const {auth} = useSelector(state => state)

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const search = ev.target.elements['search'].value
    navigate(`/search?keyword=${search}`)
  }

  return (
    <div className='vehicle-type'>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container-fluid bg-white navigation">
          <Link to='/' className="navbar-brand">
            <img src={logo} alt="Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="navbar button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navigation" id="navbarNav">
            <NavList />
            {/* <form onSubmit={handleSubmit} className="d-flex position-relative">
              <input name='search' className="form-control" type="search" placeholder="Search vehicle" />
              <button type="submit" className="btn position-absolute end-0">
                <AiOutlineSearch className='search-icon' />
              </button>
            </form> */}
            <div className="mail-profile ms-xl-5 d-flex align-items-center">
              <Link to='/message' className="me-4 message"><span className="text-white badge total-message">1</span><FiMail className='icon-message' /></Link>
              <Link to='/profile' className='profile'>
                <img src={auth.userData.image || noImage} alt="Photoprofile." />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
