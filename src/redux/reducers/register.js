const intialState = {
  userData: {},
  isLoading: false,
  isError: false,
  message: ''
}

const auth = (state = intialState, action) => {
  switch(action.type) {
    case 'REGISTER_USER_PENDING': {
      state.isLoading = true
      state.isError = false
      return {...state}
    }
    case 'REGISTER_USER_FULFILLED': {
      const {data} = action.payload
      state.token = data.results.token
      state.isLoading = false
      state.isError = false
      window.localStorage.setItem('token', state.token)
      return {...state}
    }
    case 'REGISTER_USER_REJECTED': {
      const {message} = action.payload.response.data
      state.isLoading = false
      state.isError = true
      state.errorMessage = message
      return {...state}
    }
    default: {
      return {...state}
    }
  }
}

export default auth