import React, { useEffect, useState } from 'react'
import '../assets/css/vehicle-detail.css'
import {BiMinus, BiPlus} from 'react-icons/bi'
import {GrFormPrevious, GrFormNext} from 'react-icons/gr'
import {IoChevronBack} from 'react-icons/io5'
import {IoMdHeart} from 'react-icons/io'
import { useNavigate, useParams } from 'react-router-dom'
import noImage from '../assets/images/no-image.jpg'
import activeNav from '../helper/activeNav'
import { useDispatch, useSelector } from 'react-redux'
import { getVehicleDetail } from '../redux/actions/vehicle'
import { empty, increment, decrement } from '../redux/actions/counter'

function VehicleDetail() {
  const {id} = useParams()
  const vehicleDetail = useSelector(state => state.vehicleReducer.detail)
  const {counter} = useSelector(state => state)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(empty())
    window.scrollTo(0, 0)
    dispatch(getVehicleDetail(id))
    activeNav()
    console.log('test', counter)
  }, [])

  const dataVehicle = vehicleDetail.vehicle
  
  const countPlus = () => {
    dispatch(increment(dataVehicle.price))
  }
  const countMinus = () => {
    dispatch(decrement())
  }
  const backNavigate = () => {
    window.history.back()
  }
  const toReservation = () => {
    navigate(`/reservation/${id}`)
  }

  return (
    <div className='vehicle-detail my-5'>
      <section className='container first-container'>
        <div className="row pt-5 detail-vehicle">
          <div onClick={backNavigate} className="back my-4 fw-bold fs-5">
            <IoChevronBack className='me-5'/>
            <span>Back</span>
          </div>
          <div className="col-12 col-lg-6 img-section">
            <div className="cover-image overflow-hidden text-center">
              <img src={dataVehicle.image || noImage} alt={dataVehicle.brand} className='img-fluid'/>
            </div>
            <div className="row carousel d-flex align-items-center mt-4">
              <button className="col-1 btn" aria-label="previous button">
                <GrFormPrevious className='prev' />
              </button>
              <div className="col-5 overflow-hidden rounded text-center">
                <img src={dataVehicle.image || noImage} alt={dataVehicle.brand} className="rounded img-fluid" />
              </div>
              <div className="col-5 overflow-hidden rounded text-center">
                <img src={dataVehicle.image || noImage} alt={dataVehicle.brand} className="rounded img-fluid" />
              </div>
              <button className="col-1 btn" aria-label="next button">
                <GrFormNext className='next' />
              </button>
            </div>
          </div>
          <div className="col-12 col-lg-6 description-section">
            <div className="description">
              <h2 className="fw-bold">{dataVehicle.brand}</h2>
              <p className="text-muted">{dataVehicle.location}</p>
            </div>
            <div className="status my-3 d-flex flex-column">
              <span className="text-success fw-bold my-2">{dataVehicle.status}</span>
              <span className="text-danger">No prepayment</span>
            </div>
            <div className="mt-4">
              Capacity: {dataVehicle.capacity} Person
            </div>
            <div className="my-2">
              Type : {dataVehicle.type}
            </div>
            <div>
              Reservation: before 2 PM
            </div>
            <div className="price mt-5 text-end">
              Rp.<span className='fs-1'>
                {new Intl.NumberFormat('id-ID', {maximumSignificantDigits: 3}).format(dataVehicle.price + counter.totalPrice)}
                </span>/day
            </div>
            <div className="my-auto">
              <div className="total-day d-flex flex-row justify-content-between align-items-center">
                <button className="btn plus" aria-label="button plus" onClick={countPlus}>
                  <BiPlus className=''/>
                </button>
                <div className="count">{counter.totalItem}</div>
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
            <button className="btn btn-black">Chat Admin</button>
          </div>
          <div className="col-12 col-md text-center btn-reservation">
            <button onClick={toReservation} className="btn btn-green">Reservation</button>
          </div>
          <div className="col-12 col-md-3 text-end">
            <button className="btn btn-black">
              <IoMdHeart />
              <span className='ps-2'>Like</span>
            </button>
          </div>
        </form>
      </section>
    </div>
  )
    
}
// import { increment } from '../redux/actions/counter'

// const mapStateToProps = (state) => ({vehicleDetail: state.vehicleDetail})
// const mapDispatchToProps = {getVehicleDetail}

// export default connect(mapStateToProps, mapDispatchToProps)(VehicleDetail)
export default VehicleDetail
