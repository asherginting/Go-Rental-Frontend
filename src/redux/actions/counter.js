export const reservation = (startDate, totalDay) => {
  return ({
    type: 'RESERVATION',
    payload: {
      // price: Number(price),
      startDate: String(startDate),
      totalDay: Number(totalDay),
    }
  })
}

export const increment = (price) => {
  return ({
    type: 'COUNTER_INCREMENT',
    payload: {
      price: Number(price),
    }
  })
}

export const decrement = () => {
  return ({
    type: 'COUNTER_DECREMENT'
  })
}

export const empty = () => {
  return ({
    type: 'COUNTER_EMPTY'
  })
}
