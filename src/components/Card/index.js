import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Card extends Component {
    render() {
        const { charactersArr } = this.props;
        const { id } = this.props.match.params;
        const selCharacter = charactersArr[id - 1];
        console.log(selCharacter);
        console.log(id);



        return (
            <div>
                <Link to='/'>volver</Link>
                {selCharacter !== undefined ?
                    <div>
                        <img src={selCharacter.image} alt="" />
                        <h1>{selCharacter.name}</h1>
                        <p>Casa: {selCharacter.house}</p>
                        <p>Nacimiento: {selCharacter.yearOfBirth}</p>
                        <p>Patronus: {selCharacter.patronus}</p>
                        <p>Estado: {selCharacter.alive === true ? 'Vivo' : 'Muerto'}</p>
                    </div>

                    :
                    <p>loading...</p>
                }





            </div>

        );
    }

}

Card.propTypes = {
    charactersArr: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    house: PropTypes.string,
    yearOfBirth: PropTypes.string,
    patronus: PropTypes.string,
    alive: PropTypes.bool

};


export default Card;