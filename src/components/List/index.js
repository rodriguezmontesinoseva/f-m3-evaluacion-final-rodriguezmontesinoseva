import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class List extends Component {
    render() {
        const { charactersFilter } = this.props;

        return (
            <ul>
                {charactersFilter.map(item => {
                    return (
                        <li key={item.id}>
                            <Link to={`/${item.id}`}>
                                <div>
                                    <img src={item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>{item.house}</p>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>



        );
    }
}

export default List;