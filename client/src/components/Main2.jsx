import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Page from './page/Page';
export default () => {
    const [books, setBooks] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/getAllBooks')
            .then(res => {
                setBooks(res.data);
                setLoaded(true);
            });
    }, [])
    const removeFromDom = bookId => {
        setBooks(books.filter(book => book._id != bookId));
    }

    return (
        <div style={{ backgroundColor: "#fafafa", }}>


            {loaded && <Page books={books} />}
        </div>
    )
}