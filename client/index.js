import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
// const placeToMount = document.getElementById('root')

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    // placeToMount
    document.getElementById('app')
  )
})
