import { SEARCH_DEALS, RESET } from '../actions'
// import data from '../../data.json'

function deals (deals, action) {
  switch (action.type) {
    // case RECEIVE_DEALS:
    //   return action.deals
    case SEARCH_DEALS:
      return [...action.deals].filter(deal => deal.company.toLowerCase().includes(action.searchTerm) || deal.Deal.toLowerCase().includes(action.searchTerm))
    case RESET:
      return [...deals]
    default:
      return deals
  }
}

export default deals
