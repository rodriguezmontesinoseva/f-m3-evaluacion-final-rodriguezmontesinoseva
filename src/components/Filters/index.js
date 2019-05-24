import React, { Component } from 'react';

class Filters extends Component {
    render() {
        const { characters } = this.props;

        return (
            <ul>
                {characters.map(item => {
                    return (
                        <li>
                            <div>
                                <img src={item.image} alt="" />
                                <p>{item.name}</p>
                                <p>{item.house}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>



        );
    }
}

export default Filters;