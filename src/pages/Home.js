import React, { useEffect} from 'react'
import '../assets/css/home.css'
import user from '../assets/images/user-homepage.png'
import {GrFormPrevious, GrFormNext} from 'react-icons/gr';
import {FaStar} from 'react-icons/fa'
import Vehicle from '../components/Vehicle';
import { Link } from 'react-router-dom';
import {IoChevronForward} from 'react-icons/io5'
import LoadingSkeleton from '../components/LoadingSkeleton';
import { useSelector, useDispatch } from 'react-redux';
import { popular } from '../redux/actions/vehicle';

const Home = () => {
  const vehiclePopular = useSelector((state) => state.vehicleReducer.popular);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(popular());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                  <option>Bali</option>
                  <option>bandung</option>
                  <option>Yogyakarta</option>
                  <option>Batam</option>
                  {/* {[...new Set(dataLocation)].map((data) => <option key={data}>{data}</option>)} */}
                </select>
              </div>
              <div className="col-sm-6">
                <select className="option-form">
                  <option className='d-none'>Type</option>
                  <option>Cars</option>
                  <option>Motorbike</option>
                  <option>Bike</option>
                  {/* {category.map((data) => <option key={data.idCategory}>{data.type}</option>)} */}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <select className="option-form">
                  <option className='d-none'>Payment</option>
                  <option>Cash</option>
                  <option>PayLater</option>
                </select>
              </div>
              <div className="col-sm-6">
                <label className="date-section">
                  <input type="date" className="option-form" id="date" />
                </label>
              </div>
            </div>
            <Link to="/vehicle-type">
            <button className="btn btn-blue" aria-label="explore">Explore</button>
            </Link>
          </form>
        </div>
      </div>
    </header>

    <main className="container home">
        <section className="destination">
          <div className="d-flex justify-content-between align-items-center head">
            <h2>Popular in town</h2>
            <Link to="/vehicle" className="view-all">
              View all
              {' '}
              <IoChevronForward />
            </Link>
          </div>
          <div className="row position-relative">
            {vehiclePopular.isLoading
            && <LoadingSkeleton count="4" />}
            {vehiclePopular.vehicle.map((data, index) => {
              const props = {
                image: data.image, location: data.location, brand: data.brand, id: data.idVehicle,
              };
              return (index < 4 && <Vehicle key={props.id} props={props} />);
            })}
          </div>
        </section>

      <section className="testimoni mt-5">
        <h2>Testimonials</h2>
        <div className="row mb-5">
          <div className="col-12 col-lg-6 mt-5 left-testi">
            <div className="comment">
              <div className="stars">
                {[...Array(5)].map((data,index) => <span key={index}><FaStar /></span>)}
              </div>
              <p>”It was the right decision to rent vehicle here, I spent less money and enjoy the trip. It was an amazing experience to have a ride for wildlife trip!”</p>
            </div>
            <div className="profile">
              <h5>Asher Azriel Ginting</h5>
              <span>Founder</span>
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