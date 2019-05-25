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
            <div className='title'>
                <header>
                    <h1 >Harry Potter Characters</h1>

                </header>

                <main className='main-container'>
                    <ul>
                        <Filters
                            handlerChangeSearch={handlerChangeSearch}
                            searchFilter={searchFilter} />
                        <List charactersFilter={charactersFilter} />

                    </ul>

                </main>
                <footer>
                    <h2>Bienvenido a Hogwarts...</h2>
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