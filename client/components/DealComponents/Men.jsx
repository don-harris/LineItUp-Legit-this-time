import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import testData from '../../../data.json'

class Men extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div className="column is-4 is-desktop-only company">
        <div className="image">
          <img src={this.props.deal.image} />
          <br />
          <div className="subtitle is-3 is-cyan">
            <h2>{this.props.deal.Deal}</h2>
          </div>
          <button className="button"><Link to={`/deal/${this.props.deal.id}`}>Line It Up!</Link></button>{this.props.deal.Buyers}
        </div>
        <hr />
      </div>
    )
  }
}

export default Men
