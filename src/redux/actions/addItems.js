import http from '../../helper/http';

export const addVehicle = (data) =>{
    const params = new FormData();
    const token = window.localStorage.getItem('token');
    params.append ('image', data.image);
    params.append ('id_category', data.id_category);
    params.append ('brand', data.brand);
    params.append ('capacity', data.capacity);
    params.append ('location', data.location);
    params.append ('price', data.price);
    params.append ('qty', data.qty);
    return({
        type:'VEHICLE_INSERT',
        payload: http(token).post('/vehicles', params)
    });
};