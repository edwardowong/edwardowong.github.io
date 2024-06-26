import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button';
import LightModeIcon from '@mui/icons-material/LightMode';
import Grid from "@mui/material/Grid";

const pages = ['About Me', 'Work', 'Projects', 'Interests'];

function NavBar(){
    const [anchorElNav, setAnchorElNav] = React.useState<null|HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="static" sx={{ bgcolor:"dark"}}>
            <Grid container>
                <Grid xs={1} />
                <Grid xs={10} style={{textAlign:"center"}}>
                {pages.map((page) => (
                    <Button
                        key={page}
                        onClick={handleCloseNavMenu}
                    >
                        {page}
                    </Button>
                ))}
                </Grid>
                <Grid xs={1} style={{textAlign:"center"}}>
                    <LightModeIcon />
                </Grid>
            </Grid>


        </AppBar>
    );
}
export default NavBar;