import React, { Component } from 'react';
import Filters from '../Filters';
import List from '../List';
import Card from '../Card'

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
                    {/* <Card charactersArr={charactersArr}
                    /> */}

                    <List charactersFilter={charactersFilter} />

                </ul>


            </div>

        );
    }
}

export default Home;