import React from 'react'
import Company from './Company'
import { connect } from 'react-redux'
import {getDeals} from '../actions/index'

// import testData from '../../data.json'

const Container = (props) => {
  return (
    <div className="section has-text-centered columns is-multiline">
      {props.deals.length != 0 
        ? props.deals.map((deal) => <Company deal={deal} key={deal.id} />)
        : <h1 className="title is-3" >No Results Found</h1>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    deals: state.deals
  }
}

export default connect(mapStateToProps)(Container)

// export default Container
