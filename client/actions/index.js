import { getDeals } from '../client-api'

export const SHOW_ERROR = 'SHOW_ERROR'
export const SEARCH_DEALS = 'SEARCH_DEALS'
export const REQUEST_DEALS = 'REQUEST_DEALS'
export const RESET = 'RESET'
export const RECEIVE_DEALS = 'RECEIVE_DEALS'

export const requestDeals = () => {
  return {
    type: REQUEST_DEALS
  }
}

export const receiveDeals = (deals) => {
  return {
    type: RECEIVE_DEALS,
    deals
  }
}

export const searchDeals = (deals, searchTerm) => {
  console.log(deals)
  return {
    type: SEARCH_DEALS,
    deals: deals,
    searchTerm
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage
  }
}

export const resetSearch = () => {
  return {
    type: RESET
  }
}

export const stopLoading = () => {
  return {
    type: 'STOP_LOADING'
  }
}

export function fetchDeals (searchTerm) {
  return (dispatch) => {
    getDeals()
      .then(res => {
        dispatch(requestDeals())
        dispatch(receiveDeals(res.body))
        dispatch(searchDeals(res.body, searchTerm.toLowerCase()))
        setTimeout(() => dispatch                                                                                                                                   (stopLoading()), 4000)
      })
  }
}
