import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Filters extends Component {
    render() {
        const { handlerChangeSearch, searchFilter, handlerChangeCheck, houses } = this.props;
        return (
            <form className="filters-container" action="GET">
                <fieldset>
                    <label className="filters-label" htmlFor="searchFilter">Busca a tu personaje favorito</label>
                    <input type="text" name="searchFilter" id="searchFilter" onChange={handlerChangeSearch} value={searchFilter} />
                </fieldset>

                <fieldset>
                    <legend>Busca por casa</legend>

                    <input
                        type="checkbox"
                        name="houses"
                        id="gryffindor"
                        value="Gryffindor"
                        onChange={handlerChangeCheck}
                        checked={houses.includes('Gryffindor')} />
                    <label htmlFor="gryffindor">Gryffindor</label>

                    <input
                        type="checkbox"
                        name="houses"
                        id="hufflepuff"
                        value="Hufflepuff"
                        onChange={handlerChangeCheck}
                        checked={houses.includes('Hufflepuff')} />
                    <label htmlFor="hufflepuff">Hufflepuff</label>

                    <input
                        type="checkbox"
                        name="houses"
                        id="ravenclaw"
                        value="Ravenclaw"
                        onChange={handlerChangeCheck}
                        checked={houses.includes('Ravenclaw')} />
                    <label htmlFor="ravenclaw">Ravenclaw</label>

                    <input
                        type="checkbox"
                        name="houses"
                        id="slytherin"
                        value="Slytherin"
                        onChange={handlerChangeCheck}
                        checked={houses.includes('Slytherin')} />
                    <label htmlFor="slytherin">Slytherin</label>


                </fieldset>
            </form>
        );
    }
}

Filters.propTypes = {
    handlerChangeSearch: PropTypes.func,
    searchFilter: PropTypes.string
};

export default Filters;