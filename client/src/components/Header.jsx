import React from 'react';
import {Router,navigate} from '@reach/router'
import Link from '@material-ui/core/Link';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Root from './Root';
import logo from '../img/logo.png'

import SideMenu from './SideMenu'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    headerBackground: {
        backgroundColor: '#E6E6E6',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    logo: {
        width: '250px',
        height: '100px'
    },
    color:{
        color:'#545454',
        fontFamily: 'cursive',
        fontSize: 'small',
        fontWeight: '900',
    }
}));

export default function MenuAppBar(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.headerBackground}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <SideMenu/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    <Link href="/"><img src={logo} alt="asd" className={classes.logo} /></Link>
                    </Typography>
                    {props.user._id?
                    <Button className={classes.color} onClick={props.logout}>LogOut</Button>:
                    <Button className={classes.color} onClick={() => navigate('/login')}>Login</Button>}
                </Toolbar>
            </AppBar>
        </div>
    );
}
