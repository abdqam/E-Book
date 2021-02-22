import React, { useState } from 'react'
import axios from 'axios'
import {navigate} from '@reach/router'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {grey} from "@material-ui/core/colors";



const Shadow = {
    backgroundColor: '#E6E6E6',
    border: "1px solid #7d2727",
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
        marginTop: theme.spacing(3),
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

const Register = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [rawError, setRawError] = useState('')


    const register = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', {
            firstName, lastName, email, password
        }, { withCredentials: true })
            .then(response => {props.registerdUser(response.data.user);navigate('/')})
            .catch(err => {
                const errorResponse = err.response.data.errors;
                console.log(err.response.data.errors)
                setRawError(err.response.data.errors)
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    };
    console.log(rawError)
    const classes = useStyles();
    return (
        <div>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper} style={Shadow}>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <ThemeProvider theme={theme}>
                    <form className={classes.form} noValidate onSubmit={register}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    onChange={(e) => setFirstName(e.target.value)}
                                    autoFocus
                                    error={rawError.firstName}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    onChange={(e) => setLastName(e.target.value)}
                                    autoComplete="lname"
                                    error={rawError.lastName}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    autoComplete="email"
                                    error={rawError.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoComplete="current-password"
                                    error={rawError.password}
                                />
                            </Grid>
                            <ul style={{ listStyle: "none", textAlign: "left" }}>{
                                errors.map((err, index) => <><li key={index} style={{ color: "red" }}>{err}</li></>)
                            }</ul>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={register}
                        >
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="/login" onClick={props.Registerd(true)} variant="body2"
                                    >Already have an account?
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                    </ThemeProvider>
                </div>
                <Box mt={5}>
            </Box>
            </Container>
        </div>);

}
export default Register