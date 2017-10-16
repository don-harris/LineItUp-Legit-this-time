import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Container from './Container'
import NavBar from './NavBar'
import Deal from './DealComponents/Deal'

class App extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {

  //   }
  // }
  render () {
    return (
      <Router>
        <div className="container">
          <Header/>
          <NavBar />
          <hr/>
          <Route exact path='/' component={Container} />
          <Route exact path='/deal/:id' component={Deal} />
          <hr />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
