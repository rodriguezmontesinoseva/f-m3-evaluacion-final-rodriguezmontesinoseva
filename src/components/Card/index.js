import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';

class Card extends Component {
    render() {
        const { charactersArr } = this.props;
        const { id } = this.props.match.params;
        const selCharacter = charactersArr[id - 1];
        console.log(selCharacter);
        console.log(id);



        return (
            <div className='card-container'>
                < header  >
                    <Link to='/' className="go-back">Volver</Link>
                </header>

                <main className='card-main-container'>
                    {selCharacter !== undefined ?
                        <div>
                            <div className='card-image' style={{ backgroundImage: `url(${selCharacter.image})` }} ></div>
                            {/* <img src={selCharacter.image} alt="" /> */}
                            <div className='card-text'>
                                <h2>{selCharacter.name}</h2>
                                <p>Casa: {selCharacter.house}</p>
                                <p>Nacimiento: {selCharacter.yearOfBirth}</p>
                                <p>Patronus: {selCharacter.patronus}</p>
                                <p>Estado: {selCharacter.alive === true ? 'Vivo' : 'Muerto'}</p>
                            </div>
                        </div>

                        :
                        <p>loading...</p>
                    }

                </main>





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