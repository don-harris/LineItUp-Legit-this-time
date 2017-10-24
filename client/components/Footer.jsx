import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Footer = (props) => {
  return (
    <div className="footer has-text-centered">
      <h4>&copy; 2017 D J Company</h4>
      <Link to='/aboutus'>
        <h5>About</h5>
      </Link>
      <h5>Contact us</h5>
    </div>
  )
}

export default Footer
