import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import Country from "./components/Country";

class App extends Component {
	state = {
		countries: [
			{ id: 1, name: "United States", goldMedalCount: 3 },
			{ id: 2, name: "China", goldMedalCount: 2 },
			{ id: 3, name: "Germany", goldMedalCount: 1 },
		],
	};

	//methods

	//handle gold medal increment
	handleIncrement = country => {
		console.log("clicked", country.name);
		//duplicate the json 
		const countries = [...this.state.countries];
		//identify the country 
		const index = countries.indexOf(country);
		//duplicate country
		countries[index] = { ...country };
		//add 1 each time
		countries[index].goldMedalCount++;
		//set state
		this.setState({ countries: countries });
	};

	handleDecrement = country => {
		console.log("clicked", country.name);
		//duplicate the json 
		const countries = [...this.state.countries];
		//identify the country 
		const index = countries.indexOf(country);
		//duplicate country
		countries[index] = { ...country };
		//add 1 each time
		countries[index].goldMedalCount--;
		//set state
		this.setState({ countries: countries });
	};

	render() {
		return (
			<div className="App">
				<Container>
					<Grid
						container
						justify="center"
						direction="column"
						alignItems="center"
					>
						<Grid item>
							{this.state.countries.map(country => (
								<Country
									key={country.id}
									country={country}
									onIncrement={this.handleIncrement}
									onDecrement={this.handleDecrement}
								/>
							))}
						</Grid>
					</Grid>
				</Container>
			</div>
		);
	}
}

export default App;
