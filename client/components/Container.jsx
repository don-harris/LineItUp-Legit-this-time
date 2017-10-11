import React from 'react'

const Container = (props) => {
  return (
    <div className=" level columns">
      <div className="column is-one-third">
        First column
      </div>
      <div className="column">
        Second column
      </div>
      <div className="column">
        Third column
      </div>
    </div>
  )
}

export default Container
