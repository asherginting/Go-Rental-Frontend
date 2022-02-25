import React from 'react'
// import NavAfter from '../components/NavAfterLogin';
import '../assets/css/vehicle-type.css'
import DataVehicle from '../components/DataVehicle';
import ProductHighlight from '../components/ProductHighlight';
import {BiSearchAlt2} from 'react-icons/bi'
import {IoChevronForward} from 'react-icons/io5'
import { Link } from 'react-router-dom';

const VehicleType = () => {

  const product = (head, link, arr) => {
    return (
      <section className='container'>
        <div class="d-flex justify-content-between head">
          <h2>{head}</h2>
          <Link to='/vehicle/popular' class="view-all">View all <IoChevronForward /></Link>
        </div>
        <div className="row">
          {arr.map((data) => {
            const props = {image: data.image, text1: data.text1, text2: data.text2}
            return <ProductHighlight props={props} />
          })}
        </div>
      </section>
    )
  }

  return (      
    <div className='vehicle-type'>
      <form className="container d-flex position-relative">
        <input className="form-control" type="search" placeholder="Search vehicle (ex. cars, cars name)" />
        <button type="submit" className="btn position-absolute end-0" aria-label="search button">
          <i className="search-icon"><BiSearchAlt2 /></i>
        </button>
      </form>

      {product('Popular in town', '#', DataVehicle.popularInTown)}
      {product('Cars', '#', DataVehicle.cars)}
      {product('Motorbike', '#', DataVehicle.motorbike)}
      {product('Bike', '#', DataVehicle.bike)}
    </div>
  )
  // render() {
    
  // }
}

export default VehicleType
