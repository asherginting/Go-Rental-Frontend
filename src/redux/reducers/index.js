// import { combineReducers } from "redux";

// const initialState = {
//   token: null
// }

// const rootReducer = combineReducers ({
//   auth: (state= initialState, action) => {
//     switch(action){
//       case 'LOGIN': {
//         return state.token = 'abc'
//       }
//       case 'LOGOUT': {
//         return state.token = null
//       }
//       default: {
//         return state
//       }
//     }
//   }
// })

// export default rootReducer

import { combineReducers } from "redux";

const initialState = {
    token: null
}

const counterState = {
    num: 0
}

const dataState = {
    character: [],
    pageInfo: {},
    isLoading: false,
    error: false
}

const rootReducer = combineReducers({
    auth: (state=initialState, action) => {
        switch(action.type){
            case 'LOGIN': {
                const {email, password} = action.payload
                if(email==='admin@mail.com' && password === '1234'){
                    state.token = 'abc'
                    return state
                }else{
                    alert('Wrong username or password!')
                    state.token = null
                    return state
                }
            }
            case 'LOGOUT': {
                state.token = null
                return state
            }
            default: {
                return {...state}
            }
        }
    },
    counter: (state=counterState, action) => {
        switch(action.type){
            case 'INCREMENT': {
                state.num = state.num + 1
                return state
            }
            case 'DECREMENT': {
                state.num = state.num - 1
                return state
            }
            default: {
                return {...state}
            }
        }
    },
    character: (state=dataState, action)=> {
        switch(action.type){
            case 'GET_CHARACTER_PENDING': {
                state.isLoading =true
                return state
            }
            case 'GET_CHARACTER_FULFILLED': {
                const {data} = action.payload
                state.character = data.results
                state.pageInfo = data.info
                state.isLoading = false
                return state
            }
            case 'GET_CHARACTER_REJECTED': {
                state.isLoading = false
                state.isError = true
                return state
            }
            // case 'FILTER_CHARACTER_PENDING': {
            //     state.isLoading =true
            //     return state
            // }
            // case 'FILTER_CHARACTER_FULFILLED': {
            //     const {data} = action.payload
            //     state.character = data.results
            //     state.pageInfo = data.info
            //     state.isLoading = false
            //     return state
            // }
            // case 'FILTER_CHARACTER_REJECTED': {
            //     state.isLoading = false
            //     state.isError = true
            //     return state
            // }
            default: {
                return state
            }
        }
    }
})

export default rootReducer