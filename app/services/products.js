export const retrieveProducts = async (limit, offset) => {
  let res = await fetch(`http://localhost:3002/products?limit=${limit}&offset=${offset}`, {
    method: 'get'
  })
  return res.json()

}

export const retrieveProduct = async (id) => {
  let res = await fetch(`http://localhost:3002/products/${id}`, {
    method: 'get'
  })
  return res.json()

}