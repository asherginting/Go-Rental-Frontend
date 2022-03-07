import React, { useEffect } from 'react'
import '../assets/css/profile.css'
import {BsFillPenFill} from 'react-icons/bs'
import deleteActiveNav from '../helper/deleteActiveNav'
import { useSelector } from 'react-redux'
import noImage from '../assets/images/no-pp.jpg'
import BtnLogout from '../components/BtnLogout'

export default function Profile() {
  const {userData} = useSelector(state => state.auth)

  useEffect(() => {
    window.scrollTo(0, 0)
    deleteActiveNav()
  }, [])
  
  const {image, name, username, email, createdAt, phoneNumber, address, birthdate} = userData
  
  return (
    <div className='profile'>
      <header className="container">
        <h1>Profile</h1>
        <div className="profle-header">
          <div className="text-center">
            <div className="image-profile">
              <img src={image || noImage} alt={name} />
              <button className="btn-pen badge"><BsFillPenFill /></button>
            </div>
            <h2 className="mt-5">{name}</h2>
            <p className="text-muted">{email}<br/>
              {phoneNumber} <br/>
              Has been active since {[...Array(4)].map((data, index) => String(createdAt)[index])}
            </p>
          </div>
        </div>
      </header>
      
      <section className="container mb-5">
        <form>
          <div className="gender mb-5">
            <input type="radio" className="form-check-input" id="male" name="gender" />
            <label htmlFor='male' className="me-5 text-muted">Male</label>
            <input type="radio" className="form-check-input ms-5" id="female" name="gender" defaultChecked />
            <label htmlFor="female">Female</label>
          </div>
          <h4>Contact</h4>
          <div className="row-cols-12 contact">
            <div className="col mt-4">
              <label>Email Adress:</label>
              <input className="form-control form-contact" type="email" defaultValue={email} />
            </div>
            <div className="col mt-4">
              <label>Adress:</label>
              <textarea className="form-control form-contact" defaultValue={address} />
            </div>
            <div className="col mt-4"> 
              <label>Mobile number:</label>
              <input className="form-control form-contact" type="text" defaultValue={phoneNumber} />
            </div>
          </div>
          <h4 className="mt-5">Identity</h4>
          <div className="row identity">
            <div className="col-12 col-lg-6 pe-lg-5 mt-4">
              <label>Display name:</label> <br/>
              <input className="form-control form-contact" type="text" defaultValue={username} />
            </div>
            <div className="col-12 col-lg-6 ps-lg-5 mt-4">
              <label>Birthdate (DD/MM/YY)</label> <br/>
              <input className="form-control form-contact" type="text" defaultValue={new Date(birthdate).toLocaleDateString('en-AU')} />
            </div>
          </div>
          <div className="row btn-group d-flex flex-row justify-content-between">
            <div className="col-lg-6 text-center">
              <button className="my-3 w-100 btn btn-save">Save Changes</button>
            </div>
            <div className="col-lg-6 text-center">
              <button className="my-3 w-100 btn btn-edit">Edit Password</button>
            </div>
            <div className="col-lg-6 text-center">
              <button className="my-3 w-100 btn btn-cancel">Cancel</button>
            </div>
            <div className="col-lg-6 text-center">
              <BtnLogout className='my-3 w-100' />
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}
