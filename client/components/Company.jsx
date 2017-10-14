import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import testData from '../../data.json'

import Deal from './DealComponents/Deal'

class Company extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      deal: []
    }
    this.fetchDeal = this.fetchDeal.bind(this)
  }
  componentWillMount () {
    this.fetchDeal()
  }

  fetchPlayers () {
    return getPla ()
      .then(players => {
        this.setState({ players: players })
      })
      .catch(err => {
        this.setState({ errorMessage: err.message })
      })
  }

  render () {
    return (
      <div className="column is-4 is-desktop-only company">
        <div className="image">
          <img src={this.props.image}/>
          <button className="button"><Link to='/Deal'>Line It Up!</Link></button>
        </div>
        <hr />
        <Route path='/Deal' component={Deal}/>
        <Deal />
      </div>
    )
  }
}

// render = {(props) => (
// deal = {
//   this.deals.find((deal) =>
//     deal.id === Number(props.match.params.id))
// }
// )} />
//       </div >

export default Company
