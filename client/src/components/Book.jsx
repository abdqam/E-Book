import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default props => {
    const [book, setBook] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/books/" + props.id)
            .then(res => setBook(res.data))
    }, [])

    return (
        <div>
            <h2>Book Details</h2>
            <p>Name: {book.name}</p>
            <p>Image: {book.image}</p>
            <p>Description: {book.description}</p>
            <p>Book URL: {book.url}</p>
            <p>{book.image}</p>
            <img src={`../img/${book.image}`} alt={book.image}></img>
        </div>
    )
}