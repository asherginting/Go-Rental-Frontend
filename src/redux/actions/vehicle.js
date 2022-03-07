import http from "../../helper/http";

export const popular = () => {
  return {
    type: 'GET_POPULAR',
    payload:http().get(`/popular?limit=8`)
  }
}

export const nextPopular = (page, search) => {
  return {
    type: 'GET_NEXT_POPULAR',
    payload: http().get(`/popular?page=${page}&limit=8`)
  }
}

export const category = (CATEGORY, type) => {
  return {
    type: `GET_${CATEGORY}`,
    payload: http().get(`/popular?search=${type}&limit=8`)
  }
}

export const nextCategory = (CATEGORY, type) => {
  return {
    type: `GET_NEXt_${CATEGORY}`,
    payload: http().get(`/popular?search=${type}&limit=8`)
  }
}

export const getVehicleDetail = (id) => {
  return {
    type: 'GET_DETAIL',
    payload: http().get(`/vehicles/${id}`)
  }
}

export const searchVehicle = (key, location, min, max) => {
  return {
    type: 'SEARCH_VEHICLE',
    payload: http().get(`/vehicles/category/?limit=8&search=${key}&location=${location}&minimum=${min}&maximum=${max}`)
  }
}

export const nextSearchVehicle = (key, location, min, max, page) => {
  return {
    type: 'SEARCH_VEHICLE',
    payload: http().get(`/vehicles/category/?page=${page}&limit=8&search=${key}&location=${location}&minimum=${min}&maximum=${max}`)
  }
}