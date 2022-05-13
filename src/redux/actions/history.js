import http from '../../helper/http';

export const getHistory = (username) => {
    return ({
        type: 'GET_HISTORY',
        payload: http().get(`/histories/?limit=3&search=${username}`)
    });
};

export const getNextHistory = (username, page) => {
    return ({
        type: 'GET_NEXT_HISTORY',
        payload: http().get(`/histories/?limit=3&search=${username}&page=${page}`)
    });
};

export const deleteHistory = (token, id) => {
    return ({
        type: 'DELETE_HISTORY',
        payload: http(token).delete(`/histories/${id}`)
    });
};

export const getDetailHistory = (token,id) => {
    return ({
        type: 'GET_DETAIL_HISTORY',
        payload: http(token).get(`histories/${id}`)
    });
};
