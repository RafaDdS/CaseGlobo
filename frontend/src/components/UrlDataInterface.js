import { useState, useEffect } from 'react';

import { TextField, IconButton, Box, Typography } from '@mui/material';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';

function UrlDataInterface({ confirmCallback, defaultItem }) {
	const [url, setUrl] = useState("");
	const [invalidUrlError, SetInvalidUrlError] = useState(false);

	const handleConfirm = () => {
		SetInvalidUrlError(false);
		confirmCallback({
			url, 
		}).then((res) => setUrl(""))
		.catch((err) => SetInvalidUrlError(true));
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
			{invalidUrlError ?
			<Typography variant="body2" component="h3" color="error">
				Erro: Url inválido. Tente copiar diretamente dá página.
			</Typography> :
			null}
		</Box>
	);
}

export default UrlDataInterface;
