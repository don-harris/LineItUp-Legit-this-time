import React from 'react'
import { connect } from 'react-redux'

const Loading = (props) => {
  return (
    <div className='error'>
      {
        props.loading &&
        <img src='https://i.redd.it/ounq1mw5kdxy.gif' />
      }
    </div>
  )
}

function mapStateToProps (state) {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps)(Loading)
