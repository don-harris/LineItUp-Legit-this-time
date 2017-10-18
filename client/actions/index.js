import data from '../../data.json'

export const SHOW_ERROR = 'SHOW_ERROR'
export const SEARCH_DEALS = 'SEARCH_DEALS'
export const REQUEST_DEALS = 'REQUEST_DEALS'
export const RESET = 'RESET'

export const requestDeals = () => {
  return {
    type: REQUEST_DEALS
  }
}

export const searchDeals = (searchTerm) => {
  return {
    type: SEARCH_DEALS,
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

export function fetchDeals (searchTerm) {
  return (dispatch) => {
    dispatch(searchDeals(searchTerm.toLowerCase()))
  }
}