import { Grid } from "@mui/material"
import { Typography, Paper, Box } from '@mui/material';
import Switch from '@mui/material/Switch';
import { WiDirectionDown, WiDirectionUp,WiWindBeaufort0,WiBarometer ,WiRaindrop} from "react-icons/wi";

export default function Information() {
    return (
        <Paper elevation={24} sx={{ marginTop: 5 }} >
            <Box sx={{ marginLeft: 50, paddingTop: 5 }}>
                <Switch defaultChecked />
            </Box>
            <Box>
                <Typography sx={{ padding: 2.1, marginLeft: 6 }} variant='h6' responsive='h3'>
                    Feels Like 34℃
                </Typography>
            </Box>
            <Box >
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Box sx={{ marginLeft: 6, fontSize: '2.5rem' }}>
                            <WiDirectionUp />
                        </Box>

                    </Grid>
                    <Grid item xs={1}>
                        <Box sx={{ marginTop: 0.4 }}>
                            <Typography variant="h5" responsive='h3'>
                                39℃
                            </Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={2}>
                        <Box sx={{ marginLeft: 6, fontSize: '3.6rem' }}>
                            <WiDirectionDown />
                        </Box>

                    </Grid>
                    <Grid item xs={1}>
                        <Box sx={{ marginBottom:1 }}>
                            <Typography variant="h5" responsive='h3'>
                                39℃
                            </Typography>
                        </Box>

                    </Grid>

                </Grid>
            </Box>
            <Box>



            </Box>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Box sx={{ marginLeft: 6, fontSize: '3.6rem' }}>
                        < WiWindBeaufort0 />
                    </Box>

                </Grid>
                <Grid item xs={3}>
                <Box sx={{ marginLeft:2.4,marginTop:1}}>
                    <Typography variant="h5" responsive='h3'>
                                Windy
                            </Typography>
                    </Box>

                </Grid >
                <Grid item xs={3}>
                    <Box sx={{ marginLeft:2.6,marginTop:1}}>
                    <Typography variant="h5" responsive='h3'>
                                23kph
                            </Typography>
                    </Box>

                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Box sx={{ marginLeft: 6, fontSize: '3.6rem' }}>
                        < WiBarometer />
                    </Box>

                </Grid>
                <Grid item xs={3}>
                <Box sx={{ marginLeft:3,marginTop:1}}>
                    <Typography variant="h5" responsive='h3'>
                                Pressure
                            </Typography>
                    </Box>

                </Grid >
                <Grid item xs={3}>
                    <Box sx={{ marginLeft:3,marginTop:1}}>
                    <Typography variant="h5" responsive='h3'>
                                33Bar
                            </Typography>
                    </Box>

                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Box sx={{ marginLeft: 6, fontSize: '3.6rem' }}>
                        < WiRaindrop />
                    </Box>

                </Grid>
                <Grid item xs={3}>
                <Box sx={{ marginLeft:3,marginTop:1}}>
                    <Typography variant="h5" responsive='h3'>
                                Humidity
                            </Typography>
                    </Box>

                </Grid >
                <Grid item xs={3}>
                    <Box sx={{ marginLeft:3,marginTop:1}}>
                    <Typography variant="h5" responsive='h3'>
                                33%
                            </Typography>
                    </Box>

                </Grid>
            </Grid>
            
            
        </Paper >
    );
}