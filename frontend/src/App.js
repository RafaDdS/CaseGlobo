import { TextField, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function App() {
	return (<>
		<TextField label="Url" variant="outlined" />
		<IconButton>
			<AddIcon />
		</IconButton>
	</>
	);
}

export default App;
