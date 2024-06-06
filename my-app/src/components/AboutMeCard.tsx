import React from 'react';
import Grid from '@mui/material/Grid';


const AboutMeCard = () => {

    return (
        <Grid>
            <Grid container direction = 'column'>
                <p> test1 </p>
                <Grid container direction = 'row'>
                <p> test2 </p>
                </Grid>
                <p> test3 </p>
            </Grid>
        </Grid>
    )
};

export default AboutMeCard;