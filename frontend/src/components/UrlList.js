import { useState, useEffect } from 'react';
import axios from "axios";

import {
	List,
	ListItem,
	ListItemText,
	IconButton,
	Box,
	Dialog,
	DialogTitle,
	DialogContent,
	Typography,
} from '@mui/material';
import {
	DeleteForever as DeleteIcon,
	Edit as EditIcon,
	PlayArrow as PlayIcon,
} from '@mui/icons-material';
import UrlDataInterface from './UrlDataInterface.js';
import YouTube from 'react-youtube';


function UrlList() {
	const [urls, setUrls] = useState([]);
	const [openModal, setOpenModal] = useState(false);
	const [editingKey, setEditingKey] = useState(-1);
	const [videoId, setVideoId] = useState("");

	const updateList = () => {
		axios.get(`/api/urls/`)
			.then((res) => setUrls(res.data))
			.catch((err) => console.log(err));
	}

	const handleAdd = async (item) => {
		return axios.post("/api/urls/", {
			...item,
			created: new Date().toISOString(),
			lastModified: new Date().toISOString(),
		}).then((res) => updateList());
	}

	const handleUpdate = async (item) => {
		return axios.put(`/api/urls/${editingKey}/`, {
			...item,
			created: urls.find(item => item.key === editingKey)?.created,
			lastModified: new Date().toISOString(),
		})
			.then((res) => {
				updateList();
				handleCloseModal();
			});
	};

	const handleDelete = (key) => {
		axios.delete(`/api/urls/${key}/`)
			.then((res) => updateList());
	};

	const handleOpenModal = (key) => {
		setOpenModal(true);
		setEditingKey(key);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
		setEditingKey(-1);
	};

	const handleOpenVideo = (link) => {
		var regex = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]{11}).*/;
		var match = link.match(regex);

		if (match && match[7]) {
			setVideoId(match[7]);
		}
	};

	useEffect(() => {
		updateList();
	}, []);

	return (<Box
		sx={{
			borderRadius: 1,
			bgcolor: "#d4e0d2",
		}}>
		<Dialog
			open={openModal}
			onClose={handleCloseModal}
			aria-labelledby="edditing-modal"
			aria-modal="true"
		>
			<DialogTitle sx={{ m: 0, p: 2 }}>
				Editar
			</DialogTitle>
			<DialogContent dividers>
				<UrlDataInterface
					confirmCallback={handleUpdate}
					defaultItem={urls.find(item => item.key === editingKey)} />
			</DialogContent>
		</Dialog>
		{videoId ?
			<YouTube
				videoId={videoId}
				opts={{
					height: '390',
					width: '640',
					playerVars: {
						autoplay: 1,
					}
				}} /> : null}
		{urls.length > 0 ?
			<List>
				{urls.map((value) => (
					<ListItem
						key={value.key}
						disableGutters
						secondaryAction={
							<>
								<IconButton
									onClick={() => handleOpenVideo(value.url)}>
									<PlayIcon />
								</IconButton>
								<IconButton
									onClick={() => handleOpenModal(value.key)}>
									<EditIcon />
								</IconButton>
								<IconButton
									onClick={() => handleDelete(value.key)}>
									<DeleteIcon />
								</IconButton>
							</>
						}
					>
						<ListItemText primary={
							<Typography variant="body1" component="h2">
								{value.url}
							</Typography>} />
					</ListItem>
				))}
			</List> :
			<Typography variant="h5" component="h3">
				A sua lista de links está vazia! Vamos começar a adicionar
			</Typography>
		}
		<UrlDataInterface
			confirmCallback={handleAdd} />
	</Box>
	);
}

export default UrlList;
