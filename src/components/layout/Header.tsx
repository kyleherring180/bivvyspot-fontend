import { AppBar, Box } from '@mui/material';

function Header() {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none', width: '100%' }}>
            <Box
                sx={{
                    height: 350,
                    backgroundImage: 'url("src/assets/images/alps.jpg")', // Replace with your background image path
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 10%',
                }}
            />
        </AppBar>
    );
}

export default Header;