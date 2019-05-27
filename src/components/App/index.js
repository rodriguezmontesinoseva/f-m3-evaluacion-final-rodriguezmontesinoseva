import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Card from '../Card';
import PropTypes from 'prop-types';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			characters: [],
			searchFilter: '',
			loading: true
		};
		this.handlerChangeSearch = this.handlerChangeSearch.bind(this);
	}

	componentDidMount() {
		this.getCharacters();
	}

	getCharacters() {
		const ENDPOINT = 'https://hp-api.herokuapp.com/api/characters';
		fetch(ENDPOINT)
			.then(response => response.json())
			.then(data => {
				const newCharacters = data.map((item, id) => {
					return { ...item, id: id + 1 }
				})
				this.setState({
					characters: newCharacters,
					loading: false
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
		const charactersArr = this.state.characters;
		const charactersFilter = this.state.characters.filter(item => {
			return item.name.includes(this.state.searchFilter)
		});
		const handlerChangeSearch = this.handlerChangeSearch;
		const searchFilter = this.state.searchFilter;

		return (
			<Switch>
				<Route exact path='/' render={() =>
					<Home
						handlerChangeSearch={handlerChangeSearch}
						searchFilter={searchFilter}
						charactersFilter={charactersFilter}
					/>
				} />
				<Route path='/:id' render={routerProps =>
					<Card
						match={routerProps.match}
						charactersArr={charactersArr}
						loading={this.state.loading}
					/>
				} />
			</Switch>
		)
	}
}

App.propTypes = {
	valueSearch: PropTypes.string,
	charactersArr: PropTypes.arrayOf(PropTypes.object),
	charactersFilter: PropTypes.arrayOf(PropTypes.object),
	handlerChangeSearch: PropTypes.func,
	searchFilter: PropTypes.string,
	loading: PropTypes.bool
};

export default App;

