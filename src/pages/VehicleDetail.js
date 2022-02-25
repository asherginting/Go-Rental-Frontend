import React, { useEffect, useState } from 'react'
import '../assets/css/vehicle-detail.css'
import {BiMinus, BiPlus} from 'react-icons/bi'
import {GrFormPrevious, GrFormNext} from 'react-icons/gr'
import {IoChevronBack} from 'react-icons/io5'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {default as axios} from 'axios';
import noImage from '../assets/images/vehicle-type/no-image.jpg'

export default function VehicleDetail() {
  const {id} = useParams()

  const [vehicle, setVehilcle] = useState({})
  const [price, setPrice] = useState(0)
  const [count, setCount] = useState(1)

  const navigate = useNavigate()

  useEffect(() => {
    getVehicle()
  },[])

  const getVehicle = async () => {
    const {data} = await axios.get(`http://localhost:5000/vehicles/${id}`)
    setVehilcle(data.results)
    setPrice(data.results.price)
  }
  
  const countPlus = () => {
    setPrice(price * 2)
    setCount(count + 1)
  }
  const countMinus = () => {
    if(count > 1) {
      setPrice(price / 2)
      setCount(count - 1)
    }
  }

  const toReservation = () => {
    navigate(`/reservation/${id}`)
  }

  return (
    <div className='vehicle-detail mt-5'>
      <section className='container first-container'>
        <div className="row pt-5 detail-vehicle">
          <Link to='/vehicle/popular' className="back my-4 fw-bold fs-5">
            <IoChevronBack className='me-5'/>
            <span>Back</span>
          </Link>
          <div className="col-12 col-lg-6 img-section">
            <div className="cover-image overflow-hidden text-center">
              <img src={vehicle.image || noImage} alt={vehicle.brand} className='img-fluid'/>
            </div>
            <div className="row carousel d-flex align-items-center mt-4">
              <button className="col-1 btn" aria-label="previous button">
                <GrFormPrevious className='prev' />
                <i className="fa-solid fa-angle-left prev"></i>
              </button>
              <div className="col-5 overflow-hidden rounded">
                <img src="../assets/images/fixie-detail.png" alt="fixie" className="rounded" />
              </div>
              <div className="col-5 overflow-hidden rounded">
                <img src="../assets/images/fixie-detail.png" alt="fixie" className="rounded" />
              </div>
              <button className="col-1 btn" aria-label="next button">
                <GrFormNext className='next' />
                <i className="fa-solid fa-angle-right next"></i>
              </button>
            </div>
          </div>
          <div className="col-12 col-lg-6 description-section">
            <div className="description">
              <h2 className="fw-bold">{vehicle.brand}</h2>
              <p className="text-muted">{vehicle.location}</p>
            </div>
            <div className="status my-3 d-flex flex-column">
              <span className="text-success fw-bold my-2">{vehicle.status}</span>
              <span className="text-danger">No prepayment</span>
            </div>
            <div className="mt-4">
              Capacity: {vehicle.capacity} Person
            </div>
            <div className="my-2">
              Type : {vehicle.type}
            </div>
            <div>
              Reservation: before 2 PM
            </div>
            <div className="price mt-5 text-end">
              Rp.<span className='fs-1'>
                {new Intl.NumberFormat('id-ID', {maximumSignificantDigits: 3}).format(price)}
                </span>/day
            </div>
            <div className="my-auto">
              <div className="total-day d-flex flex-row justify-content-between align-items-center">
                <button className="btn plus" aria-label="button plus" onClick={countPlus}>
                  <BiPlus className=''/>
                </button>
                <div className="count">{count}</div>
                <button className="btn minus" aria-label="button minus" onClick={countMinus}>
                  <BiMinus className=''/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container form-section mt-5">
        <form className="row">
          <div className="col-12 col-md">
            <a href="#" className="btn btn-black">Chat Admin</a>
          </div>
          <div className="col-12 col-md text-center btn-reservation">
            <button onClick={toReservation} className="btn btn-green">Reservation</button>
          </div>
          <div className="col-12 col-md-3 text-end">
            <button className="btn btn-black">
              <i className="fa-solid fa-heart"></i>
              Like
            </button>
          </div>
        </form>
      </section>
    </div>
  )
    
}
