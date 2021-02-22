import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'

import {navigate} from '@reach/router'
import CssBaseline from '@material-ui/core/CssBaseline';
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
  },

})

const Bookform = () => {
  const [name, setName] = useState('');
  const [filename, setFilename] = useState("noImage.png");
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [errors, setErrors] = useState([]);

  const submitData = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('upload', filename);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('url', url);
    axios.post('http://localhost:8000/api/createNewBook', formData)
      .then(res => console.log(res))
      .catch(err => {
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message)
        }
        // Set Errors
        setErrors(errorArr);
      })
    // .catch(err => setErrors("there is an error"))
  }
  const classes = useStyles();
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper} style={Shadow}>
          <Typography component="h1" variant="h5">
            Add Book
                    </Typography>
          <ThemeProvider theme={theme}>
            <form className={classes.form} noValidate onSubmit={submitData}>
              <Grid container spacing={2} >
                <Grid item xs={12} >
                  <TextField
                    id="name"
                    label="Book name"
                    autoComplete="Book name"
                    variant="outlined"
                    type="text"
                    name="name"
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
                Add Book
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

export default Bookform
