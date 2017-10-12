import React from 'react'

const Header = (props) => {
  return (
    <div className="columns has-text-centered section">
      <div className="field has-addons column">
        <div className="control">
          <input className="input" type="text"/>
        </div>
        <div className="control">
          <a className="button is-info">
            Search
          </a>
        </div>
      </div>
      <div className="column is-6">
        <h1 className="title is-1 has-text-centered">LineItUp</h1>
      </div>
      <h4 className="column subtitle">Shopping cart <br/> <img src="https://openclipart.org/image/2400px/svg_to_png/60139/cart.png" width="50" height="50" /></h4>
    </div>
  )
}

export default Header
