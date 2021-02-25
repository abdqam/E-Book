import React, { useState, useEffect } from 'react';
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
import { navigate } from '@reach/router';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: 'sticky',
        top: '0',
        zIndex: '1',
        justifyContent: "space-between"


    },
    headerBackground: {
        backgroundColor: '#0b0f12',
        position: "sticky",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        maxWidth: '200px'
    },
    menuItems: {
        justifyContent: "space-between"
    },
    menubar: {
        marginRight: '10%',
    },
    Items: {
        color: 'white',
        fontFamily: 'cursive',
        fontSize: 'small',
        fontWeight: '900',
        float: 'right',
        marginLeft: '65px',
    },
    home: {
        color: 'white',
        fontFamily: 'cursive',
        fontSize: 'small',
        fontWeight: '900',
        float: 'right',

    },
    logo: {
        width: '180px',
        height: '60px',
        marginTop: "25px"
    },
    color: {
        color: 'white',
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
    const [cats, setCats] = useState([])
    const cookies = new Cookies();
    useEffect(() => {
        axios.get('http://localhost:8000/api/getAllCategories')
            .then(res => setCats(res.data))
    }, [cats.length])
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
                <Toolbar className={classes.menuItems}>
                    <Link href="/"><img src={logo} alt="asd" className={classes.logo} /></Link>
                    <Typography variant="h6" className={classes.menubar}>
                        <Button className={classes.Items} onClick={() => navigate('/about-us')}>About Us</Button>
                        {
                            cats.map((cat, index) => <Button key={index} className={classes.Items} onClick={() => navigate(`/category/${cat.name}`)}>{cat.name}</Button>)
                        }
                        <Button className={classes.home} onClick={() => navigate('/')}>Home</Button>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        {!cookies.get("user") ?
                            <div className={classes.menu}><Register Registerd={Registerd} /><Login Registerd={Registerd} /></div> :
                            <Button className={classes.color} onClick={logout}>Sign Out</Button>
                        }
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}