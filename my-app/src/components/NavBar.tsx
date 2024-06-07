import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const pages = ['Home', 'About Me', 'Work', 'Projects', 'Interests'];

function NavBar(){
    const [anchorElNav, setAnchorElNav] = React.useState<null|HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="static" sx={{ bgcolor:"white"}}>
            <Container maxWidth="xs">
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>
            </Container>
        </AppBar>
    );
}
export default NavBar;