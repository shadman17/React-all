import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Navbar = () => {
    return <div className='navbar'>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{background: '#000'}}>
                <Toolbar variant="dense">
                    <Typography variant="h6" color="#fff" component="div" sx={{ p: 3 }}>
                        <Link href="#" underline="none" color="inherit">
                            Home
                        </Link>
                    </Typography>
                    <Typography variant="h6" color="#fff" component="div" sx={{ p: 3 }}>
                        <Link href="#" underline="none" color="inherit">
                            About Me
                        </Link>
                    </Typography>
                    <Typography variant="h6" color="#fff" component="div" sx={{ p: 3 }}>
                        <Link href="#" underline="none" color="inherit">
                            Project Portfolio
                        </Link>
                    </Typography>
                    <Typography variant="h6" color="#fff" component="div" sx={{ p: 3 }}>
                        <Link href="#" underline="none" color="inherit">
                            Experience
                        </Link>
                    </Typography>
                    <Typography variant="h6" color="#fff" component="div" sx={{ p: 3 }}>
                    <Link href="#" underline="none" color="inherit">
                        Contact
                    </Link>
                </Typography>
                </Toolbar>
            </AppBar>
        </Box>

    </div>

}

export default Navbar;