import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'


import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { grey } from "@material-ui/core/colors";

const Shadow = {
  backgroundColor: '#fff',
  // border: "1px solid #7d2727",
  borderRadius: "5px",
  padding: "10%",
  // boxShadow: "#fff 0px 4px 20px 0px"
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
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

const Bookform = (props) => {
  const [name, setName] = useState('');
  const [filename, setFilename] = useState("noImage.png");
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [errors, setErrors] = useState([]);
  const [category, setCategory] = useState('English');
  const [allCategories, setAllCategories] = useState('English');
  const [loaded,setLoaded] = useState(false);

useEffect(() => {
axios.get('http://localhost:8000/api/getAllCategories')
.then(res=>{setAllCategories(res.data);setLoaded(true);})
},[])

  const submitData = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('upload', filename);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('url', url);
    formData.append('category', category);
    axios.post('http://localhost:8000/api/createNewBook', formData)
      .then(res => props.bookAdded(res.data))
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
    <div >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper} style={Shadow}>
          <Typography component="h1" variant="h5">
            Add Book
                    </Typography>
          <ThemeProvider theme={theme}>
            <form className={classes.form} noValidate onSubmit={submitData} encType="multipart/form-data">
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
                {name.length ?
                  <div>{(name.length) < 3 ? <small style={{ color: "red" }}>Name should be atleast 2 char</small> : <small></small>}</div> : ""}
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
                {description.length ?
                  <div>{(description.length) < 10 ? <small style={{ color: "red" }}>Name should be atleast 2 char</small> : <small></small>}</div> : ""}
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
                {url.length ?
                  <div>{(url.length) < 2 ? <small style={{ color: "red" }}>URL is required</small> : <small></small>}</div> : ""}
                <Grid item xs={12}>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="Category-select">Category</InputLabel>
                  <Select defaultValue="" id="Category-select" onChange={(e) => setCategory(e.target.value)}>
                    {loaded && allCategories.map((cat,index) =><MenuItem key={index} value={cat.name}>{cat.name}</MenuItem>)}
                  </Select>
                  </FormControl>
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