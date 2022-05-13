const historyState = {
    newHistory: {},
    isLoading: false,
    isError: false,
};

export const payment = (state = historyState, action) => {
    switch(action.type) {
    case 'ADD_HISTORY_PENDING': {
        state.isLoading = true;
        state.isError = false;
        return {...state};
    }
    case 'ADD_HISTORY_FULFILLED': {
        const {data} = action.payload;
        state.isLoading = false;
        state.newHistory = {};
        Object.assign(state.newHistory, {...data.results});
        state.isError = false;
        return {...state};
    }
    case 'ADD_HISTORY_REJECTED': {
        state.isError = true;
        return {...state};
    }
    default: {
        return {...state};
    }
    }
};

