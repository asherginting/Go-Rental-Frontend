import React from 'react'
import { Link } from 'react-router-dom';
import noImage from '../assets/images/vehicle-type/no-image.jpg'

export default function ProductHighlight({props}) {
  const {image, location, brand, id} = props;
  const bg = image || noImage
  return (
    <div className="col-6 col-lg-3 mb-3 text-center">
      <Link to={`/vehicle/${id}`} className='d-inline-block position-relative'>
        <div style={{backgroundImage: `url(${bg})`}}></div>
        <img className="img-fluid" src={bg} alt={brand} />
        <div className="highlight position-absolute start-0 text-start">
          <h5>{brand}</h5>
          <span>{location}</span>
        </div>
      </Link>
    </div>
  )
}
