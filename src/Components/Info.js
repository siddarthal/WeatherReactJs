import { Grid } from "@mui/material"
import { Typography, Paper, Box } from '@mui/material';
import Switch from '@mui/material/Switch';

export default function Information() {
    return (
        <Paper elevation={24} sx={{ marginTop: 5 }} >
            <Box sx={{ marginLeft: 50 }}>
            <Switch  defaultChecked />
            </Box>
            <Typography sx={{ padding: 1, marginLeft: 6 }} variant='h6' responsive='h3'>
                Feels Like 34 c
            </Typography>


        </Paper>
    );
}