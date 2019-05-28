import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Filters extends Component {
    render() {
        const { handlerChangeSearch, searchFilter, handlerClickRadio } = this.props;
        return (
            <div className="filters-container">
                <label className="filters-label" htmlFor="searchFilter">Busca a tu personaje favorito</label>
                <input type="text" name="searchFilter" id="searchFilter" onChange={handlerChangeSearch} value={searchFilter} />

                <label className="filters-label" htmlFor="radio">
                    <input type="radio" name="houses" id="radio" value='Gryffindor' onChange={handlerClickRadio} />Gryffindor </label>
                <label className="filters-label" htmlFor="radio">
                    <input type="radio" name="houses" id="radio" value='Slytherin' onChange={handlerClickRadio} />Slytherin</label>
                <label className="filters-label" htmlFor="radio">
                    <input type="radio" name="houses" id="radio" value='Ravenclaw' onChange={handlerClickRadio} />Ravenclaw </label>
                <label className="filters-label" htmlFor="radio">
                    <input type="radio" name="houses" id="radio" value='Hufflepuff' onChange={handlerClickRadio} />Hufflepuff </label>
                <label className="filters-label" htmlFor="radio">
                    <input type="radio" name="houses" id="radio" value='Sin-casa' onChange={handlerClickRadio} />Sin casa </label>
                <label className="filters-label" htmlFor="radio">
                    <input type="radio" name="houses" id="radio" value='Todos' onChange={handlerClickRadio} checked />Todos </label>
            </div>
        );
    }
}

Filters.propTypes = {
    handlerChangeSearch: PropTypes.func,
    searchFilter: PropTypes.string
};

export default Filters;