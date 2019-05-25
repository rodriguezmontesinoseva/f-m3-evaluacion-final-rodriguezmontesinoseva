import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';

class List extends Component {
    render() {
        const { charactersFilter } = this.props;

        return (
            <ul className="list-container">
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

List.propTypes = {
    charactersFilter: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    house: PropTypes.string,
};

export default List;