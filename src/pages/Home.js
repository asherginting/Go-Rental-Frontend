// import React, { useEffect } from 'react'
// import '../assets/css/home.css'
// import user from '../assets/images/user-homepage.png'
// import {GrFormPrevious, GrFormNext} from 'react-icons/gr';
// import {FaStar} from 'react-icons/fa'
// import ProductHighlight from '../components/ProductHighlight';
// import { Link, useNavigate } from 'react-router-dom';
// import {IoChevronForward} from 'react-icons/io5'
// import Layout from '../components/Layout';
// import { useSelector } from 'react-redux';
// import LoadingSkeleton from '../components/LoadingSkeleton';

// const Home = () => {
//   const vehiclePopular = useSelector(state => state.vehicleReducer.popular)
//   const navigate = useNavigate()

//   useEffect(() => {
//     window.scrollTo(0, 0)
//   }, [])

//   const handleSubmit = (ev) => {
//     ev.preventDefault()
//     const key = document.getElementById('search').value
//     const location = document.getElementById('location').value
//     const date = document.getElementById('date').value
//     navigate(`/search?keyword=${key}&location=${location}&date=${date}`)
//   }

//   return (
//     <Layout>
//     <header className="header-homepage home">
//       <div className="opacity">
//         <div className="container">
//           <h1>Explore and <br/> Travel</h1>
//           <p>Vehicle Finder</p>
//           <div className="line"></div>
//           <form className="col-sm-12 col-lg-6">
//             <div className="row">
//               <div className="col-sm-6">
//                 <select className="option-form">
//                   <option className='d-none'>Location</option>
//                   <option>Bali</option>
//                   <option>Yogyakarta</option>
//                   <option>Jakarta</option>
//                   <option>Kalimantan</option>
//                   <option>Malang</option>
//                 </select>
//               </div>
//               <div className="col-sm-6">
//                 <select className="option-form">
//                   <option className='d-none'>Type</option>
//                   <option>Bike</option>
//                   <option>Cars</option>
//                   <option>Motorbike</option>
//                 </select>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-sm-6">
//                 <select className="option-form">
//                   <option className='d-none'>Payment</option>
//                   <option>Cash</option>
//                   <option>PayLater</option>
//                 </select>
//               </div>
//               <div className="col-sm-6">
//                 <label className="date-section">
//                   <input type="date" className="option-form" id="date" />
//                 </label>
//               </div>
//             </div>
//             <button className="btn btn-blue" aria-label="explore">Explore</button>
//           </form>
//         </div>
//       </div>
//     </header>

//     <main className="container home">
//       <section className="destination">
//         <div className="d-flex justify-content-between align-items-center head">
//           <h2>Popular in town</h2>
//           <Link to='/vehicle' className="view-all">View all <IoChevronForward /></Link>
//         </div>
//         <div className="row position-relative">
//           {vehiclePopular.isLoading &&
//             <LoadingSkeleton count='4' />
//           }
//           {vehiclePopular.vehicle.map((data, index) => {
//             const props = {image: data.image, location: data.location, brand: data.brand, id: data.idVehicle}
//             return (index < 4 && <ProductHighlight key={props.id} props={props} />)
//           })}
//            <Link to='/vehicle' className="view-all-btn position-absolute"><IoChevronForward /></Link>
//         </div>
//       </section>

//       <section className="testimoni mt-5">
//         <h2>Testimonials</h2>
//         <div className="col-3 mt-5 profile profile-top">
//             <div className="image">
//               <img src={user} alt="Edward" />
//               <div className="ms-auto next-prev">
//                 <button className="btn disabled next" aria-label="next"><GrFormPrevious /></button>
//                 <button className="btn prev" aria-label="previous"><GrFormNext /></button>
//               </div>
//             </div>
//             <h5>Edward Newgate</h5>
//             <span>Founder Circle</span>
//           </div>
//         <div className="row">
//           <div className="col-12 col-lg-6 mt-5 left-testi">
//             <div className="comment">
//               <div className="stars">
//                 {[...Array(5)].map((data,index) => <span key={index}><FaStar /></span>)}
//               </div>
//               <p>”It was the right decision to rent vehicle here, I spent less money and enjoy the trip. It was an amazing experience to have a ride for wildlife trip!”</p>
//             </div>
//             <div className="profile">
//               <h5>Edward Newgate</h5>
//               <span>Founder Circle</span>
//             </div>
//           </div>
//           <div className="col-12 col-lg-6 mt-5 profile">
//             <div className="image">
//               <img src={user} alt="Edward" />
//               <div className="ms-auto next-prev">
//                 <button className="btn disabled next" aria-label="next"><GrFormPrevious /></button>
//                 <button className="btn prev" aria-label="previous"><GrFormNext /></button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//     </Layout>
//   )
// }

// // const mapStateToProps = (state) => ({vehiclePopular: state.vehiclePopular})
// // const mapDispatchToProps = {getVehiclePopular}

// // export default connect(mapStateToProps, mapDispatchToProps)(Home)
// export default Home

import React, { useEffect, useState } from 'react'
import {default as axios} from 'axios';
import '../assets/css/home.css'
import user from '../assets/images/user-homepage.png'
import {GrFormPrevious, GrFormNext} from 'react-icons/gr';
import {FaStar} from 'react-icons/fa'
import ProductHighlight from '../components/ProductHighlight';
import { Link } from 'react-router-dom';
import {IoChevronForward} from 'react-icons/io5'
import env from 'react-dotenv'
import LoadingSkeleton from '../components/LoadingSkeleton';

const Home = () => {
  const [vehicle, setVehilcle] = useState([])
  const [category, setCategory] = useState([])
  const [allVehicles, setAllVehicles] = useState([])

  useEffect(() => {
    getVehicle()
    // getCategory()
  },[])

  // const dataLocation = []
  // const getVehicle = async () => {
  //   const {data} = await axios.get('http://localhost:5000/popular?limit=4')
  //   setVehilcle(data.results)
  //   // const {item} = await axios.get('http://localhost:5000/popular?limit=100')
  //   // setAllVehicles(item.results)
  //   // item.results.map((data) => dataLocation.push(data.location))
  //   // console.log(dataLocation)
  //   console.log(data.results)
  // }
  // const getCategory = async () => {
  //   const {data} = await axios.get('http://localhost:5000/categories?limit=100')
  //   setCategory(data.results)
  // }
  
  const getVehicle = async () => {
    const {data} = await axios.get(`${env.REACT_APP_API}/popular?limit=4`)
    setVehilcle(data.results)
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
                  <option>Bali</option>
                  <option>Yogyakarta</option>
                  <option>Jakarta</option>
                  <option>Kalimantan</option>
                  <option>Malang</option>
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
            <button className="btn btn-blue" aria-label="explore">Explore</button>
          </form>
        </div>
      </div>
    </header>

    <main className="container home">
      <section className="destination">
        <div className="d-flex justify-content-between align-items-center head">
          <h2>Popular in town</h2>
          <Link  to={`/vehicle`} className="view-all">View all <IoChevronForward /></Link>
        </div>
        <div className="row position-relative">
          {vehicle.isLoading &&
            <LoadingSkeleton count='4' />
          }
          {vehicle.map((data, index) => {
            const props = {image: data.image, location: data.location, brand: data.brand, id: data.idVehicle}
            return (index < 4 && <ProductHighlight key={props.id} props={props} />)
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