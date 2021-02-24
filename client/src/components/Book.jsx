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
          flexWrap: 'wrap',
          '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
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
      <Paper elevation={0} />
      <h2>Book Details</h2>
            <p>Name: {book.name}</p>
            <p>Image: {book.image}</p>
            <p>Description: {book.description}</p>
            <p>Book URL: {book.url}</p>
            <p>{book.image}</p>
            <img src={`../img/${book.image}`} alt={book.image}></img>
      <Paper />
      <Paper elevation={1} />
    </div>
    )
}

