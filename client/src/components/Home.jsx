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
    return (
        <div>
            {loaded && <Page books={books} />}
        </div>
    )
}