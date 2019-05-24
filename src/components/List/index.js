import React, { Component } from 'react';
// import Card from '..Card'

class List extends Component {
    render() {
        const { characters } = this.props;

        return (
            <ul>
                {characters.map(item => {
                    return (
                        <li key={item.id}>
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

export default List;