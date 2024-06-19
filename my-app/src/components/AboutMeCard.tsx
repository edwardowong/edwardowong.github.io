import React from 'react';
import { theme } from '../theme';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'


const AboutMeCard = () => {

    return (
        <Grid>
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <Grid item xs = {4}>
                    <Typography> Edward Wong </Typography>
                </Grid>
                <Grid sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 2 }}>
                    primary.main
                </Grid>

                <Grid style={{backgroundColor: "#FFFFFF"}}>
                    <Link href='https://github.com/edwardowong' target='_blank' rel='noopener'>
                        <GitHubIcon sx={{fontSize: '200', color: '#6a2fa3', transition: 'color 0.25s', "&:hover":{color: '#ff8526'}}}/>
                    </Link>
                    <Link href='https://linkedin.com/in/edwardyhw' target='_blank' rel='noopener'>
                        <LinkedInIcon sx={{fontSize: '200', color: '#6a2fa3', transition: 'color 0.25s', "&:hover":{color: '#ff8526'}}}/>
                    </Link>
                    <Link href='mailto:edward.wong@live.ca' target='_blank' rel='noopener'>
                        <EmailIcon sx={{fontSize: '200', color: '#6a2fa3', transition: 'color 0.25s', "&:hover":{color: '#ff8526'}}}/>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default AboutMeCard;