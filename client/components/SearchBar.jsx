import React from 'react'
import { connect } from 'react-redux'
import { fetchDeals } from '../actions'

class SearchBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      deal: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (evt) {
    this.setState({
      deals: evt.target.value
    })
  }

  render () {
    return (
      <div className="field has-addons column level">
        <div>
          <span className="control">
            <input onChange={(e) => this.handleChange(e)} type="text" placeholder="Search..." className="input" />
          </span>
          <span className="control">
            <button className="button is-info" onClick={() => this.props.dispatch(fetchDeals(this.state.deal))}>Search
            </button>
          </span>
        </div>
      </div>
    )
  }
}

export default connect()(SearchBar)
