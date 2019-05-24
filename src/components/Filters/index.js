import React, { Component } from 'react';

class Filters extends Component {
    render() {
        return (
            <div>
                <label htmlFor="searchFilter"></label>
                <input type="text" name="searchFilter" id="searchFilter" onChange={this.props.handlerChangeSearch} value={this.props.searchFilter} />
            </div>
        );

    }
}

export default Filters;