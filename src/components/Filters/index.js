import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Filters extends Component {
    render() {
        const { handlerChangeSearch, searchFilter } = this.props;
        return (
            <div className="filters-container">
                <label className="filters-label" htmlFor="searchFilter">Busca a tu personaje favorito</label>
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