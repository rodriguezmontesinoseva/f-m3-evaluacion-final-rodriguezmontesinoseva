import React, { Component } from 'react';
import Filters from '../Filters';
import List from '../List';
import './styles.scss';
import PropTypes from 'prop-types';

class Home extends Component {
    render() {
        const {
            handlerChangeSearch,
            searchFilter,
            charactersFilter
        } = this.props;

        return (
            <div className='central-column'>
                <header >
                    <h1 className='title-header' >Harry Potter Characters</h1>

                </header>

                <main className='main-container'>

                    <Filters
                        handlerChangeSearch={handlerChangeSearch}
                        searchFilter={searchFilter} />
                    <List charactersFilter={charactersFilter} />



                </main>
                <footer>
                    <h3 className="title-footer">Bienvenido a Hogwarts...</h3>
                </footer>


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