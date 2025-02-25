import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import AccountMenu from "./AccountMenu";
import {useAppSelector} from "../../hooks";
import {isAuthenticated} from "../auth/utils";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

function ResponsiveAppBar() {
    let auth = useAppSelector(state => state.auth);

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        5+2=5
                    </Typography>
                    {isAuthenticated(auth) ?
                        <AccountMenu/> :
                        <Link to="/login">
                            <Button color="inherit">Login</Button>
                        </Link>

                    }


                </Toolbar>
            </AppBar>
        </Box>
    );
}


export default ResponsiveAppBar;
