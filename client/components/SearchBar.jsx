import React from 'react'
import { connect } from 'react-redux'
import { fetchDeals, resetSearch } from '../actions'

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
      deal: evt.target.value
    })
    this.props.dispatch(fetchDeals(evt.target.value))
  }
  reset() {
    this.setState({deal: ''})
    this.props.dispatch(resetSearch())
  }
  render () {
    return (
      <div className="field has-addons column level">
        <span className="control">
          <input onChange={(e) => this.handleChange(e)} value={this.state.deal} type="text" placeholder="Search..." className="input" />
        </span>
        <span className="control">
          <button onClick={this.reset.bind(this)} className="button is-info">RESET
          </button>
        </span>
      </div>
    )
  }
}

export default connect()(SearchBar)
