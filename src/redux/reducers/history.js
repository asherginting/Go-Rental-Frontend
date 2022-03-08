const historyState = {
  history: [],
  pageInfo: {},
  isLoading: false,
  isError: false,
}

export const history = (state = historyState, action) => {
  switch(action.type) {
    case 'GET_HISTORY_PENDING': {
      state.isLoading = true
      state.isError = false
      return {...state}
    }
    case 'GET_HISTORY_FULFILLED': {
      const {data} = action.payload
      state.isLoading = false
      state.history = data.results
      state.pageInfo = data.pageInfo
      return {...state}
    }
    case 'GET_HISTORY_REJECTED': {
      state.isError = true
      return {...state}
    }
    case 'GET_NEXT_HISTORY_PENDING': {
      state.isLoading = true
      state.isError = false
      return {...state}
    }
    case 'GET_NEXT_HISTORY_FULFILLED': {
      const {data} = action.payload
      state.history.push(...data.results)
      state.pageInfo = data.pageInfo
      state.isLoading = false
      return {...state}
    }
    case 'GET_NEXT_HISTORY_REJECTED': {
      state.isError = true
      return {...state}
    }
    default: {
      return {...state}
    }
  }
}

const deleteState = {
  message: '',
  isLoading: false,
  isError: false
}

export const deleteHistory = (state = deleteState, action) => {
  switch(action.type) {
    case 'DELETE_HISTORY_PENDING': {
      state.isLoading = true
      state.isError = false
      return {...state}
    }
    case 'DELETE_HISTORY_FULFILLED': {
      const {data} = action.payload
      state.message = data.message
      state.isLoading = false
      state.isError = false
      return {...state}
    }
    case 'DELETE_HISTORY_REJECTED': {
      state.isError = true
      return {...state}
    }
    default : {
      return {...state}
    }
  }
}

const detailState = {
  history: {},
  isLoading: false,
  isError: false,
}

export const detailHistory = (state = detailState, action) => {
  switch(action.type) {
    case 'GET_DETAIL_HISTORY_PENDING': {
      state.isLoading = true
      state.isError = false
      return {...state}
    }
    case 'GET_DETAIL_HISTORY_FULFILLED': {
      const {data} = action.payload
      state.isLoading = false
      state.isError = false
      // state.history = data.results
      Object.assign(state.history, {...data.results})
      return {...state}
    }
    case 'GET_DETAIL_HISTORY_REJECTED': {
      state.isError = true
      return {...state}
    }
    default: {
      return {...state}
    }
  }
}

// export default history
