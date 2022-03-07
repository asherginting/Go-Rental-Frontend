import React, { useEffect } from 'react'
import '../assets/css/vehicle-type.css'
import ProductHighlight from '../components/ProductHighlight';
import {BiSearchAlt2} from 'react-icons/bi'
import {IoChevronForward} from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom';
import searchURL from '../helper/searchURL';
import { useDispatch, useSelector } from 'react-redux';
// import { category } from '../redux/actions/vehicle';
import LoadingSkeleton from '../components/LoadingSkeleton';

const VehicleType = () => {
  const {popular} = useSelector(state => state.vehicleReducer)
  const {cars} = useSelector(state => state.vehicleReducer)
  const {motorbike} = useSelector(state => state.vehicleReducer)
  const {bike} = useSelector(state => state.vehicleReducer)
  const {pickup} = useSelector(state => state.vehicleReducer)

  // const dispatch = useDispatch()

  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  },[])
  
  const handleSubmit = (ev) => {
    ev.preventDefault()
    navigate(searchURL(ev))
  }

  const product = (head, state, type ) => {
    return (
      <section className='container' id='parrent'>
        <div className="d-flex justify-content-between head">
          <h2>{head}</h2>
          <Link  to={type ? `/vehicle?type=${type}` : `/vehicle`} className="view-all">View all <IoChevronForward /></Link>
        </div>
        <div className="row">
          {state.isLoading && <LoadingSkeleton count='4' />}
          {state.vehicle.map((data, index) => {
            const props = {image: data.image, location: data.location, brand: data.brand, id: data.idVehicle}
            return (index < 4 && <ProductHighlight key={props.id} props={props} />)
          })}
        </div>
      </section>
    )
  }

  return (      
    <div className='vehicle-type'>
      <section className='form-search'>
        <form onSubmit={handleSubmit} className="container row g-2  mx-auto">
          <div className='col-12 col-md-6 my-2'>
            <input className="form-control" name='brand' type="search" placeholder="Search vehicle (ex. cars, cars name)" />
          </div>
          <div className='col-12 col-md-6 my-2'>
            <input className="form-control" name='location' type="search" placeholder="Location" />
          </div>
          {/* <div className='col-12 col-md-6'>
            <input className='form-control my-2' name='minimum' type='number' placeholder='Min price' />
          </div>
          <div className='col-12 col-md-6'>
            <input className='form-control my-2' name='maximum' type='number' placeholder='Max price' />
          </div> */}
          <button type="submit" className="col-12 btn-green btn text-center fs-5" aria-label="search button">
            Search <i className="search-icon"><BiSearchAlt2 /></i>
          </button>
        </form>
      </section>
      {product('Popular in town', popular)}
      {product('Cars', cars, 'cars')}
      {product('Motorbike', motorbike, 'motorbike')}
      {product('Bike', bike, 'bike')}
      {/* {product('Pick Up', pickup, 'pickup')} */}
    </div>
  )
}

export default VehicleType
