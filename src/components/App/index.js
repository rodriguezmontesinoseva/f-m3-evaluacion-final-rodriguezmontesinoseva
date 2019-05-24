import React, { Component } from 'react';
import Filters from '../Filters';
import List from '../List';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			characters: [],
			searchFilter: ''
		};
		this.handlerChangeSearch = this.handlerChangeSearch.bind(this);

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

	handlerChangeSearch(event) {
		const valueSearch = event.currentTarget.value;

		this.setState({
			searchFilter: valueSearch
		})

		// this.setState(prevState => {
		// 	return {
		// 		characters: [{ ...prevState.characters, searchFilter: valueSearch }]
		// 	}
		// })


	}


	render() {
		const characters = this.state.characters;
		const handlerChangeSearch = this.handlerChangeSearch;

		return (
			<div>
				<h1>Harry Potter Characters</h1>

				<ul>
					<Filters handlerChangeSearch={handlerChangeSearch} />
					<List characters={characters} />

				</ul>


			</div>
		)

	}
}

export default App;

