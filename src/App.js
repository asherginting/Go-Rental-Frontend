import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/actions/auth";
import { popular } from "./redux/actions/vehicle";
import { category } from "./redux/actions/vehicle";

const App = () => {
  const {auth} = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    // console.log(token)
    if (token) {
      dispatch({
        type: 'AUTH_LOGIN_FULFILLED',
        payload: {
          data: {
            results: {
              token
            }
          }
        }
      })
      dispatch(getUser(token))
      dispatch(popular())
      dispatch(category('CARS', 'cars'))
      dispatch(category('MOTORBIKE', 'motorbike'))
      dispatch(category('BIKE', 'bike'))
      dispatch(category('PICKUP', 'pickup'))
    }
  }, [dispatch, auth.token])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Layout><Home /></Layout>
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
          <Layout ><VehicleType /></Layout>
        } />
        <Route path={`vehicle`} element={
          <Layout><VehicleMore /></Layout>
        } />
        <Route path="vehicle/:id" element={
          <Layout ><VehicleDetail /></Layout>
        } />
        <Route path="reservation/:id" element={
          <Layout ><Reservation /></Layout>
        } />
        <Route path="payment/:id" element={
          <Layout ><Payment /></Layout>
        } />
        <Route path="history" element={
          <Layout vehicleMore={true} ><History /></Layout>
        } />
        <Route path="profile" element={
          <Layout ><Profile /></Layout>
        } />
        <Route path={`search`} element={
          <Layout ><Search /></Layout>
        } />
        {/* <Route path="verify/:type" element={
          <Layout noNavbar={true}><Verify /></Layout>
        } /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;