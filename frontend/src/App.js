import { useEffect } from 'react';
import axios from "axios";
import $ from "jquery";

import UrlList from './components/UrlList.js';
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Typography, } from '@mui/material';

function App() {
	const getCookie = (name) => {
		var cookieValue = null;
		if (document.cookie && document.cookie !== '') {
			var cookies = document.cookie.split(';');
			for (var i = 0; i < cookies.length; i++) {
				var cookie = $.trim(cookies[i]);
				if (cookie.substring(0, name.length + 1) === (name + '=')) {
					cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
					break;
				}
			}
		}
		return cookieValue;
	}

	const theme = createTheme({
		palette: {
			background: {
				default: "#e4f0e2"
			}
		}
	});

	useEffect(() => {
		axios.defaults.withXSRFToken = true
		axios.defaults.headers.common['X-CSRF-TOKEN'] = getCookie('csrftoken');
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Typography variant="h2" component="h2">
				Links do YouTube
			</Typography>
			<UrlList />
		</ThemeProvider>
	);
}

export default App;
