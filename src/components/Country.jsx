import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

class Country extends Component {
	render() {
		//object dec
		const { country, onIncrement, onDecrement } = this.props;

		return (
			<React.Fragment>
				<Card variant="outlined" sx={{ m: 2 }}>
					<CardContent>
						<Typography gutterBottom variant="h3" color="error" align="center">
							{country.name}
						</Typography>
						<Typography variant="h5" align="center">
							Gold Medals: {country.goldMedalCount}
						</Typography>
					</CardContent>
					<Stack alignItems="center">
						<IconButton
							onClick={() => onIncrement(country)}
							variant="contained"
							size="medium"
							color="primary"
							aria-label="add"
						>
							<AddCircleOutlineIcon fontSize="large" />
						</IconButton>
						<IconButton
							onClick={() => onDecrement(country)}
							variant="contained"
							size="medium"
							color="primary"
							aria-label="remove"
							disabled={!country.goldMedalCount}
						>
							<RemoveCircleOutlineIcon fontSize="large" />
						</IconButton>
					</Stack>
				</Card>
			</React.Fragment>
		);
	}
}

export default Country;
