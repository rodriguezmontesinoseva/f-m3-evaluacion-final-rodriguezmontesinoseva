import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
    render() {
        const { charactersArr } = this.props;
        const matchId = this.props.match.params.id;
        // const selectCharacter = charactersArr[id];


        return (
            <div>
                {/* parseInt() */}
                {charactersArr
                    // .find(item => item.id === id)

                    .map(item => {
                        if (item.id === parseInt(matchId)) {
                            return (
                                // <li key={item.id}>
                                // <Link to={`/${item.id}`}>
                                <div>
                                    <img src={item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>{item.house}</p>
                                    <p>{item.id}</p>
                                </div>
                                // </Link>
                                // </li>
                            );
                        }
                    }
                    )


                }


                {/* <p>soy Card</p> */}
                {/* <h2 className="detail__name">{`${ user.name.first } ${ user.name.last } `}</h2> */}
                {/* <h2>{`${ selectCharacter.name } `}</h2> */}
                <Link to='/'>volver</Link>
                {/* <p>{this.props.charactersArr[this.props.match.params.id]}</p> */}
                {/* // nombre
            // foto 
            // Casa 
            // añonacimiento 
            // patronus 
            // estado:vivo muerto */}
                {/* <img src={this.props.card.image} alt="" /> */}
                {/* <p>{this.props.card.{name}</p> */}
                {/* <p>casa {this.props.house}</p>
                <p>año {this.props.yearOfBirth}</p>
                <p>patrono {this.props.patronus}</p>
                <p>alive {this.props.alive}</p> */}




            </div>

        );
    }

}


export default Card;