
import Grid from '@mui/material/Grid';
import Paperit from './Paper';
import Information from './Info';
    const Temperature=() =>{
        return (
            <Grid container spacing={2}>
                <Grid item xs={6}>
                   <Paperit/>
                </Grid>
                <Grid item xs={6}>
               
                   <Information/>

                </Grid>
            </Grid>
        )
    }

export default Temperature;