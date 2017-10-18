import testData from '../../data.json'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_DEALS = 'RECEIVE_DEALS'
export const REQUEST_DEALS = 'REQUEST_DEALS'

export const requestDeals = () => {
  return {
    type: REQUEST_DEALS
  }
}

export const receiveDeals = (deals) => {
  return {
    type: RECEIVE_DEALS,
    posts: testData.deals.map(deal => deals.company)
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage
  }
}

export function fetchDeals (deals) {
  return (dispatch) => {
    dispatch(requestDeals(deals))
      .get(testData)
      .end((err, res) => {
        if (err) {
          dispatch(showError(err.message))
          return
        }
        dispatch(receiveDeals(res.body))
      })
  }
}