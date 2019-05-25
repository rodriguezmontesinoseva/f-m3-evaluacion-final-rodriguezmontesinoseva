import React, { Component } from 'react';
import Filters from '../Filters';
import List from '../List';
import PropTypes from 'prop-types';

class Home extends Component {
    render() {
        const {
            handlerChangeSearch,
            searchFilter,
            charactersFilter
        } = this.props;

        return (
            <div>
                <h1>Harry Potter Characters</h1>


                <ul>
                    <Filters
                        handlerChangeSearch={handlerChangeSearch}
                        searchFilter={searchFilter} />
                    <List charactersFilter={charactersFilter} />

                </ul>


            </div>

        );
    }
}

Home.propTypes = {
    charactersFilter: PropTypes.arrayOf(PropTypes.object),
    handlerChangeSearch: PropTypes.func,
    searchFilter: PropTypes.string
};


export default Home;