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


	}


	render() {
		const characters = this.state.characters.filter(item => {
			return item.name.includes(this.state.searchFilter)
		});

		const handlerChangeSearch = this.handlerChangeSearch;
		const searchFilter = this.state.searchFilter;

		return (
			<div>
				<h1>Harry Potter Characters</h1>
				{/* hago aqui el filtro y que le mande los filtrados solo a list. asi todo queda en la madre se buscan por NOMBRE
				hace distinción entre mayúsculas y minúsculas*/}

				<ul>
					<Filters
						handlerChangeSearch={handlerChangeSearch}
						searchFilter={searchFilter} />
					<List characters={characters} />

				</ul>


			</div>
		)

	}
}

export default App;

