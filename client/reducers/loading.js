import {SHOW_ERROR, REQUEST_DEALS, RECEIVE_DEALS, RESET} from '../actions'

const loading = (state = false, action) => {
  switch (action.type) {
    case REQUEST_DEALS:
      return true

    case RECEIVE_DEALS:
      return false

    case SHOW_ERROR:
      return false

    case RESET:
      return false
    case 'STOP_LOADING':
      return false
    default:
      return state
  }
}

export default loading
