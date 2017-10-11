import React from 'react'

const NavBar = (props) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        {/* <img src="https://ih0.redbubble.net/image.236399780.9730/st%2Csmall%2C215x235-pad%2C210x230%2Cf8f8f8.lite-1u3.jpg" alt="The Murricane Himself" width="150" height="5"/> */}


        <button className="button navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <a class="navbar-item">
        <span></span>
        Home
      </a>

      <div id="navMenuTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link  is-active" href="/documentation/overview/start/">
                Deals
            </a>
            <div className="navbar-dropdown is-boxed">
              <a className="navbar-item ">
                  Mens
              </a>
              <a className="navbar-item">
                  Womens
              </a>
              <a className="navbar-item">
                  Children
              </a>
              <a className="navbar-item">
                  Need a buyer A.S.A.P!
              </a>
              <a className="navbar-item">
                  *New*
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
