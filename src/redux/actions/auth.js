import http from "../../helper/http";

export const login = (username, password) => {
  const param = new URLSearchParams()
  param.append('username', username)
  param.append('password', password)
  return ({
    type: 'AUTH_LOGIN',
    payload: http().post('/auth/login', param)
  })
}

export const getUser = (token) => {
  return ({
    type: 'AUTH_USER',
    payload: http(token).get('/profile')
  })
}