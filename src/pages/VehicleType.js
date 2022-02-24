import React, { Component } from 'react'
// import NavAfter from '../components/NavAfterLogin';
import '../assets/css/vehicle-type.css'
import DataVehicle from '../components/DataVehicle';
import ProductHighlight from '../components/ProductHighlight';
import {BiSearchAlt2} from 'react-icons/bi'
import {IoChevronForward} from 'react-icons/io5'

export default class VehicleType extends Component {

  product = (head, link, arr) => {
    return (
      <section className='container'>
        <div class="d-flex justify-content-between head">
          <h2>{head}</h2>
          <a href={link} class="view-all">View all <IoChevronForward /></a>
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

  render() {
    return (      
      <div className='vehicle-type'>
        <form className="container d-flex position-relative">
          <input className="form-control" type="search" placeholder="Search vehicle (ex. cars, cars name)" />
          <button type="submit" className="btn position-absolute end-0" aria-label="search button">
            <i className="search-icon"><BiSearchAlt2 /></i>
          </button>
        </form>

        {this.product('Popular in town', '#', DataVehicle.popularInTown)}
        {this.product('Cars', '#', DataVehicle.cars)}
        {this.product('Motorbike', '#', DataVehicle.motorbike)}
        {this.product('Bike', '#', DataVehicle.bike)}
      </div>
    )
  }
}
