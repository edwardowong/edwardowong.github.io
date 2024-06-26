import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import Container from "@mui/material/Container";


const AboutMeCard = () => {

    return (
        <Grid>
            <Grid container direction="column" justifyContent="center" alignItems="center" height='100vh'>
                <Grid item xs = {4}>
                    <Typography> Edward Wong </Typography>
                    <Typography> Welcome to my website! </Typography>
                </Grid>
                <Container style={{textAlign:"center"}}>
                    <Link href='https://github.com/edwardowong' target='_blank' rel='noopener'>
                        <GitHubIcon style={{fontSize: '60'}} sx={{color: '#6a2fa3', transition: 'color 0.25s', "&:hover":{color: '#ff8526'}}}/>
                    </Link>
                    <Link href='https://linkedin.com/in/edwardyhw' target='_blank' rel='noopener'>
                        <LinkedInIcon style={{fontSize: '60'}} sx={{ color: '#6a2fa3', transition: 'color 0.25s', "&:hover":{color: '#ff8526'}}}/>
                    </Link>
                    <Link href='mailto:edward.wong@live.ca' target='_blank' rel='noopener'>
                        <EmailIcon style={{fontSize: '60'}} sx={{ color: '#6a2fa3', transition: 'color 0.25s', "&:hover":{color: '#ff8526'}}}/>
                    </Link>
                </Container>
            </Grid>
        </Grid>
    )
};

export default AboutMeCard;