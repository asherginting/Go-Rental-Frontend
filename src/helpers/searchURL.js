const searchURL = (ev) => {
  const key = ev.target.elements['brand'].value
  const fil = ev.target.elements['location'].value
  const min = ev.target.elements['minimum'].value
  const max = ev.target.elements['maximum'].value
  let url = ''
  if (key) {
    url = `/search?keyword=${key}`
  }
  if (fil) {
    url = `/search?keyword=${key}&location=${fil}`
  }
  if (min) {
    url = `/search?keyword=${key}&min=${min}`
  }
  if (max) {
    url = `/search?keyword=${key}&max=${max}`
  }
  if (min && fil) {
    url = `/search?keyword=${key}&location=${fil}&min=${min}`
  }
  if (max && fil) {
    url = `/search?keyword=${key}&location=${fil}&min=${max}`
  }
  if (fil && max && min) {
    url = `/search?keyword=${key}&location=${fil}&min=${min}&max=${max}`
  }
  return url;
}

export default searchURL