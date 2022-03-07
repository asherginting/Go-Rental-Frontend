const intialState = {
  token: null,
  userData: {},
  isLoading: false,
  isError: false,
  errorMessage: ''
}

const auth = (state = intialState, action) => {
  switch(action.type) {
    case 'AUTH_LOGIN_PENDING': {
      state.isLoading = true
      state.isError = false
      return {...state}
    }
    case 'AUTH_LOGIN_FULFILLED': {
      const {data} = action.payload
      state.token = data.results.token
      state.isLoading = false
      state.isError = false
      window.localStorage.setItem('token', state.token)
      return {...state}
    }
    case 'AUTH_LOGIN_REJECTED': {
      const {message} = action.payload.response.data
      state.isLoading = false
      state.isError = true
      state.errorMessage = message
      return {...state}
    }
    case 'AUTH_USER_PENDING': {
      state.isLoading = true
      state.isError = false
      return {...state}
    }
    case 'AUTH_USER_FULFILLED': {
      const {data} = action.payload
      state.userData = data.results
      state.isLoading = false
      state.isError = false
      return {...state}
    }
    case 'AUTH_USER_REJECTED': {
      state.isError = true
      state.isLoading = false
      return {...state}
    }
    case 'AUTH_LOGOUT': {
      state.token = null
      state.userData = {}
      window.localStorage.removeItem('token')
      return {...state}
    }
    default: {
      return {...state}
    }
  }
}

export default auth
