import React, { useEffect, useState } from 'react'
import {default as axios} from 'axios';
import '../assets/css/home.css'
import user from '../assets/images/home/testimonial-edward.png'
import {GrFormPrevious, GrFormNext} from 'react-icons/gr';
import {FaStar} from 'react-icons/fa'
import ProductHighlight from '../components/ProductHighlight';
import { Link } from 'react-router-dom';
import {IoChevronForward} from 'react-icons/io5'

const Home = () => {
  const [vehicle, setVehilcle] = useState([])
  const [category, setCategory] = useState([])
  const [allVehicles, setAllVehicles] = useState([])

  useEffect(() => {
    getVehicle()
    getCategory()
  },[])

  const dataLocation = []
  const getVehicle = async () => {
    const {data} = await axios.get('http://localhost:5000/popular?limit=4')
    setVehilcle(data.results)
    // const {item} = await axios.get('http://localhost:5000/popular?limit=100')
    // setAllVehicles(item.results)
    // item.results.map((data) => dataLocation.push(data.location))
    // console.log(dataLocation)
    console.log(data.results)
  }
  const getCategory = async () => {
    const {data} = await axios.get('http://localhost:5000/categories?limit=100')
    setCategory(data.results)
  }  
  
  return (
    <>
    <header className="header-homepage home">
      <div className="opacity">
        <div className="container">
          <h1>Explore and <br/> Travel</h1>
          <p>Vehicle Finder</p>
          <div className="line"></div>
          <form className="col-sm-12 col-lg-6">
            <div className="row">
              <div className="col-sm-6">
                <select className="option-form">
                  <option className='d-none'>Location</option>
                  <option>Jakarta</option>
                  <option>Bandung</option>
                  <option>Yogyakarta</option>
                  <option>Depok</option>
                  <option>Ngawi</option>
                  {/* {[...new Set(dataLocation)].map((data) => <option key={data}>{data}</option>)} */}
                </select>
              </div>
              <div className="col-sm-6">
                <select className="option-form">
                  <option className='d-none'>Type</option>
                  {category.map((data) => <option key={data.idCategory}>{data.type}</option>)}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <select className="option-form">
                  <option>Payment</option>
                  <option></option>
                </select>
              </div>
              <div className="col-sm-6">
                <label className="date-section">
                  <input type="date" className="option-form" id="date" />
                </label>
              </div>
            </div>
            <button className="btn btn-green" aria-label="explore">Explore</button>
          </form>
        </div>
      </div>
    </header>

    <main className="container home">
      <section className="destination">
        <div className="d-flex justify-content-between align-items-center head">
          <h2>Popular in town</h2>
          <Link to='/vehicle' className="view-all">View all <IoChevronForward /></Link>
        </div>
        <div className="row">
          {vehicle.map((data) => {
            const props = {image: data.image, location: data.location, brand: data.brand, id: data.idVehicle}
            return <ProductHighlight key={props.id} props={props} />
          })}
        </div>
      </section>

      <section className="testimoni mt-5">
        <h2>Testimonials</h2>
        <div className="row">
          <div className="col-12 col-lg-6 mt-5 left-testi">
            <div className="comment">
              <div className="stars">
                {[...Array(5)].map((data,index) => <span key={index}><FaStar /></span>)}
              </div>
              <p>”It was the right decision to rent vehicle here, I spent less money and enjoy the trip. It was an amazing experience to have a ride for wildlife trip!”</p>
            </div>
            <div className="profile">
              <h5>Edward Newgate</h5>
              <span>Founder Circle</span>
            </div>
          </div>
          <div className="col-12 col-lg-6 mt-5 profile">
            <div className="image">
              <img src={user} alt="Edward" />
              <div className="ms-auto next-prev">
                <button className="btn disabled next" aria-label="next"><GrFormPrevious /></button>
                <button className="btn prev" aria-label="previous"><GrFormNext /></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default Home