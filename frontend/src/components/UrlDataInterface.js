import { useState, useEffect } from 'react';

import { TextField, IconButton, Box } from '@mui/material';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';

function UrlDataInterface({ confirmCallback, defaultItem }) {
	const [url, setUrl] = useState("");

	const handleConfirm = () => {
		confirmCallback({
			url, 
		}).then((res) => setUrl(""))
		.catch((err) => console.log(err));
	}

	const handleChangeText = (e) => {
		setUrl(e.target.value);
	}

	useEffect(() => {
		if(defaultItem?.url){
			setUrl(defaultItem.url)
		}
	}, [defaultItem]);

	return (
		<Box
			sx={{ alignItems: 'center', justifyContent: 'center' }}>
			<TextField
				label="Url"
				variant="outlined"
				value={url}
				onChange={handleChangeText} />
			<IconButton
				onClick={handleConfirm}>
				<ArrowForwardIcon />
			</IconButton>
		</Box>
	);
}

export default UrlDataInterface;
