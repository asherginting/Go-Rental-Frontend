import React, { useEffect, useState } from 'react'
import {default as axios} from 'axios'
import { useParams } from 'react-router-dom'
import {BiMinus, BiPlus} from 'react-icons/bi'
import {IoChevronBack} from 'react-icons/io5'

export default function Reservation() {
  const {id} = useParams()
  const [vehicle, setVehilcle] = useState({})

  useEffect(() => {
    getVehicle()
  }, [])

  const getVehicle = async () => {
    const {data} = await axios.get(`http://localhost:5000/vehicles/${id}`)
    setVehilcle(data.results)
  }
  const {brand, location, price, image} = vehicle

  return (
    <div className='vehicle-detail'>
      <section className="container first-section reservation mb-5">
        <div className="d-flex flex-row head">
          <a href="/more-detail-2.html" className="back d-flex mb-5">
            <IoChevronBack className='me-5 fs-1'/>
          </a>
          <span>Reservation</span>
        </div>
        <div className="row pt-5 detail-vehicle">
          <div className="col-12 col-lg-7 img-section overflow-hidden my-auto">
            <img src={image} alt="fixie" className='img-fluid' />
            <div className="cover-image overflow-hidden">
              
            </div>
          </div>
          <div className="col-12 col-lg-5 description-section">
            <div className="description">
              <h2 className="fw-bold">{brand}</h2>
              <p className="text-muted">{location}</p>
            </div>
            <div className="status my-3 d-flex flex-column">
              <span className="text-danger fw-bold">No prepayment</span>
            </div>
            <div className="my-auto">
              <div className="total-day d-flex flex-row justify-content-between align-items-center">
                <button className="btn" aria-label="button minus"><BiMinus className='minus' /></button>
                <div className="count">1</div>
                <button className="btn" aria-label="button plus"><BiPlus className='plus'/></button>           
              </div>
            </div>
            <form>
              <h4 className="fw-bold mt-5">Reservation Date:</h4>
              <input type="text" placeholder="Select date" className="form-control" />
              <select name="date" id="date" className="form-select mt-3">
                <option value="1">1 Day</option>
                <option value="2">2 Day</option>
              </select>
            </form>        
          </div>
        </div>
        <div className="pay-now mt-5 px-2">
          <a href="payment.html" className="btn btn-green w-100 mt-3">Pay now: Rp.
            <span>
              {new Intl.NumberFormat('id-ID', {maximumSignificantDigits: 3}).format(price)}
            </span>
          </a>
        </div>
      </section>
    </div>
  )
}
