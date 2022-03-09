const intialState = {
  userData: {},
  isLoading: false,
  isError: false,
  message: ''
}

const verifyRegister = (state = intialState, action) => {
  switch(action.type) {
    case 'VERIFY_REGISTER_PENDING': {
      state.isLoading = true
      state.isError = false
      return {...state}
    }
    case 'VERIFY_REGISTER_FULFILLED': {
      const {data} = action.payload
      state.token = data.results.token
      state.isLoading = false
      state.isError = false
      window.localStorage.setItem('token', state.token)
      return {...state}
    }
    case 'VERIFY_REGISTER_REJECTED': {
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

export default verifyRegister