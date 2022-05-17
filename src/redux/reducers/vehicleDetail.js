const dataState = {
    vehicleDetail: [],
    isLoading: false,
    error: false,
    errorMsg: '',
    isSuccess: false
};

const vehicleDetail = (state = dataState, action) => {
    switch (action.type) {
    case 'GET_DETAIL_PENDING': {
        state.isLoading = true;
        state.vehicleDetail=[];
        state.error = false;
        return { ...state };
    }
    case 'GET_DETAIL_FULFILLED': {
        const { data } = action.payload;
        state.vehicleDetail = data.result;
        state.isLoading = false;
        state.error = false;
        return { ...state };
    }
    case 'GET_DETAIL_REJECTED': {
        const { message } = action.payload.response.data;
        state.isLoading = false;
        state.error = true;
        state.errorMsg = message;
        return { ...state };
    }
    case 'UPDATE_DATA_VEHICLE_PENDING': {
        state.isLoading = true;
        state.vehicleDetail=[];
        state.error = false;
        return { ...state };
    }
    case 'UPDATE_DATA_VEHICLE_FULFILLED': {
        const { data } = action.payload;
        state.vehicleDetail = data.result;
        state.isLoading = false;
        state.isSuccess = true;
        state.error = false;
        return { ...state };
    }
    case 'UPDATE_DATA_VEHICLE_REJECTED': {
        const { message } = action.payload.response.data;
        state.isLoading = false;
        state.error = true;
        state.errorMsg = message;
        return { ...state };
    }
    case 'DELETE_VEHICLE_PENDING': {
        state.isLoading = true;
        state.vehicleDetail=[];
        state.error = false;
        return { ...state };
    }
    case 'DELETE_VEHICLE_FULFILLED': {
        const { data } = action.payload;
        state.errorMsg = data.message;
        state.isSuccess = true;
        state.isLoading = false;
        state.error = false;
        return { ...state };
    }
    case 'DELETE_VEHICLE_REJECTED': {
        const { message } = action.payload.response.data;
        state.isLoading = false;
        state.error = true;
        state.errorMsg = message;
        return { ...state };
    }
    default: {
        return { ...state };
    }
    }
};

export default vehicleDetail;