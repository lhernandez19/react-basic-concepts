import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Country from "./components/Country";
import Typography from "@mui/material/Typography";
import "./App.css";

class App extends Component {
	state = {
		countries: [
			{ id: 1, name: "United States", goldMedalCount: 3 },
			{ id: 2, name: "China", goldMedalCount: 2 },
			{ id: 3, name: "Nicaragua", goldMedalCount: 1 },
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
					<Typography gutterBottom variant="h2" color="primary" align="center">
						React More Basic Concepts - Assignment
					</Typography>
					<Grid container spacing={3} sx={{ my: 2 }}>
						{this.state.countries.map(country => (
							<Grid item xs={12} md={6} lg={4} key={country.id}>
								<Country
									country={country}
									onIncrement={this.handleIncrement}
									onDecrement={this.handleDecrement}
								/>
							</Grid>
						))}
					</Grid>
				</Container>
			</div>
		);
	}
}

export default App;
