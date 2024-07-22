import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import Container from "@mui/material/Container";

import portrait from '../images/portrait.jpg'


const LandingCard = () => {

    return (
        <Grid>
            <Grid container spacing={2} alignItems="center" justifyContent="center" style={{ height: '100vh' }}>
                <Grid item xs={6} md={4}>
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                        <img src={portrait} alt='self-portrait' style={{maxWidth: '100%', height: 'auto' }} />
                    </Box>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center'}}>
                        <Grid>
                            <Typography> My name is Edward Wong </Typography>
                            <Typography> Welcome to my website! </Typography>
                            <Container style={{textAlign:"center"}}>
                                <Link href='https://github.com/edwardowong' target='_blank' rel='noopener'>
                                    <GitHubIcon style={{fontSize: '30'}} sx={{color: '#6a2fa3', transition: 'color 0.25s', "&:hover":{color: '#ff8526'}}}/>
                                </Link>
                                <Link href='https://linkedin.com/in/edwardyhw' target='_blank' rel='noopener'>
                                    <LinkedInIcon style={{fontSize: '30'}} sx={{ color: '#6a2fa3', transition: 'color 0.25s', "&:hover":{color: '#ff8526'}}}/>
                                </Link>
                                <Link href='mailto:edward.wong@live.ca' target='_blank' rel='noopener'>
                                    <EmailIcon style={{fontSize: '30'}} sx={{ color: '#6a2fa3', transition: 'color 0.25s', "&:hover":{color: '#ff8526'}}}/>
                                </Link>
                            </Container>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default LandingCard;