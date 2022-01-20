import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import Country from "./components/Country";

class App extends Component {
	state = {};
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
							<Country />
						</Grid>
					</Grid>
				</Container>
			</div>
		);
	}
}

export default App;
