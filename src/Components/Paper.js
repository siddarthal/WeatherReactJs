import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Temp from './Temp';
export default function Paperit() {
    return (
        <Paper elevation={24} sx={{ marginTop: 5,bgcolor:'#cfd8dc' } }  >
            <Box sx={{ padding: 2 }} >
                <Typography variant='h5' responsive='h3'>
                    Current Weather
                </Typography>
            </Box>
            <Box sx={{ marginLeft: 4}}>
                <Typography variant='h4' responsive='h5'>
                    Paris
                </Typography>
            </Box>
            <Box>
                <Temp />
            </Box>
            <Box sx={{ marginLeft: 12,paddingBottom:5 }}>
                <Typography variant='h5' responsive='h5' >
                    Cloudy
                </Typography>
            </Box>
        </Paper>
    )
}