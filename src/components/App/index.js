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
			loading: true,
			filters: {
				houses: []
				//en houses guardo los checkbox chequeados, si están en este array tienen que estar chekeados
			}
		};
		this.handlerChangeSearch = this.handlerChangeSearch.bind(this);
		this.handlerChangeCheck = this.handlerChangeCheck.bind(this);
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

	handlerChangeCheck(event) {
		const { value, checked } = event.target;
		console.log(value);
		this.setState(prevState => {
			return {
				filters: {
					...prevState.filters,
					houses: checked
						? prevState.filters.houses.concat(value)
						// si checkeo concateno el checkbox a lo que hubiese antes en el array houses
						: prevState.filters.houses.filter(item => item !== value)
					//si descheckeo filtro el array cogiendo los que son diferentes al value que me llega
				}
			}
		})

	}

	render() {
		const houses = this.state.filters.houses;
		const charactersArr = this.state.characters;
		const handlerChangeSearch = this.handlerChangeSearch;
		const searchFilter = this.state.searchFilter;
		const handlerChangeCheck = this.handlerChangeCheck;

		const charactersFilter = charactersArr
			.filter(item => {
				return item.name.includes(this.state.searchFilter)
			})
			.filter(item => {
				if (!houses.length) {
					return true
					// si el array esta vacio no tiene longitud, devuelve true, es decir , coge el elemento 
				} else {
					return houses.includes(item.house)
					//si el array tiene algo, devuelve los elementos que incluyan item.house
				}

			})



		return (
			<Switch>
				<Route exact path='/' render={() =>
					<Home
						handlerChangeSearch={handlerChangeSearch}
						searchFilter={searchFilter}
						charactersFilter={charactersFilter}
						handlerChangeCheck={handlerChangeCheck}
						houses={houses}
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
	loading: PropTypes.bool,
	isCheck: PropTypes.bool
};

export default App;

