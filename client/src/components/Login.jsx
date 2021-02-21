import React, { useState } from 'react'
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// const Login = (props) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [errors, setErrors] = useState("");
//     const login = (e) => {
//         e.preventDefault();
//         axios.post('http://localhost:8000/api/login', {
//             email, password
//         }, { withCredentials: true })
//             .then(response => { setErrors(""); props.loggedUser(response.data.user) })
//             .catch((err) => setErrors("Invalid Login"))
//     };
//     return (
//         <div>
//             <form onSubmit={login}>
//                 <small style={{ color: "red" }}>{errors}</small>
//                 <div><label>Email: <input type="text" onChange={(e) => setEmail(e.target.value)} /></label></div>
//                 <div><label>Password: <input type="password" onChange={(e) => setPassword(e.target.value)} /></label></div>
//                 <div><a onClick={(e) => props.Registerd(false)}><span style={{ color: "blue", textDecoration: "underline" }}>You Don't have an account?</span></a></div>
//                 <Button variant="contained" color="primary">Login</Button>
//             </form>
//         </div>
//     )
// }
// export default Login

const Shadow = {
    border: "1px solid steelblue",
    borderRadius: "5px",
    padding: "10%",
    boxShadow: "steelblue 0px 4px 20px 0px"
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
            .then(response => { setErrors(""); props.loggedUser(response.data.user) })
            .catch((err) => setErrors("Invalid Login"))
    };
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper} style={Shadow}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
        </Typography>
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
                            <Link href="/register" variant="body2" >
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
export default Login
