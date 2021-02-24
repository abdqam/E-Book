import React, { useState } from 'react';
import Cookies from 'universal-cookie'
import Link from '@material-ui/core/Link';
import axios from "axios";
import Register from './Register';
import Login from './Login';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from '../img/logo.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: 'sticky',
        top: '0',
        zIndex: '1',

    },
    headerBackground: {
        backgroundColor: '#0a1c2e',
        position: "sticky",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    logo: {
        width: '180px',
        height: '60px',
        marginTop:"25px"
    },
    color: {
        color: '#545454',
        fontFamily: 'cursive',
        fontSize: 'small',
        fontWeight: '900',
        float: 'right'
    },
    menu: {
        display: 'flex',
        float: 'right'
    }
}));

export default function MenuAppBar(props) {
    const classes = useStyles();
    const [registerd, setRegisterd] = useState(false);
    const cookies = new Cookies();
    const logout = (e) => {
        e.preventDefault()
        axios
            .get("http://localhost:8000/api/logout", { withCredentials: true })
            .then(response => {
                setRegisterd(!registerd)
            })
            .catch((err) => console.log(err));
    };
    const Registerd = (val) => {
        setRegisterd(val)
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.headerBackground}>
                <Toolbar>
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <SideMenu/>
                    </IconButton> */}
                    <Link href="/"><img src={logo} alt="asd" className={classes.logo} /></Link>
                    <Typography variant="h6" className={classes.title}>
                        {!cookies.get("user")?
                            <div className={classes.menu}><Register Registerd={Registerd}/><Login Registerd={Registerd}/></div> :
                            <Button className={classes.color} onClick={logout} style={{color:"white"}}>Sign Out</Button>
                        }
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
