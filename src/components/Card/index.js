import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
    render() {
        const { charactersArr } = this.props;
        const { id } = this.props.match.params;
        const selCharacter = charactersArr[parseInt(id) - parseInt(1)];
        console.log(selCharacter);



        return (
            <div>
                <Link to='/'>volver</Link>
                {/* // nombre
            // foto 
            // Casa 
            // añonacimiento 
            // patronus 
            // estado:vivo muerto */}

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


export default Card;