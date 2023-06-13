import { Grid } from "@mui/material"
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Box from "@mui/material/Box";
import { WiDaySunny } from "react-icons/wi";

export default function Forecast() {
    return (
            <Grid item xs={2}>
            <Paper elevation={10} sx={{marginBottom:6 ,bgcolor:"#cfd8dc" }}>
            <Box>
            <Typography sx={{padding:1,marginLeft:6}} variant='h6' responsive='h3'>
               Sat 
            </Typography>
            </Box>
            <Box sx={{fontSize: '6rem',padding:1,marginLeft:3}}>
                
            <WiDaySunny/>
            </Box>
            <Box>
            <Typography sx={{padding:1,marginLeft:6}} variant='h6' responsive='h3'>
            Clear
            </Typography>
            </Box>
            <Box>
            <Typography sx={{padding:1,marginLeft:6}} variant='h6' responsive='h3'>
                26/29
            </Typography>
            </Box>
            </Paper>
            </Grid>
        
    )

}