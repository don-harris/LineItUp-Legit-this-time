import { RECEIVE_DEALS } from '../actions'

const intitialDeals = []

function deals (deals = intitialDeals, action) {
  switch (action.type) {
    case RECEIVE_DEALS:
      return action.deals

    default:
      return deals
  }
}

export default deals
