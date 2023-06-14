import { Grid } from "@mui/material"
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Box from "@mui/material/Box";
import { WiDaySunny } from "react-icons/wi";

export default function Forecast(cast) {
    const dtTxt=cast.cast.dt_txt;
    console.log(cast.cast);
    const datePart = dtTxt.split(" ")[0];
    const tempmax=parseInt(cast.cast.main.temp_max)-273;
    const tempmin=parseInt(cast.cast.main.temp_min)-273;
    return (
            <Grid item xs={2.4}>
            <Paper elevation={10} sx={{marginBottom:6 ,bgcolor:"#cfd8dc" }}>
            <Box>
            <Typography sx={{padding:2,marginLeft:3}} variant='h6' responsive='h3'>
            {datePart}
            </Typography>
            </Box>
            <Box sx={{fontSize: '6rem',padding:1,marginLeft:4}}>
                
            <WiDaySunny/>
            </Box>
            <Box>
            <Typography sx={{padding:1,marginLeft:6}} variant='h6' responsive='h3'>
            {cast.cast.weather[0].description}
            </Typography>
            </Box>
            <Box>
            <Typography sx={{padding:1,marginLeft:6}} variant='h6' responsive='h3'>
               {tempmin}°C/{tempmax}°C
            </Typography>
            </Box>
            </Paper>
            </Grid>
        
    )

}