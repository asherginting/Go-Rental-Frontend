import http from "../../helper/http";

export const register = (name, username, email, phone, password) => {
  const param = new URLSearchParams()
  param.append('name', name)
  param.append('username', username)
  param.append('email', email)
  param.append('phone_number', phone)
  param.append('password', password)
  return ({
    type: 'REGISTER_USER',
    payload: http().post('/auth/register', param)
  })
}