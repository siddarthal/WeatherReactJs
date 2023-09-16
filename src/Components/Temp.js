import { Grid } from "@mui/material"
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import { useEffect, useState } from "react";
export default function Temp({ data }) {
   let num = data.data.main.temp;
   let nu = parseInt(num);
   nu = nu - 273;
   let image = data.data.weather[0].description;
   image = image + '.svg';
   const [imageSrc, setImageSrc] = useState();

   useEffect(() => {
      async function getImage() {
         const sunRise = convertUnixTimestamp(data.data.sys.sunrise);
         const sunSet = convertUnixTimestamp(data.data.sys.sunset);
         console.log(sunRise);
         console.log(sunSet);
         const time = getTimeInTimeZone(data.data.timezone);
         console.log(time);
         const alloc=((sunRise<=time)&&(time<=sunSet))?'Day':'Night';
         const { default: src } = await import(`../Design/${alloc}/${image}`);
         setImageSrc(src);
         console.log(imageSrc);
      }
      getImage();
   }, [data]);
   function getTimeInTimeZone(offset) {
      var now = new Date();
      var timeZoneOffsetMs = offset * 1000; // Convert offset to milliseconds
      var timeZoneDate = new Date(now.getTime() + timeZoneOffsetMs);
      var hours = timeZoneDate.getUTCHours();    
      return hours;
    
   }
   function convertUnixTimestamp(timestamp) {
      var date = new Date(timestamp * 1000);
    
      var hours = date.getHours();
   
      return hours;
    }
    
   return (
      <Grid container spacing={2}>
         <Grid item xs={5} >
            <Box sx={{ fontSize: '10rem', marginLeft: 7, marginTop: 5.4 }}>
               <img src={imageSrc} />
            </Box>
         </Grid>
         <Grid item xs={4}>
            <Box sx={{ marginTop: 9 }}>
               <Typography variant='h1' responsive='h1'>
                  {nu} °
               </Typography>
            </Box>
         </Grid>
      </Grid>
   );
}