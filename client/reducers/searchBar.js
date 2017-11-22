import { RECEIVE_DEALS, SEARCH_DEALS, RESET } from '../actions'
// import data from '../../data.json'

function deals (state = [], action) {
  switch (action.type) {
    case RECEIVE_DEALS:
      return action.deals
    case SEARCH_DEALS:
      return [...action.deals].filter(deal => deal.company.toLowerCase().includes(action.searchTerm) || deal.deal.toLowerCase().includes(action.searchTerm))
    case RESET:
      return [...state]
    default:
      return state
  }
}

export default deals
