import React from 'react'

class SearchResults extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    // this.fetchDeal = this.fetchDeal.bind(this)
  }
  // componentWillMount () {
  //   this.fetchDeal()
  // }

  // fetchDeal () {
  //   return ()
  //     .then(deals => {
  //       this.setState({ deals: deals })
  //     })
  //  }

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

export default SearchResults
