import React from 'react';
import { styles } from '../styles/aboutMeCard';
import {makeStyles} from "@mui/styles";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'

const useStyle = makeStyles(styles);

const AboutMeCard = () => {
    const classes = useStyle()

    return (
        <Grid>
            <Grid className ={classes.page} container spacing={0} direction="column" alignItems="center" justifyContent="center" sx={{minHeight: '100vh'}}>
                <Grid justifyContent="center" container spacing={3}>
                    <Grid item xs={1}>
                        <Link href='https://github.com/edwardowong' target='_blank' rel='noopener'>
                            <GitHubIcon className={classes.icons}/>
                        </Link>
                    </Grid>
                    <Grid item xs={1}>
                        <Typography> x </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Typography> x </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Typography> x </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default AboutMeCard;