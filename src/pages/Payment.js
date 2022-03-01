import React, { useEffect, useState } from 'react'
import '../assets/css/vehicle-detail.css'
import {default as axios} from 'axios'
import { useParams } from 'react-router-dom'
import {IoChevronBack} from 'react-icons/io5'
import activeNav from '../helpers/activeNav'

export default function Payment() {
  const [vehicle, setVehilcle] = useState({})

  useEffect(() => {
    window.scrollTo(0, 0)
    getVehicle()
    activeNav()
  }, [])

  const {id, qty} = useParams()
  const getVehicle = async () => {
    const {data} = await axios.get(`http://localhost:5000/vehicles/${id}`)
    setVehilcle(data.results)
  }
  const back = () => {
    window.history.back()
  }
  const copyBtn = () => {
    const code = document.getElementById('bookingCode').innerHTML
    navigator.clipboard.writeText(code)
    alert('code copied')
  }
  const {image, type, brand, location, price} = vehicle
  const totalPrice = price * Number(qty)
  const formatPrice = new Intl.NumberFormat('id-ID', {maximumSignificantDigits: 3}).format(price)

  return (
    <div className='vehicle-detail'>
      <section className="container first-section payment">
        <div className="d-flex flex-row head">
          <div onClick={back} className="back d-flex mb-5">
            <IoChevronBack className='me-5 fs-1' />
          </div>
          <span>Payment</span>
        </div>
        <div className="row pt-5 detail-vehicle">
          <div className="col-12 col-sm-5 col-md-5 col-xl-4 img-section overflow-hidden">
            <img src={image} alt={brand} />
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
              <div className="border border-dark w-100 fw-bold">Quantity: 2 bikes</div>
            </div>
            <div className="second-col">
              <div className="border border-dark w-100">
                <span className="reservation-date fw-bold">Reservation Date: </span>
                <span>Jan 18 - 20 2021</span></div>
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
                    {[...Array(Number(qty))].map((data, index) => {
                      return (
                      <tr key={index}>
                        <td>1 {type}: Rp.{formatPrice}</td>
                      </tr>
                      )
                    })}
                    <tr>
                      <td className="fw-bold pt-2">Total: {totalPrice}</td>
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
                      <td>Samantha Doe(+6290987682)</td>
                    </tr>
                    <tr>
                      <td>samanthadoe@mail.com</td>
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