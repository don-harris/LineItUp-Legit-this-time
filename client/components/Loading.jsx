import React from 'react'
import { connect } from 'react-redux'

const Loading = (props) => {
  return (
    <div className='error'>
      <span className="control">
        <button style={{width: '70px'}} onClick={props.reset} className="button is-info">{props.loading
          ? <span className="image icon is-large"><img src='/images/loadingSymbol.gif' /></span>
          : 'RESET'
        }
        </button>
      </span>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps)(Loading)
