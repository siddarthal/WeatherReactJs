import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Temp from './Temp';
export default function Paperit() {
    return (
        <Paper elevation={24} sx={{ marginTop: 5 }} >
            <Box sx={{ padding: 2 }}>
                <Typography variant='h5' responsive='h3'>
                    Current Weather
                </Typography>
            </Box>
            
            <Box>
                <Temp />
            </Box>
            <Box sx={{ paddingLeft: 12,paddingBottom:3 }}>
                <Typography variant='h5' responsive='h5' >
                    Cloudy
                </Typography>
            </Box>
        </Paper>
    )
}