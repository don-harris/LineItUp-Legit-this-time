import React from 'react'

const Company = (props) => {
  return (
    <div className="column is-4 is-desktop-only company">
      <div className="image">
        <img src={props.image}/>
      </div>
      <h3 className="subtitle is-2">{props.company}</h3>
      <hr />
    </div>
  )
}

export default Company
