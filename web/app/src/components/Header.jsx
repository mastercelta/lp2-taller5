import React from 'react'
import PropTypes from 'prop-types'

const Header = ({props}) => {
  return (
      <header className="py-5 bg-light border-bottom mb-4">
        <div className="container">
          <div className="text-center my-5">
            <h1 className="fw-bolder">Welcome to Blog Home!</h1>
            <p className="lead mb-0">
              A Bootstrap 5 starter layout for your next blog homepage
            </p>
          </div>
        </div>
      </header>
  );
}

Header.propTypes = {

}

export default Header
