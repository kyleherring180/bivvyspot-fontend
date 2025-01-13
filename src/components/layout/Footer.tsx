import { Box, Typography } from '@mui/material';

function Footer() {
    const currentYear = new Date().getFullYear(); // Get the current year
    return (
        <Box
            sx={{
                backgroundColor: '#3f3f3f',
                color: 'white',
                textAlign: 'center',
                padding: 2,
                marginTop: 4,
            }}
        >
            <Typography variant="body2">
                © {currentYear} BivvySpot. All rights reserved.
            </Typography>
        </Box>
    );
}

export default Footer;
