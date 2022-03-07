const counterState = {
  price: 0,
  totalPrice: 0,
  totalItem: 1,
  startDate: '',
  totalDay: 1,
}

const counter = (state = counterState, action) => {
  switch(action.type) {
    case 'RESERVATION': {
      const {startDate, totalDay} = action.payload
      // if (price) {
      //   state.price = price
      // }
      if (startDate) {
        state.startDate = startDate
      }
      if (totalDay) {
        state.totalDay = Number(totalDay)
        state.totalPrice = state.totalPrice * state.totalDay
      }
      // state.startDate = startDate
      // state.totalDay = Number(totalDay)
      // state.totalPrice = state.totalPrice * state.totalDay
      console.log('redux', action.payload)
      return {...state}
    }
    case 'COUNTER_INCREMENT': {
      const {price} = action.payload
      state.price = Number(price)
      state.totalPrice += state.price
      state.totalItem += 1
      state.totalPrice = state.totalPrice * state.totalDay
      // if (startDate) {
      //   state.startDate = startDate
      // }
      // if (totalDay) {
      //   state.totalDay = Number(totalDay)
      //   state.totalPrice = state.totalPrice * state.totalDay
      // }
      // console.log('redux', action.payload)
      console.log('redux', state)
      return {...state}
    }
    case 'COUNTER_DECREMENT': {
      if (state.totalItem > 1) {
        state.totalPrice -= state.price
        state.totalItem -= 1
      }
      return {...state}
    }
    case 'COUNTER_EMPTY': {
      state.price = 0
      state.totalPrice = 0
      state.totalItem = 1
      state.startDate = ''
      state.totalDay = 1
      return {...state}
    }
    default: {
      return {...state}
    }
  }
}

export default counter