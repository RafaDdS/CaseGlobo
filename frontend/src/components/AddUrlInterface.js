import { useState } from 'react';
import axios from "axios";

import { TextField, IconButton, Box } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

function AddUrlInterface({ addCalback }) {
	const [url, setUrl] = useState("");

	const handleAdd = () => {
		axios.post("/api/urls/", {
			url,
			created: new Date().toISOString(),
			lastModified: new Date().toISOString(),
		})
			.then((res) => {
				addCalback();
				setUrl("");
			})
			.catch((err) => console.log(err));
	}

	const handleChangeText = (e) => {
		setUrl(e.target.value);
	}

	return (
		<Box
			sx={{ alignItems: 'center', justifyContent: 'center' }}>
			<TextField
				label="Url"
				variant="outlined"
				value={url}
				onChange={handleChangeText} />
			<IconButton
				onClick={handleAdd}>
				<AddIcon />
			</IconButton>
		</Box>
	);
}

export default AddUrlInterface;
