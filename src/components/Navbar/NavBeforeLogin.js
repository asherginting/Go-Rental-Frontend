import React, { Component } from 'react'
import NavList from './NavList'
import '../../assets/css/nav-before.css'
import logo from "../../assets/images/login/Go-Rental x100.png"
import { Link } from 'react-router-dom'

// export default class NavBeforeLogin extends Component {
//   render() {
//     return (
//       <div className='nav-before'>
//         <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
//           <div className="container-fluid bg-white nav-fluid">
//             <div className="container navigation">
//             <Link className='navbar-brand' to='/'>
//                 <img src={logo} alt="Logo" />
//               </Link>
//               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="navbar">
//                 <span className="navbar-toggler-icon"></span>
//               </button>
//               <div className="collapse navbar-collapse main-nav" id="navbarNav">
//                 <NavList />
//                 <div className="button-section ms-lg-5">
//                   <Link className='me-lg-4 btn btn-outline' to='/login'>Login</Link>
//                   <Link className='btn btn-green' to='/signup'>Register</Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </div>
//     )
//   }
// }

export default class NavBeforeLogin extends Component {
  render() {
    return (
      <div className='nav-before'>
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
          <div className="container-fluid bg-white nav-fluid">
            <div className="container navigation">
              <a href="index.html" className="navbar-brand">
                <img src={logo} alt="Logo" />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="navbar">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse main-nav" id="navbarNav">
                <NavList />
                <div className="button-section ms-lg-5">
                  <Link className='me-lg-4 btn btn-outline' to='/login'>Login</Link>
                  <Link className='btn btn-green' to='/signup'>Register</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}