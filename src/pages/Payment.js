import React, { useEffect, useState } from 'react'
import '../assets/css/vehicle-detail.css'
import {default as axios} from 'axios'
import { useParams } from 'react-router-dom'
import {IoChevronBack} from 'react-icons/io5'
import activeNav from '../helper/activeNav'
import { getVehicleDetail } from '../redux/actions/vehicle'
import { useDispatch, useSelector } from 'react-redux'

export default function Payment() {
  const {id} = useParams()
  const dispatch = useDispatch()

  const {vehicle} = useSelector(state => state.vehicleReducer.detail)
  const {counter} = useSelector(state => state)
  const {userData} = useSelector(state => state.auth)

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getVehicleDetail(id))
    activeNav()
  }, [])

  const back = () => {
    window.history.back()
  }
  const copyBtn = () => {
    const code = document.getElementById('bookingCode').innerHTML
    navigator.clipboard.writeText(code)
    console.log('test', counter)
    alert('code copied')
  }
  const {image, type, brand, location, price} = vehicle

  return (
    <div className='vehicle-detail'>
      <section className="container first-section payment">
        <div className="d-flex flex-row head">
          <div onClick={back} className="back d-flex mb-5">
            <IoChevronBack className='me-5 fs-1' />
          </div>
          <span>Payment</span>
        </div>
        <div className="container row pt-5 detail-vehicle">
          <div className="col-12 col-sm-5 col-md-5 col-xl-4 img-section overflow-hidden d-flex align-item-center justify-content-center">
            <img src={image} alt={brand} className='img-fluid' />
          </div>
          <div className="col-12 col-sm-7 col-md-7 col-xl-8 description-section">
            <div className="description">
              <h2 className="fw-bold">{brand}</h2>
              <p>{location}</p>
            </div>
            <div className="status my-3 d-flex flex-column">
              <span className="text-muted fw-bold">No prepayment</span>
            </div>
            <div className="my-auto mt-4 code-container">
              <span className="code" id='bookingCode'>#FG1209878YZS</span>
            </div>
            <div className="mt-3 w-50 copy-contain">
              <button onClick={copyBtn} className="btn btn-green p-1 btn-copy-top">Copy booking code</button>
            </div>
          </div>
        </div>

        <div className="rent-data">
          <div className="d-flex flex-row data-item">
            <div className="first-col">
              <div className="border border-dark w-100 fw-bold">Quantity: {counter.totalItem} bikes</div>
            </div>
            <div className="second-col">
              <div className="border border-dark w-100">
                <span className="reservation-date fw-bold">Reservation Date: </span>
                <span>{new Date(counter.startDate).toDateString()}  ({counter.totalDay} day)</span></div>
            </div>
          </div>

          <div className="d-flex flex-row data-item">
            <div className="first-col d-flex">
              <div className="border border-dark w-100 overflow-auto second-row order-details">
                <table>
                  <thead>
                    <tr>
                      <th className="fw-bold">Order details:</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(Number(counter.totalItem))].map((data, index) => {
                      return (
                      <tr key={index}>
                        <td>1 {type}: Rp.{new Intl.NumberFormat('id-ID', {maximumSignificantDigits: 3}).format(price)} ({counter.totalDay} day)</td>
                      </tr>
                      )
                    })}
                    <tr>
                      <td className="fw-bold pt-2">Total: {new Intl.NumberFormat('id-ID', {maximumSignificantDigits: 3}).format(price * counter.totalItem * counter.totalDay)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>          
            </div>
            <div className="second-col">
              <div className="border border-dark w-100  second-row identity">
                <table>
                  <thead>
                    <tr>
                      <th className="fw-bold">Identity:</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{userData.name}({userData.phoneNumber})</td>
                    </tr>
                    <tr>
                      <td>{userData.email}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-center g-0 mt-4">
          <div className="col-12 col-sm-3">
            <h2 className="fw-bold">Payment Code:</h2>
          </div>
          <div className="col-12 col-sm-4 code-section">
            <div className="d-flex flex-row border justify-content-between align-items-center border-dark payment-code">
              <span className="code">#FG1209878YZS</span>
              <button onClick={copyBtn} className="btn btn-black btn-copy">Copy</button>
            </div>
          </div>
          <div className="col-12 col-sm-auto">
            <select className="form-select">
              <option className="d-none">Select payment method</option>
              <option>Cash</option>
              <option>Transfer</option>
            </select>
          </div>
        </div>

        <div className="pay-now mt-5 px-2">
          <a href="#" className="btn btn-green w-100 mt-3">Finish payment: <span className="text-danger time">59:30</span></a>
        </div>
      </section>
    </div>
  )
}
