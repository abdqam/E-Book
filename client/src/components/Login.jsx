import React, { useState } from 'react'
import {navigate} from '@reach/router'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles,ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {grey} from "@material-ui/core/colors";

const Shadow = {
    backgroundColor: '#E6E6E6',
    border: "1px solid steelblue",
    borderRadius: "5px",
    padding: "10%",
    boxShadow: "#620000 0px 4px 20px 0px"
}
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
const theme = createMuiTheme({
    palette: {
        primary: {
            main: grey[800],
        },
        secondary: {
            main: grey[800],
        }
    }

})

const Login = (props) => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState("");
        const login = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', {
            email, password
        }, { withCredentials: true })
            .then(response => { setErrors(""); props.loggedUser(response.data.user);navigate('/') })
            .catch((err) => setErrors("Invalid Login"))
    };
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper} style={Shadow}>
                <Typography component="h1" variant="h5">
                    Sign in
        </Typography>
        <ThemeProvider theme={theme}>
                <form className={classes.form} noValidate onSubmit={login}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(e) => setEmail(e.target.value)}
                        error={errors}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                        error={errors}
                    />
                    <div style={{ color: "red" }}>{errors}</div>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="/register" onClick={props.Registerd(false)} variant="body2" >
                                Don't have an account? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </form>
                </ThemeProvider>
            </div>
            <Box mt={5}>
            </Box>
        </Container>
    );
}
export default Login
