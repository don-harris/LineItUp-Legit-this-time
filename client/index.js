import React from 'react'
import ReactDOM from 'react-dom'
// import { createStore, applyMiddleware, compose } from 'redux'
// import thunkMiddleware from 'redux-thunk'

import App from './components/App'
// const placeToMount = document.getElementById('root')

// let store = createStore(reducers, compose(
//   applyMiddleware(thunkMiddleware),
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// ))

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    // <Provider store={store}>
    <App />,
    // {/* </Provider>, */}
    // placeToMount
    document.getElementById('app')
  )
})
