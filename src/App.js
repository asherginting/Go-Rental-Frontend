// import logo from './logo.svg';
// import './App.css';
// import Button from './components/Button'
// import React from 'react'

// function App() {
//   const [toggle, setToggle] = React.useState(true)
  
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {toggle && <Button sapa = "Hello" />}
//           <button onClick={()=>setToggle(false)}>Hide </button>
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React, { Component } from 'react'
// import Homepage from './pages/Homepage'

// export default class App extends Component {
//   render() {
//     return (
//       <Homepage />
//     )
//   }
// }


// import React, { Component } from 'react'

// export default class App extends Component {
//   state = {
//     count: 0
//   }
//   increment = ()=> {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }

//   decrement = ()=> {
//     this.setState({
//       count: this.state.count - 1
//     })
//   }

//   render() {
//     return (
//       <div className='d-flex vh-100 justify-content-center align-items-center'>
//         <div className='row'>
//           <div className='col'>
//             <button onClick={this.decrement} className='btn btn-primary'>-</button>
//           </div>  
//           <div className='col'>
//             <h1> {this.state.count}</h1>
//           </div>
//           <div className='col'>
//           <button onClick={this.increment} className='btn btn-primary'>+</button>
//           </div> 
//         </div>
//       </div>   
//     )
//   }
// }

import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import VehicleType from "./pages/VehicleType";
import VehiclePopular from "./pages/VehiclePopular";
import VehicleDetail from "./pages/VehicleDetail";

export default class App extends Component {
  state = {
    isLogged: true
  }

  render() {
    const {isLogged} = this.state

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Layout isLogin={isLogged}><Home /></Layout>
          } />
          <Route path="login" element={
            <Layout noNavbar={true}><Login /></Layout>
          } />
          <Route path="forgot-password" element={
            <Layout noNavbar={true}><ForgotPassword /></Layout>
          } />
          <Route path="signup" element={
            <Layout noNavbar={true} signup={true}><Signup /></Layout>
          } />
          <Route path="vehicle/type" element={
            <Layout isLogin={isLogged}><VehicleType /></Layout>
          } />
          <Route path="vehicle/popular" element={
            <Layout isLogin={isLogged} vehiclePopular={true}><VehiclePopular /></Layout>
          } />
          <Route path="vehicle/detail" element={
            <Layout isLogin={isLogged}><VehicleDetail /></Layout>
          } />
        </Routes>
        {/* <VehiclePopular /> */}
        {/* <VehicleType /> */}
        {/* <ForgotPassword /> */}
        {/* <Signup /> */}
        {/* {!this.state.isLogged && <Login isLogin={(value) => this.setState({isLogged: value})} />} */}
        {/* {this.state.isLogged ? (<> <NavAfterLogin />  <Home /></>) : (<> <NavBeforeLogin /> <Home /> </>)} */}
      </BrowserRouter>
    )
  }
}

