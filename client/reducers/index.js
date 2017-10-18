import { combineReducers } from 'redux'

import searchBar from './searchBar'
import loading from './loading'

export default combineReducers({
  searchBar,
  loading
})
