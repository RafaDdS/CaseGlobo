import { useEffect } from 'react';
import axios from "axios";
import $ from "jquery";

import UrlList from './components/UrlList.js';

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

	useEffect(() => {
		axios.defaults.withXSRFToken = true
		axios.defaults.headers.common['X-CSRF-TOKEN'] = getCookie('csrftoken');
	}, []);

	return ( <UrlList /> );
}

export default App;
