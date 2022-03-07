import React, { useEffect, useState } from 'react'
import '../assets/css/vehicle-detail.css'
import {default as axios} from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {BiMinus, BiPlus} from 'react-icons/bi'
import {IoChevronBack} from 'react-icons/io5'
import noImage from '../assets/images/no-image.jpg'
import activeNav from '../helper/activeNav'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reservation } from '../redux/actions/counter'
import { getVehicleDetail } from '../redux/actions/vehicle'

export default function Reservation() {
  const {id} = useParams()
  const {vehicle} = useSelector(state => state.vehicleReducer.detail)
  const {counter} = useSelector(state => state)

  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getVehicleDetail(id))
    activeNav()
  }, [])

  const back = () => {
    window.history.back()
  }

  const {brand, location, image, payment, price} = vehicle
  const countPlus = () => {
    const rentStart = document.getElementById('dateReservation').value
    const totalDay = document.getElementById('date').value
    console.log('test', rentStart, totalDay)
    dispatch(increment(price))
  }
  const countMinus = () => {
    dispatch(decrement())
  }

  const navigate = useNavigate()

  const gotoPayment = () => {
    const rentStart = document.getElementById('dateReservation').value
    const totalDay = document.getElementById('date').value
    if(!rentStart) {
      alert('Please fill in reservation date')
    } else {
      dispatch(reservation(rentStart, totalDay))
      navigate(`/payment/${id}`)
    }
  }
  const formatPrice = new Intl.NumberFormat('id-ID', {maximumSignificantDigits: 3}).format(counter.totalPrice + vehicle.price)

  return (
    <div className='vehicle-detail'>
      <section className="container first-section reservation mb-5">
        <div onClick={back} style={{cursor: 'pointer'}} className="d-flex flex-row head">
          <div className="back d-flex mb-5">
            <IoChevronBack className='me-5 fs-1'/>
          </div>
          <span>Reservation</span>
        </div>
        <div className="row pt-5 detail-vehicle">
          <div className="col-12 col-lg-7 img-section overflow-hidden my-auto text-center">
            <img src={image || noImage} alt={brand} className='img-fluid' />
            <div className="cover-image overflow-hidden">
              
            </div>
          </div>
          <div className="col-12 col-lg-5 description-section">
            <div className="description">
              <h2 className="fw-bold">{brand}</h2>
              <p className="text-muted">{location}</p>
            </div>
            <div className="status my-3 d-flex flex-column">
              <span className="text-danger fw-bold">{payment || 'No prepayment'}</span>
            </div>
            <div className="my-auto">
              <div className="total-day d-flex flex-row justify-content-between align-items-center">
                <button onClick={countMinus} className="btn" aria-label="button minus"><BiMinus className='minus' /></button>
                <div className="count">{counter.totalItem}</div>
                <button onClick={countPlus} className="btn" aria-label="button plus"><BiPlus className='plus'/></button>           
              </div>
            </div>
            <form>
              <h4 className="fw-bold mt-5">Reservation Date:</h4>
              <input type="date" placeholder="Select date" id='dateReservation' className="form-control" />
              {/* <div className="dropdown mt-3">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Day
                </button>
                <ul className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton1">
                  <li><button onClick={totalDay(1)} style={{cursor: 'pointer'}} className='dropdown-item'>1 Day</button></li>
                  <li><button onClick={totalDay(2)} style={{cursor: 'pointer'}} className='dropdown-item'>2 Day</button></li>
                  <li><button onClick={totalDay(3)} style={{cursor: 'pointer'}} className='dropdown-item'>3 Day</button></li>
                  <li><button onClick={totalDay(3)} style={{cursor: 'pointer'}} className='dropdown-item'>4 Day</button></li>
                </ul>
              </div> */}
              <select name="date" id="date" className="form-select mt-3">
                <option className='d-none'>{counter.totalDay} Day</option>
                <option value="1">1 Day</option>
                <option value="2">2 Day</option>
                <option value="3">3 Day</option>
                <option value="4">4 Day</option>
              </select>
            </form>        
          </div>
        </div>
        <div className="pay-now mt-5 px-2">
          <div onClick={gotoPayment} style={{cursor: 'pointer'}} className="btn btn-green w-100 mt-3">Pay now: Rp.
            <span>
              {formatPrice}
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
