import { Grid } from "@mui/material"
import { Typography, Paper, Box } from '@mui/material';
import Switch from '@mui/material/Switch';
import Windsock from '../Design/animation-ready/windsock.svg';
import High from '../Design/animation-ready/pressure-high.svg';
import Low from '../Design/animation-ready/pressure-low.svg';

import { WiDirectionDown, WiDirectionUp,WiWindBeaufort0,WiBarometer ,WiRaindrop, WiHumidity} from "react-icons/wi";
export default function Information({data}) {
    let nu = parseInt(data.data.main.feels_like);
    let numb=parseInt(data.data.main.temp_max);
    let numbu=parseInt(data.data.main.temp_min);
    let feels_like=nu-273;
    let temp_max=numb-273;
    let temp_min=numbu-273;
    return (
        <Paper elevation={24} sx={{ marginTop: 5,bgcolor:'#b3b3cc' }} >
            <Box sx={{ marginLeft: 50, paddingTop: 5 }}>
                <Switch defaultChecked />
            </Box>
            <Box>
                <Typography sx={{ padding: 2.1, marginLeft: 6 }} variant='h6' responsive='h3'>
                    Feels Like {feels_like }°C
                </Typography>
            </Box>
            <Box >
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Box sx={{fontSize: '2.5rem' }}>
                        <img src={High}/>
                        </Box>

                    </Grid>
                    <Grid item xs={2}>
                        <Box sx={{ paddingTop:'1.25rem' }}>
                            <Typography variant="h5" responsive='h3'>
                                {temp_max}°C
                            </Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={2}>
                        <Box sx={{  fontSize: '1rem' }}>
                        <img src={Low}/>
                        </Box>

                    </Grid>
                    <Grid item xs={2}>
                        <Box sx={{ paddingTop:'1.25rem' }}>
                            <Typography variant="h5" responsive='h3'>
                            {temp_min}°C
                            </Typography>
                        </Box>

                    </Grid>

                </Grid>
            </Box>
            <Box>



            </Box>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Box sx={{ marginLeft: 6, fontSize: '3.6rem' }}>
                        <img src={Windsock}/>
                    </Box>

                </Grid>
                <Grid item xs={3}>
                <Box sx={{ marginLeft:3.1,marginTop:2}}>
                    <Typography variant="h5" responsive='h3'>
                                Wind 
                            </Typography>
                    </Box>

                </Grid >
                <Grid item xs={3}>
                    <Box sx={{ marginLeft:2.9,marginTop:2}}>
                    <Typography variant="h5" responsive='h3'>
                            {data.data.wind.speed}Kmph
                            </Typography>
                    </Box>

                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Box sx={{ marginLeft: 6, fontSize: '3.6rem' }}>
                        < WiBarometer />
                    </Box>

                </Grid>
                <Grid item xs={3}>
                <Box sx={{ marginLeft:3,marginTop:1}}>
                    <Typography variant="h5" responsive='h3'>
                                Pressure
                            </Typography>
                    </Box>

                </Grid >
                <Grid item xs={3}>
                    <Box sx={{ marginLeft:3,marginTop:1}}>
                    <Typography variant="h5" responsive='h3'>
                                {data.data.main.pressure} Pa
                            </Typography>
                    </Box>

                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Box sx={{ marginLeft: 6, fontSize: '3.6rem' }}>
                        < WiRaindrop />
                    </Box>

                </Grid>
                <Grid item xs={3}>
                <Box sx={{ marginLeft:3,marginTop:1}}>
                    <Typography variant="h5" responsive='h3'>
                                Humidity
                            </Typography>
                    </Box>

                </Grid >
                <Grid item xs={3}>
                    <Box sx={{ marginLeft:3,marginTop:1}}>
                    <Typography variant="h5" responsive='h3'>
                                {data.data.main.humidity}%
                            </Typography>
                    </Box>

                </Grid>
            </Grid>
            
            
        </Paper >
    );
}