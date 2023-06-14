import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Temp from './Temp';
export default function Paperit({data}) {
    return (
        <Paper elevation={24} sx={{ marginTop: 5,bgcolor:'#cfd8dc' } }  >
            <Box sx={{ padding: 2 }} >
                <Typography variant='h5' responsive='h3'>
                    Current Weather
                </Typography>
            </Box>
            <Box sx={{ marginLeft: 4}}>
                <Typography variant='h4' responsive='h5'>
                    {data.data.name}
                </Typography>
            </Box>
            <Box>
                <Temp data={data}/>
            </Box>
            <Box sx={{ marginLeft: 12,paddingBottom:5 }}>
                <Typography variant='h5' responsive='h5' >
                    {data.data.weather[0].main}
                </Typography>
                <Typography variant='h7' responsive='h7' >
                    {data.data.weather[0].description}
                </Typography>
            </Box>
        </Paper>
    )
}