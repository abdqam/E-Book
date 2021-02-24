import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

export default props => {
    const [book, setBook] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/books/" + props.id)
            .then(res => setBook(res.data))
    }, [])
    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          textAlign:'left',
          flexWrap: 'wrap',
          '& > *': {
            // margin: theme.spacing(1),
            width: theme.spacing(100),
            height: theme.spacing(120),
          },
        },
      }));
    const classes = useStyles();
    return (
        // <div>
        //     <h2>Book Details</h2>
        //     <p>Name: {book.name}</p>
        //     <p>Image: {book.image}</p>
        //     <p>Description: {book.description}</p>
        //     <p>Book URL: {book.url}</p>
        //     <p>{book.image}</p>
        //     <img src={`../img/${book.image}`} alt={book.image}></img>
        // </div>
        <div className={classes.root}>
      <Paper style={{margin:"20px 30% 0px",padding:"45px",backgroundColor:"#636b75",color:"white",fontFamily: 'Comfortaa, cursive'}} elevation={0} >
      <h2 style={{textAlign:"center"}}>Book Details</h2>
            <p><b>Name:</b> {book.name}</p>
            <p><b>Image:</b> {book.image}</p>
            <p><b>Description:</b> {book.description}</p>
            <p><b>Book URL:</b> {book.url}</p>
            <p>{book.image}</p>
            <img src={`../img/${book.image}`} alt={book.image}></img></Paper>
      {/* <Paper />
      <Paper elevation={1} /> */}
    </div>
    )
}

