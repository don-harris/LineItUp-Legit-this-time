import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import testData from '../../data.json'

import Deal from './DealComponents/Deal'

class Company extends React.Component(this.props) {
  render () {
    return (
      <div className="column is-4 is-desktop-only company">
        <div className="image">
          <img src={this.props.image}/>
          <button className="button"><Link to='/Deal'>Line It Up!</Link></button>
        </div>
        <hr />
        <Route path='/Deal' render={(props) => (
          <Deal deal={this.props.deal}/>
        )} />
      </div>
    )
  }
}

export default Company
