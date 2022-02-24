import React, { Component } from 'react'
import '../assets/css/vehicle-type.css'
import ProductHighlight from '../components/ProductHighlight'
import DataVehicle from '../components/DataVehicle'

export default class VehiclePopular extends Component {
  vehicle = (dataVehicle) => {
    return dataVehicle.map(data => {
      const props = {image: data.image, text1: data.text1, text2: data.text2}
      return <ProductHighlight props={props} />
    })
  }

  render() {
    return (
      <div className='vehicle-type'>
        <section className='container'>
          <div className="head">
            <h2>Popular in town</h2>
            <p className="text-muted text-center">Click item to see details and reservation</p>
          </div>
          <div className='row'>
            {this.vehicle(DataVehicle.popularInTown)}
            {this.vehicle(DataVehicle.cars)}
            {this.vehicle(DataVehicle.motorbike)}
            {this.vehicle(DataVehicle.bike)}
          </div>
          <p class="text-center text-muted py-5">There is no vehicle left</p>
        </section>
      </div>
    )
  }
}
