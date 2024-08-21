    import React from 'react'
    import AppBar from '@mui/material/AppBar';
    import Typography from '@mui/material/Typography';
    import Button from '@mui/material/Button';
    import Toolbar from '@mui/material/Toolbar';

    export default function Navbar() {
    return (

    <>
        <AppBar
            sx={{
                backgroundColor: 'yellow',
                width: '100%',
                height: '50px',
                justifyContent: 'space-between',

            }}>
            <Toolbar
                sx={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '40%',
                }}>
                <Typography
                    sx={{
                        marginRight: 160,
                        color: 'black',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginBottom: '10px',
                    }}>
                    Artifact
                </Typography>
                <Button variant="contained" size="small" 
                sx={{
                    marginBottom: '10px',
                    marginLeft: '-20px',
                    width: '200px',
                    backgroundColor: 'black',
                }}>
                    <Typography
                    sx={{
                        fontWeight: 'bold',
                    }}>
                        Login
                    </Typography>    
                </Button>
            </Toolbar>
        </AppBar>
    </>    


    )
    }
