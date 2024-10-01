import { useState, useEffect } from 'react';
import axios from "axios";

import { List, ListItem, ListItemText, IconButton, Box } from '@mui/material';
import { DeleteForever as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import AddUrlInterface from './AddUrlInterface.js';

function UrlList() {
	const [urls, setUrls] = useState([]);

	const updateList = () => {
		axios.get(`/api/urls/`)
			.then((res) => setUrls(res.data))
			.catch((err) => console.log(err));
	}

	const handleUpdate = (item) => {
		axios.put(`/api/urls/${item.key}/`, {
			...item,
			url: "https://www.a.com",
			lastModified: new Date().toISOString(),
		})
			.then((res) => updateList());
	};

	const handleDelete = (key) => {
		axios.delete(`/api/urls/${key}/`)
			.then((res) => updateList());
	};

	useEffect(() => {
		updateList();
	}, []);

	return (<Box>
		<List>
			{urls.map((value) => (
				<ListItem
					key={value.key}
					disableGutters
					secondaryAction={
						<>
							<IconButton
								onClick={() => handleUpdate(value)}>
								<EditIcon />
							</IconButton>
							<IconButton
								onClick={() => handleDelete(value.key)}>
								<DeleteIcon />
							</IconButton>
						</>
					}
				>
					<ListItemText primary={value.url} />
				</ListItem>
			))}
		</List>
		<AddUrlInterface addCalback={updateList} />
	</Box>
	);
}

export default UrlList;
