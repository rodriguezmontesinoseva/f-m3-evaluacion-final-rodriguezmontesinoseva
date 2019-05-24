import React, { Component } from 'react';
// import Filters from '../Filters';
import List from '../List';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			characters: []
		};

	}

	componentDidMount() {
		this.getCharacters();
	}


	getCharacters() {
		const ENDPOINT = 'http://hp-api.herokuapp.com/api/characters';

		fetch(ENDPOINT)
			.then(response => response.json())
			.then(data => {
				const newCharacters = data.map((item, id) => {
					return { ...item, id: id + 1 }
				})
				this.setState({
					characters: newCharacters
				});



			});
	}



	render() {
		const characters = this.state.characters;

		return (
			<div>
				<h1>Harry Potter Characters</h1>

				<ul>
					<List characters={characters} />

				</ul>


			</div>
		)

	}
}

export default App;

