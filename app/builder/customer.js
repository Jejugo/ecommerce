export const newCustomerFromUserDataForm = (personalData, addressData) => {
  const personalDataObj = personalData.reduce((acc, item) => {
    return {
      ...acc,
      [item.name]: item.value
    }
  }, {})

  const addressObj = addressData.reduce((acc, item) => {
    return {
      ...acc,
      [item.name]: item.value
    }
  }, {})

  return {
    customer: {
      personalData: personalDataObj,
      address: {
        ...addressObj
      }
    }
  }
}









