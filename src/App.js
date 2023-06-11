import './App.css';
import SearchAppBar from './Components/Appbar';
import Temperature from './Components/Temperature';
import Container from '@mui/material/Container';
import Forecast from './Components/forecast';
import { Typography,Box } from '@mui/material';

function App() {
  return (
    <>
      <SearchAppBar />
      <Container>
        <Temperature />
        <Box sx={{marginTop:3}}>
          <Typography>
            Extended Forecast
          </Typography>
        </Box>
        <Forecast/>
      </Container>
    </>
  );
}

export default App;
