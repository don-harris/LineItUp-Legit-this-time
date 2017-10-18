import { RECEIVE_DEALS, SEARCH_DEALS, RESET } from '../actions'
import data from '../../data.json'
const intitialDeals = data.deals

function deals (deals = intitialDeals, action) {
  switch (action.type) {
    case RECEIVE_DEALS:
      return action.deals
    case SEARCH_DEALS:
      return [...data.deals].filter(deal => deal.company.toLowerCase().includes(action.searchTerm) || deal.Deal.toLowerCase().includes(action.searchTerm))
    case RESET:
      return [...data.deals]
    default:
      return deals
  }
}

export default deals
