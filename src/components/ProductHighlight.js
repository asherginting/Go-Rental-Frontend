import React from 'react'
import { useNavigate } from 'react-router-dom';
import noImage from '../assets/images/no-image.jpg'
import '../assets/css/product-highlight.css'
import { useDispatch, useSelector } from 'react-redux';

export default function ProductHighlight({props}) {
  const {image, location, brand, id} = props;
  const bg = image || noImage
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {vehicleDetail} = useSelector(state => state)

  const handleClick = (ev) => {
    // ev.preventDefault()
    // dispatch({
    //   type: 'VEHICLE_DETAIL',
    //   state: {
    //     idVehicle: id,
    //   }
    // })
    // console.log(vehicleDetail)
    navigate(`/vehicle/${id}`)
  }
  return (
    <div className="col-6 col-lg-3 mb-3 text-center product-highlight">
      <div className='d-flex overflow-hidden main-highlight' style={{backgroundColor: 'rgb(236 236 236)', borderRadius: '8px'}}>
        <div onClick={handleClick} style={{cursor: 'pointer'}} className='position-relative align-self-end'>
          <img className="img-fluid mb-0" src={bg} alt={brand} />
          <div className="highlight position-absolute start-0 text-start ps-1">
            <h5>{brand}</h5>
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
