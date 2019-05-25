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
                        <li className="item-list"
                            key={item.id}
                        >
                            <Link to={`/${item.id}`}>
                                <div className="item-image" style={{ backgroundImage: `url(${item.image})` }} >
                                </div>
                            </Link>
                            <div className="item-text">
                                <p className="name-item">{item.name}</p>
                                <p>{item.house}</p>
                            </div>

                        </li>
                    );
                })}
            </ul >



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