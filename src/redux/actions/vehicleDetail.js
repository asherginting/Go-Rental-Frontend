import http from '../../helper/http';

export const getVehicleDetail = (id) => {
    return {
        type: 'GET_DETAIL',
        payload: http().get(`/vehicles/${id}`)
    };
};

export const updateDataVehicle = (data, id) =>{
    const token = window.localStorage.getItem('token');
    const params = new FormData();
    if (data?.image) {
        params.append('image', data.image);
    }
    if (data?.id_category) {
        params.append('id_category', data.id_category);
    }
    if (data?.brand) {
        params.append('brand', data.brand);
    }
    if (data?.capacity) {
        params.append('capacity', data.capacity);
    }
    if (data?.location) {
        params.append('location', data.location);
    }
    if (data?.price) {
        params.append('price', data.price);
    }
    if (data?.qty) {
        params.append('qty', data.qty);
    }
    return {
        type:'UPDATE_DATA_VEHICLE',
        payload: http(token).patch(`/vehicles/${id}`, params)
    };
};

export const deleteVehicle = (id) => {
    const token = window.localStorage.getItem('token');
    return {
        type: 'DELETE_VEHICLE',
        payload: http(token).delete(`/vehicles/${id}`)
    };
};