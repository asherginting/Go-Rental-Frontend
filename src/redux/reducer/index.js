import { combineReducers } from "redux";

const initialState = {
  token: null
}

const rootReducer = combineReducers ({
  auth: (state= initialState, action) => {
    switch(action){
      case 'LOGIN': {
        return state.token = 'abc'
      }
      case 'LOGOUT': {
        return state.token = null
      }
      default: {
        return state
      }
    }
  }
})

export default rootReducer