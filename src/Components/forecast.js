import { Grid } from "@mui/material"
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Box from "@mui/material/Box";
import { WiDaySunny } from "react-icons/wi";
import {useState,useEffect} from 'react';
export default function Forecast(cast) {
    const dtTxt=cast.cast.dt_txt;
    
    const datePart = dtTxt.split(" ")[0];
    const tempmax=parseInt(cast.cast.main.temp_max)-273;
    const tempmin=parseInt(cast.cast.main.temp_min)-273;
    let image = cast.cast.weather[0].description;
    image = image + '.svg';
    const [imageSrc, setImageSrc] = useState();
    useEffect(() => {
        async function getImage() {
        //    const sunRise = convertUnixTimestamp(data.data.sys.sunrise);
        //    const sunSet = convertUnixTimestamp(data.data.sys.sunset);
        //    console.log(sunRise);
        //    console.log(sunSet);
        //    const time = getTimeInTimeZone(data.data.timezone);
        //    console.log(time);
        //    const alloc=((sunRise<=time)&&(time<=sunSet))?'Day':'Night';
           const { default: src } = await import(`../Design/Day/${image}`);
           setImageSrc(src);
           console.log(imageSrc);
        }
        getImage();
     }, [cast]);
    return (
            <Grid item xs={2.4}>
            <Paper elevation={10} sx={{marginBottom:6 ,bgcolor:"#b3b3cc" }}>
            <Box>
            <Typography sx={{padding:2,marginLeft:3,display:'block', marginLeft:5}} variant='h6' responsive='h3'>
            {datePart}
            </Typography>
            </Box>
            <Box sx={{padding:1,marginLeft:2.5}}>
                <img src={imageSrc}/>
            </Box>
            <Box>
            <Typography sx={{padding:1,marginLeft:6}} variant='h6' responsive='h3'>
            {cast.cast.weather[0].description}
            </Typography>
            </Box>
            <Box>
            <Typography sx={{paddingLeft:3,marginLeft:6}} variant='h6' responsive='h3'>
               {tempmin}°C/{tempmax}°C
            </Typography>
            </Box>
            </Paper>
            </Grid>
        
    )

}