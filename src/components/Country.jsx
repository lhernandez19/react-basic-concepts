import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

class Country extends Component {
	state = {
		gold: 0,
		name: "USA",
	};

	handleIncrement = () => {
		let increment = this.state.gold + 1;
		this.setState({ gold: increment });
	};

	render() {
		return (
			<React.Fragment>
				<Card variant="outlined">
					<CardContent>
						<Typography gutterBottom variant="h3" color="error" align="center">
							{this.state.name}
						</Typography>
						<Typography variant="h5" align="center">
							Gold Medals: {this.state.gold}
						</Typography>
					</CardContent>
					<Stack alignItems="center">
						<IconButton
							onClick={this.handleIncrement}
							variant="contained"
							size="medium"
							color="primary"
							aria-label="add"
						>
							<AddIcon fontSize="large" />
						</IconButton>
					</Stack>
				</Card>
			</React.Fragment>
		);
	}
}

export default Country;
