import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Container from './Container'
import NavBar from './NavBar'

const App = (props) => {
  return (
    <div className="container">
      <Header/>
      <NavBar />
      <hr/>
      <Container />
      <hr />
      <Footer />
    </div>
  )
}

export default App
