import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import testData from '../../data.json'

import Deal from './DealComponents/Deal'

class Company extends React.Component {
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
          <img src={this.props.deal.image}/>
          <br/>
          <h2>{this.props.deal.Deal}</h2>
          <button className="button"><Link to={`/deal/${this.props.deal.id}`}>Line It Up!</Link></button>

        </div>
        <hr />
      </div>
    )
  }
}

// render() {
//   return (
//     <div className="column is-4 is-desktop-only company">
//       <div className="image">
//         <img src={this.props.image} />
//         <button className="button"><Link to='/Deal'>Line It Up!</Link></button>
//       </div>
//       <hr />
//       <Route path='/Deal' render={(props) => (
//         <Deal deal= {
//           this.deals.find((deal) =>
//             deal.id === Number(props.match.params.id))
//         }
//       } />
//       <Deal />
//     </div>
//   )
// }
// }

// render = {(props) => (
// deal = {
//   this.deals.find((deal) =>
//     deal.id === Number(props.match.params.id))
// }
// )} />
//       </div >

export default Company
