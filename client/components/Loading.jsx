import React from 'react'
import { connect } from 'react-redux'

const Loading = (props) => {
  return (
    <div className='error'>
      {
        props.loading &&
        <img src='/images/loadingSymbol.gif' />
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
