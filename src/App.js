import './App.css';
import Temperature from './Components/Temperature';
import Container from '@mui/material/Container';
import Forecast from './Components/forecast';
import { Typography, Box, Grid, CircularProgress } from '@mui/material';
import { useState, useEffect } from 'react';
import Siddartha from './Components/Trial';
// import Logo from './download.jpeg';

const App = () => {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [forecast, setForecast] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Box sx={{ bgcolor: '#white', }}>

        <Container >
          <Box sx={{ paddingTop: 9 }} >
            <Grid container spacing={1}>
              <Siddartha setData={setData} setForecast={setForecast} />
            </Grid>

          </Box>
        </Container>

        <Box >

          <Box sx={{ marginTop: 3 }}>
            <Container>
              {isLoading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                  <CircularProgress />
                </Box>
              ) : (
                <>
                  <Temperature data={data} />
                  <Box sx={{ marginTop: 3 }}>
                    <Typography>
                      Extended Forecast
                    </Typography>
                  </Box>
                  <Grid container spacing={1} sx={{ marginTop: 2 }}>
                    {forecast.data.list.map((cast, index) => (
                      (index + 1) % 8 === 0 && <Forecast key={index} cast={cast} />
                    ))}
                  </Grid>
                </>
              )}
            </Container>
          </Box>
        </Box>



      </Box>

    </>
  );
}

export default App;
