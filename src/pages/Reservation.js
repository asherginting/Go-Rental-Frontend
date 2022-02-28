import React, { useEffect, useState } from 'react'
import '../assets/css/vehicle-detail.css'
import {default as axios} from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {BiMinus, BiPlus} from 'react-icons/bi'
import {IoChevronBack} from 'react-icons/io5'
import noImage from '../assets/images/vehicle-type/no-image.jpg'
// import checkDate from '../helper/checkDate'

export default function Reservation() {
  const {id, qty} = useParams()
  const [vehicle, setVehilcle] = useState({})
  const [defaultPrice, setDefaultPrice] = useState(0)
  const [priceVehicle, setPriceVehicle] = useState(0)
  const [count, setCount] = useState(Number(qty))

  useEffect(() => {
    window.scrollTo(0, 0)
    getVehicle()
  }, [])

  const getVehicle = async () => {
    try {
      const {data} = await axios.get(`http://localhost:5000/vehicles/${id}`)
      setVehilcle(data.results)
      setPriceVehicle(data.results.price * count)
      setDefaultPrice(data.results.price)
    } catch(err) {
      console.log(err)
    }
  }
  const back = () => {
    window.history.back()
  }
  
  const {brand, location, image, payment} = vehicle
  const countPlus = () => {
    setPriceVehicle(priceVehicle + defaultPrice)
    setCount(count + 1)
  }
  const countMinus = () => {
    if(count > 1) {
      setPriceVehicle(priceVehicle - defaultPrice)
      setCount(count - 1)
    }
  }

  const navigate = useNavigate()

  const gotoPayment = () => {
    // try {
    //   ev.preventDefault()
    //   const startDate = document.getElementById('dateReservation').value
    //   const endDate = document.getElementById('date').value
    //   const {idVehicle, payment} = vehicle
    //   const data = await axios.post('http://localhost:5000/histories', {
    //     id_user: 1,
    //     id_vehicle: idVehicle,
    //     rent_start_date: startDate,
    //     rent_end_date: startDate,
    //     prepayment: payment,
    //   })
    //   console.log(data.results.idHistory);
    //   navigate(`/payment/${id}/${qty}/${1}`)
    //   return data
      
    // } catch(err) {
    //   console.log(err)
    // }
    navigate(`/payment/${id}/${count}/${1}`)
  }

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
          <div className="col-12 col-lg-7 img-section overflow-hidden my-auto">
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
                <div className="count">{count}</div>
                <button onClick={countPlus} className="btn" aria-label="button plus"><BiPlus className='plus'/></button>           
              </div>
            </div>
            <form>
              <h4 className="fw-bold mt-5">Reservation Date:</h4>
              <input type="date" placeholder="Select date" id='dateReservation' className="form-control" />
              <select name="date" id="date" className="form-select mt-3">
                <option value="1">1 Day</option>
                <option value="2">2 Day</option>
              </select>
            </form>        
          </div>
        </div>
        <div className="pay-now mt-5 px-2">
          <div onClick={gotoPayment} style={{cursor: 'pointer'}} className="btn btn-green w-100 mt-3">Pay now: Rp.
            <span>
              {new Intl.NumberFormat('id-ID', {maximumSignificantDigits: 3}).format(priceVehicle)}
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}