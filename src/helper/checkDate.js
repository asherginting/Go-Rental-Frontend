const checkDate = (dateInput) => {
  let result = false
  const date = new Date()
  const day = date.getDate()
  const month = new Date().getMonth()
  const year = date.getFullYear()

  const arrDate = dateInput.split('/')
  if (Number(arrDate[0]) >= day) {
      if (Number(arrDate[1]) >= month) {
          if (Number(arrDate[2]) >= year) {
              result = true
          }
      }
  }
  return result
}

export default checkDate