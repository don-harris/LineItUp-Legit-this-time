import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Container from './Container'
import NavBar from './NavBar'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className="container">
          <Header/>
          <NavBar />
          <hr/>
          <Container />
          <hr />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
