import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Filters extends Component {
    render() {
        const { handlerChangeSearch, searchFilter } = this.props;
        return (
            <div className>
                <label htmlFor="searchFilter">Introduce el nombre del personaje que quieres buscar</label>
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