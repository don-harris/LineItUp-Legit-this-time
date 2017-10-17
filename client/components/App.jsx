import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Container from './Container'
import NavBar from './NavBar'
import Deal from './DealComponents/Deal'
import ProfileLogin from './profileComponents/ProfileLogin'
import ProfilePage from './profileComponents/ProfilePage'
import ProfileRegister from './profileComponents/ProfileRegister'
import Mens from './DealComponents/Mens'

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
          <Route path='/' component={NavBar} />
          <hr/>
          <Route exact path='/' component={Container} />
          <Route exact path='/deal/:id' component={Deal} />
          <Route exact path='/login' component={ProfileLogin}/>
          <Route exact path='/profile' component={ProfilePage} />
          <Route exact path='/register' component={ProfileRegister} />
          <Route exact path='/mens' component={Mens} />
          <hr />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
