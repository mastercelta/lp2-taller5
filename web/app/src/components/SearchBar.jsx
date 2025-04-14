import React from 'react'
import PropTypes from 'prop-types'

const SearchBar = ({props}) => {
  return (
    <div className="card mb-4">
      <div className="card-header">Search</div>
      <div className="card-body">
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder="Enter search term..."
            aria-label="Enter search term..."
            aria-describedby="button-search"
          />
          <button className="btn btn-primary" id="button-search" type="button">
            Go!
          </button>
        </div>
      </div>
    </div>
  );
}

SearchBar.propTypes = {

}

export default SearchBar
