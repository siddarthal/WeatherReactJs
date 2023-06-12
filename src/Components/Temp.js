import { Grid } from "@mui/material"
import { WiSmoke ,WiCelsius} from "react-icons/wi";
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
export default function Temp(){
    return(
        <Grid container spacing={2}>
        
        <Grid item xs={4}>
        <Box sx={{padding:1,fontSize: '15rem'}}>
                <WiSmoke />
           </Box>
        </Grid>
        <Grid item xs={4}>
        <Box sx={{marginTop:7,marginLeft:"3rem"} }>
                <Typography variant='h1' responsive='h1'>
                    29 
                </Typography>
           </Box>
        
       
        </Grid>
        <Grid item xs={4}>
        <Box sx={{fontSize:'7rem',marginTop:4}}>
           <WiCelsius/>
        </Box>
        </Grid>

        </Grid>
    );
}