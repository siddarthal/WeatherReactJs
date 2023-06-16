
import Grid from '@mui/material/Grid';
import Paperit from './Paper';
import Information from './Info';
import { useEffect, useState } from 'react';

    const Temperature=({data},{time}) =>{
        return (
            
            <Grid container spacing={2} >
                <Grid item xs={6} >
                   <Paperit data={data} time={time}/>
                </Grid>
                <Grid item xs={6}>
                   <Information data={data}/>
                </Grid>
            </Grid>
        )
    }

export default Temperature;