import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
    render() {
        // const { charactersArr } = this.props;
        // const { id } = this.props.match.params;
        // console.log(this.props.match.params);
        const { name } = this.props;

        return (
            <div>
                <p>soy Card</p>
                <Link to='/'>volver</Link>
                {/* // nombre
            // foto 
            // Casa 
            // añonacimiento 
            // patronus 
            // estado:vivo muerto */}
                <img src={this.props.image} alt="" />
                <p>{name}</p>
                <p>casa {this.props.house}</p>
                <p>año {this.props.yearOfBirth}</p>
                <p>patrono {this.props.patronus}</p>
                <p>alive {this.props.alive}</p>




            </div>

        );
    }

}


export default Card;