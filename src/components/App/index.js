import React, { Component } from 'react';
import Filters from '../Filters';
import List from '../List';


class App extends Component {
	render() {
		// const headerIndex = (
		// 	<header>

		// 	</header>
		// );

		// const pageIndex = (
		// 	<div className="app-container">
		// 		{headerIndex}
		// 	</div>
		// );

		// return pageIndex; //aqui sin paréntesis porque es un solo elemento
		return (
			<div>
				<h1>soy APP</h1>
				<Filters />
				<List />

			</div>
		)

	}
}

export default App;

