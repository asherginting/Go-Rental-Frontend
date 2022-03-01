import React, { useEffect, useState } from 'react'
import '../assets/css/history.css'
import {default as axios} from 'axios'
import noImage from '../assets/images/vehicle-type/no-image.jpg'

export default function History() {
  const [history, setHistory] = useState([])
  
  useEffect(() => {
    getHistory()
  }, [])

  const getHistory = async (key) => {
    const url = key ? `http://localhost:5000/histories/?search=${key}&limit=8` : `http://localhost:5000/histories/?limit=8`
    const {data} = await axios.get(url)
    setHistory(data.results)
    console.log(data.results.length)
  }

  const bgImage = (props) => {
    const {image, brand, prepayment, status} = props
    const bgImg = image || noImage
    console.log(bgImg)
    return (
      <div className="d-flex align-items-center history-contain">
        <div className="row history-data">
          <div className="col-3">
            <div className="vehicle-image1" style={{backgroundImage: `url(${bgImg})`}} ></div>
          </div>
          <div className="col">
            <div className="detail-1">
              <h5 className="m-0 fw-bold">{brand}</h5>
              <span>Jan 18 to 21 2021</span>
            </div>
            <div className="mt-4 detail-2">
              <h5 className="m-0 fw-bold">Prepayment: Rp. {new Intl.NumberFormat('id-ID', {maximumSignificantDigits: 3}).format(prepayment)}</h5>
              <span className="text-success status">{status}</span>
            </div>
          </div> 
        </div>
        <div className="btn-delete d-none">
          <button className="btn btn-blue">Delete</button>
        </div>
      </div>
    )
  }

  return (
    <div className='history'>
      <main className="row main-section">
        <section className="col-12 col-md -8 ps-5">
          <div className="row container form-section">
            <div className="col-12 col-sm-9 search-bar">
              <form className="container d-flex position-relative">
                <input className="form-control" type="search" placeholder="Search history" />
                <button type="submit" className="btn position-absolute end-0">
                  <i className="fa-solid fa-magnifying-glass search-icon"></i>
                </button>
              </form>       
            </div>
            <div className="container col-4 col-sm-3 filter">
              <select className="form-select select-bar">
                <option className="d-none disabled">Filter</option>
                <option value="type">Type</option>
                <option value="data-added">Data Added</option>
                <option value="name">Name</option>
                <option value="favorite">Favorite Product</option>
              </select>
            </div>
          </div>
          <div className="container today-history">
            <div className="text-muted description">Today</div>
            <a className="d-flex align-items-center justify-content-between border-bottom" href="#">
              <span>Please finish your payment for vespa for Vespa Rental Jogja</span>
              <i className="fa-solid fa-angle-right"></i>
            </a>
            <a className="d-flex align-items-center justify-content-between border-bottom" href="#">
              <span>Your payment has been confirmed!</span>
              <i className="fa-solid fa-angle-right"></i>
            </a>
          </div>
          <div className="container weekly-history">
            <div className="text-muted head-weekly">A week ago</div>
            {history.map((data) => {
              const props = {idHistory: data.idHistory, idUser: data.idUser, name: data.name, image: data.image, brand: data.brand, prepayment: data.prepayment, status: data.status }
              return bgImage(props)
            })}
          </div>
        </section>
      
        <aside className="col-12 col-md-4">
          <div className="border  text-center">
            <h5 className="fw-bold">New Arrival</h5>
            <div className="main-aside">
              <div className="new-arival">
                <a href="#">
                  <div className="bg-vehicle-1"></div>
                  <div className="highlight">
                    <h6 className="fw-bold">Lamborghini</h6>
                    <span className="text-muted">South Jakarta</span>
                  </div>
                </a>
              </div>
              <div className="new-arival">
                <a href="#">
                  <div className="bg-vehicle-2"></div>
                  <div className="highlight">
                    <h6 className="fw-bold">White Jeep</h6>
                    <span className="text-muted">Kalimantan</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="view-more">
              <a href="#">
                <div className="text-muted">View more</div>
                <div className="arrow-down"><i className="fa-solid fa-angle-down"></i></div>
                <div className="arrow-next d-none"><i className="fa-solid fa-angle-right"></i></div>
              </a>
            </div>
          </div>
        </aside>
      </main>
    </div>
  )
}