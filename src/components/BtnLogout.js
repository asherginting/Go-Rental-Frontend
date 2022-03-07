import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../assets/css/btn-logout.css'

function BtnLogout(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logOut = (ev) => {
    ev.preventDefault()
    dispatch({
      type: 'AUTH_LOGOUT'
    })
    navigate('/login')
  }
  const {className} = props
  return (
    <button onClick={logOut} className={`btn-logout ${className}`}>Logout</button>
  )
}

export default BtnLogout