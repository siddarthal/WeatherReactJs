import { Grid } from "@mui/material"
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Clearday from '../Design/animation-ready/clear-day.svg';
import Day from '../Design/namesmorning.js';
import Night from '../Design/namesevening.js';
import Img  from '../clear sky.svg';

export default function Temp({ data }) {
   let num = data.data.main.temp;
   let nu = parseInt(num);
   nu = nu - 273;
   let image=data.data.weather[0].description;
   image=image+'.svg';
   console.log(image);
   const requireImage = require(`../${image}`).default;
   return (
      <Grid container spacing={2}>

         <Grid item xs={5} >
            <Box sx={{ fontSize: '10rem', marginLeft: 7, marginTop: 5.4 }}>
               <img src={Img}/>
               
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