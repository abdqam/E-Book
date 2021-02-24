import React, { useState,useEffect } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'

import { navigate } from '@reach/router'
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { grey } from "@material-ui/core/colors";

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
    },

})
export default props => {
    const { id } = props;
    const [name, setName] = useState('');
    const [filename, setFilename] = useState("");
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [errors, setErrors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/books/' + id)
            .then(res => {
                setName(res.data.name);
                setFilename(res.data.image);
                setDescription(res.data.description);
                setUrl(res.data.url);

            })
    }, [])
    const updateBook = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('upload', filename);
        formData.append('name', name);
        formData.append('description', description);
        formData.append('url', url);
        axios.put('http://localhost:8000/api/books/' + id, formData)
            .then(res => navigate("/admin"));
    }
    const classes = useStyles();

    return (
        <div>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper} style={Shadow}>
                    <Typography component="h1" variant="h5">
                        Update Book
                    </Typography>
                    <ThemeProvider theme={theme}>
                        <form className={classes.form} noValidate onSubmit={updateBook} encType="multipart/form-data">
                            <Grid container spacing={2} >
                                <Grid item xs={12} >
                                    <TextField
                                        id="name"
                                        label="Book name"
                                        autoComplete="Book name"
                                        variant="outlined"
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <TextField
                                        id="book description"
                                        label="book description"
                                        autoComplete="book description"
                                        variant="outlined"
                                        type="text"
                                        name="description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="book URL"
                                        label="book URL"
                                        autoComplete="book URL"
                                        variant="outlined"
                                        type="text"
                                        name="url"
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="book image"
                                        label=""
                                        autoComplete="book image"
                                        variant="outlined"
                                        type="file"
                                        name="image"
                                        filename="upload"
                                        onChange={(e) => setFilename(e.target.files[0])}
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
                            >
                                Update Book
                        </Button>
                            <Grid container justify="flex-end">
                            </Grid>
                        </form>
                    </ThemeProvider>
                </div>
                <Box mt={5}>
                </Box>
            </Container>
            <div style={{ color: "red" }}> {errors.map((err, index) => <p key={index}>{err}</p>)}</div>
            {errors}
        </div>
    )
}