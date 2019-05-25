import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filters extends Component {
    render() {
        const { handlerChangeSearch, searchFilter } = this.props;
        return (
            <div>
                <label htmlFor="searchFilter"></label>
                <input type="text" name="searchFilter" id="searchFilter" onChange={handlerChangeSearch} value={searchFilter} />
            </div>
        );

    }
}

Filters.propTypes = {
    handlerChangeSearch: PropTypes.func,
    searchFilter: PropTypes.string
};

export default Filters;