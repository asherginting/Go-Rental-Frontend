/* eslint-disable camelcase */
import http from '../../helper/http';

export const updateProfile = (token, data) => {
  const formData = new FormData();
  const {
    image, gender, email, address, phone_number, username, birthdate,
  } = data;
  if (image) {
    formData.append('image', image);
  }
  if (gender) {
    formData.append('gender', gender);
  }
  if (email) {
    formData.append('email', email);
  }
  if (address) {
    formData.append('address', address);
  }
  if (phone_number) {
    formData.append('phone_number', phone_number);
  }
  if (username) {
    formData.append('username', username);
  }
  if (birthdate) {
    formData.append('birthdate', birthdate);
  }

  return ({
    type: 'UPDATE_PROFILE',
    payload: http(token).patch('/users', formData),
  });
};

export const register = (data) => {
  const {
    name, username, email, password,
  } = data;
  const param = new URLSearchParams();
  param.append('name', name);
  param.append('username', username);
  param.append('email', email);
  param.append('password', password);

  return ({
    type: 'REGISTER',
    payload: http().post('/auth/register', param),
  });
};

export const verify = (username, code, password) => {
  const param = new URLSearchParams();
  param.append('username', username);
  param.append('code', code);
  param.append('password', password);
  return ({
    type: 'VERIFY_USER',
    payload: http().post('/auth/verification', param),
  });
};

export const changePassword = (email) => {
  const param = new URLSearchParams();
  param.append('email', email);
  return ({
    type: 'CHANGE_PASSWORD',
    payload: http().post('/auth/forgotPassword', param),
  });
};

export const verifyPassword = (email, code, password, confirmPassword) => {
  const param = new URLSearchParams();
  param.append('email', email);
  param.append('code', code);
  param.append('password', password);
  param.append('confirmPassword', confirmPassword);
  return ({
    type: 'VERIFY_PASSWORD',
    payload: http().post('/auth/forgotPassword', param),
  });
};
