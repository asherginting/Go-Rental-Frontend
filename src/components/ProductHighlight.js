/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function ProductHighlight({props}) {
  const {image, text1, text2} = props;
  return (
    <div className="col-6 col-lg-3 mb-3 text-center">
      <a href="#" className='d-inline-block position-relative'>
        <img className="img-fluid" src={image} alt={text1} />
        <div className="highlight position-absolute start-0 text-start">
          <h5>{text1}</h5>
          <span>{text2}</span>
        </div>
      </a>
    </div>
  )
}
