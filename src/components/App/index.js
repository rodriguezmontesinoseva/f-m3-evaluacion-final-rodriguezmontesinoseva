import React, { Component } from 'react';
import Filters from '../Filters';
import List from '../List';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			characters: []
		};
		this.getCharacters();
	}

	// componentDidMount() {
	// 	this.getCharacters();
	// }


	getCharacters() {
		const ENDPOINT = 'http://hp-api.herokuapp.com/api/characters';

		fetch(ENDPOINT)
			.then(response => response.json())
			.then(data => {
				console.dir(data);
				this.setState({
					characters: data
				});



			});
	}



	render() {
		const characters = this.state.characters;

		return (
			<div>
				<h1>Listado</h1>

				<ul>
					<Filters characters={characters} />

				</ul>

				<List />

			</div>
		)

	}
}

export default App;

