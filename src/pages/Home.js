import React, { Component } from 'react'
import '../assets/css/home.css'
// import Navigation from '../components/NavAfterLogin';
import Footer from "../components/Footer";
import merapi from '../assets/images/home/merapi-yogyakarta.png';
import telukBogam from '../assets/images/home/teluk-bogam-kalimantan.png';
import bromo from '../assets/images/home/bromo-malang.png';
import malioboro from '../assets/images/home/malioboro-yogyakarta.png';
import user from '../assets/images/home/testimonial-edward.png'
import {GrFormPrevious, GrFormNext} from 'react-icons/gr';
import {FaStar} from 'react-icons/fa'

export default class Home extends Component {
  state = {
    data: [
      {
        location: 'Merapi',
        region: 'Yogyakarta',
        image: merapi
      },
      {
        location: 'Teluk Bogam',
        region: 'Kalimantan',
        image: telukBogam
      },
      {
        location: 'Bromo',
        region: 'Malang',
        image: bromo
      },
      {
        location: 'Malioboro',
        region: 'Yogyakarta',
        image: malioboro
      },
    ]
  }
  render() {
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
                    <option>Location</option>
                    <option></option>
                  </select>
                </div>
                <div className="col-sm-6">
                  <select className="option-form">
                    <option>Type</option>
                    <option></option>
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
                  <label for="date" className="date-section">
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
            <a href="more-detail.html" className="view-all">View all <i className="fa-solid fa-angle-right"></i></a>
          </div>
          <div className="row">
            {this.state.data.map((item) => {
              return <div className="col-6 col-lg-3 mb-3 text-center">
                <a href="#" className='d-inline-block position-relative'>
                  <img className="img-fluid" src={item.image} alt={item.location} />
                  <div className="highlight position-absolute start-0">
                    <h5>{item.location}</h5>
                    <span>{item.region}</span>
                  </div>
                </a>
              </div>
            })}
          </div>
        </section>

        <section className="testimoni mt-5">
          <h2>Testimonials</h2>
          <div className="row">
            <div className="col-12 col-lg-6 mt-5 left-testi">
              <div className="comment">
                <div className="stars">
                  {[...Array(5)].map(() => <FaStar />)}
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

      {/* <Footer />   */}
      </>
    )
  }
}