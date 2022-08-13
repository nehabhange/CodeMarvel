import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

const names = ["Ideation", "Validation", "Early traction", "Scaling"];

function getStyles(name, personName, theme) {
	return {
		fontWeight:
			personName.indexOf(name) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	};
}

export default function Industry() {
	const theme = useTheme();
	const [personName, setPersonName] = React.useState([]);

	const handleChange = (event) => {
		const {
			target: { value },
		} = event;
		localStorage.setItem(
			"stage",
			JSON.stringify(typeof value === "string" ? value.split(",") : value)
		);

		setPersonName(
			// On autofill we get a stringified value.
			typeof value === "string" ? value.split(",") : value
		);
	};

	return (
		<div>
			<FormControl sx={{ marginBottom: 3, width: "100%" }}>
				<InputLabel id="demo-multiple-chip-label">Preffered Stage</InputLabel>
				<Select
					labelId="demo-multiple-chip-label"
					id="demo-multiple-chip"
					multiple={localStorage.getItem("type") === "STARTUP" ? false : true}
					value={personName}
					onChange={handleChange}
					input={
						<OutlinedInput id="select-multiple-chip" label="Preffered Stage" />
					}
					renderValue={(selected) => (
						<Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
							{selected.map((value) => (
								<Chip key={value} label={value} />
							))}
						</Box>
					)}
					MenuProps={MenuProps}
				>
					{names.map((name) => (
						<MenuItem
							key={name}
							value={name}
							style={getStyles(name, personName, theme)}
						>
							{name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}
