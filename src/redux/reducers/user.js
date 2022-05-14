const updateState = {
    isLoading: false,
    isError: false,
    message: '',
    isSuccess: false,
};

export const updateProfile = (state = updateState, action) => {
    switch (action.type) {
    case 'UPDATE_PROFILE_PENDING': {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        return { ...state };
    }
    case 'UPDATE_PROFILE_FULFILLED': {
        const { data } = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.message = data.message;
        state.isSuccess = true;
        state.user = { ...data.results };
        return { ...state };
    }
    case 'UPDATE_PROFILE_REJECTED': {
        const { data } = action.payload;
        state.isError = true;
        state.message = data.message;
        state.isSuccess = false;
        return { ...state };
    }
    case 'UPDATE_PROFILE_CLEAR': {
        state.isError = false;
        state.message = '';
        state.isSuccess = false;
        state.user = false;
        return { ...state };
    }
    default: {
        return { ...state };
    }
    }
};

const registerState = {
    results: {},
    message: '',
    isLoading: false,
    isRegistered: false,
    isError: false,
    isSuccess: false,
};

export const registerUser = (state = registerState, action) => {
    switch (action.type) {
    case 'REGISTER_PENDING': {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        return { ...state };
    }
    case 'REGISTER_FULFILLED': {
        const { data } = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.message = data.message;
        state.isSuccess = true;
        state.results = { ...data.results };
        return { ...state };
    }
    case 'REGISTER_REJECTED': {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload.response.data.message;
        return { ...state };
    }
    default: {
        return { ...state };
    }
    }
};

const verifyState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errMessage: '',
};

export const verifyUser = (state = verifyState, action) => {
    switch (action.type) {
    case 'VERIFY_USER_PENDING': {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.errMessage = '';
        return { ...state };
    }
    case 'VERIFY_USER_FULFILLED': {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.errMessage = '';
        return { ...state };
    }
    case 'VERIFY_USER_REJECTED': {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.errMessage = action.payload.response.data.message;
        return { ...state };
    }
    case 'VERIFY_USER_CLEAR': {
        return { ...verifyState };
    }
    default: {
        return { ...state };
    }
    }
};

const changePwdState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errMessage: '',
};

export const changePwd = (state = changePwdState, action) => {
    switch (action.type) {
    case 'CHANGE_PASSWORD_PENDING': {
        state.isError = false;
        state.isSuccess = false;
        state.errMessage = '';
        state.isLoading = true;
        return { ...state };
    }
    case 'CHANGE_PASSWORD_FULFILLED': {
        state.isError = false;
        state.isSuccess = true;
        state.errMessage = '';
        state.isLoading = false;
        return { ...state };
    }
    case 'CHANGE_PASSWORD_REJECTED': {
        state.isError = true;
        state.isSuccess = false;
        state.errMessage = action.payload.response.data.message;
        state.isLoading = false;
        return { ...state };
    }
    case 'CHANGE_PASSWORD_CLEAR': {
        return { ...changePwdState };
    }
    default: {
        return { ...state };
    }
    }
};

const verifyPwdState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errMessage: '',
};

export const verifyPwd = (state = verifyPwdState, action) => {
    switch (action.type) {
    case 'VERIFY_PASSWORD_PENDING': {
        state.isError = false;
        state.isSuccess = false;
        state.errMessage = '';
        state.isLoading = true;
        return { ...state };
    }
    case 'VERIFY_PASSWORD_FULFILLED': {
        state.isError = false;
        state.isSuccess = true;
        state.errMessage = '';
        state.isLoading = false;
        return { ...state };
    }
    case 'VERIFY_PASSWORD_REJECTED': {
        state.isError = true;
        state.isSuccess = false;
        state.errMessage = action.payload.response.data.message;
        state.isLoading = false;
        return { ...state };
    }
    case 'VERIFY_PASSWORD_CLEAR': {
        return { ...verifyPwdState };
    }
    default: {
        return { ...state };
    }
    }
};
