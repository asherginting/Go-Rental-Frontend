import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import VehicleType from "./pages/VehicleType";
import VehicleMore from "./pages/VehicleMore";
import VehicleDetail from "./pages/VehicleDetail";
import Reservation from "./pages/Reservation";
import History from "./pages/History";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import Search from "./pages/Search";

export default class App extends Component {
  state = {
    isLogged: true,
    moreDetail: ''
  }

  render() {
    const {isLogged} = this.state

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Layout ><Home /></Layout>
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
          <Route path="vehicle-type" element={
            <Layout isLogin={isLogged}><VehicleType /></Layout>
          } />
          <Route path={`vehicle`} element={
            <Layout isLogin={isLogged} vehicleMore={true}><VehicleMore /></Layout>
          } />
          <Route path="vehicle/:id" element={
            <Layout isLogin={isLogged}><VehicleDetail /></Layout>
          } />
          <Route path="reservation/:id/:qty" element={
            <Layout isLogin={isLogged}><Reservation /></Layout>
          } />
          <Route path="payment/:id/:qty/:idHistory" element={
            <Layout isLogin={isLogged}><Payment /></Layout>
          } />
          <Route path="history" element={
            <Layout isLogin={isLogged}><History /></Layout>
          } />
          <Route path="profile/:idUser" element={
            <Layout isLogin={isLogged}><Profile /></Layout>
          } />
          <Route path={`search`} element={
            <Layout isLogin={isLogged}><Search /></Layout>
          } />
        </Routes>
        {/* {!this.state.isLogged && <Login isLogin={(value) => this.setState({isLogged: value})} />} */}
        {/* {this.state.isLogged ? (<> <NavAfterLogin />  <Home /></>) : (<> <NavBeforeLogin /> <Home /> </>)} */}
      </BrowserRouter>
    )
  }
}

// import React, { Component } from 'react'
// import { unstable_HistoryRouter as HistoryRouter,BrowserRouter, Route, Routes } from 'react-router-dom'
// import DetailItem from './pages/DetailItem'
// import CharacterList from './pages/CharacterList'
// import CharacterDetail from './pages/CharacterDetail'
// import { createBrowserHistory } from 'history'

// export default class App extends Component {
//   componentDidMount(){
//     console.log(this.props)
//   }
//   history = createBrowserHistory()
//   render() {
//     return (
//       <HistoryRouter history={this.history}>
//         {/* <BrowserRouter> */}
//           <Routes>
//             <Route path='characters' element={<CharacterList />} />
//             <Route path='vehicles/:id' element={<DetailItem />} />
//             <Route path='characters/:id' element={<CharacterDetail history={this.history} />} />
//           </Routes>
//         {/* </BrowserRouter> */}
//       </HistoryRouter>
//     )
//   }
// }