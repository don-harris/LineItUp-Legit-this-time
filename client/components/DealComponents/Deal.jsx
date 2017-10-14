import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Deal = (props) => {
  return (
    <div>
      <h2>{props.deal}</h2>
    </div>
  )
}

export default Deal
