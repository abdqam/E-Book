import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Page from './page/Page';
export default (props) => {
    const [books, setBooks] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/catbooks/'+props.name)
            .then(res => {
                setBooks(res.data.books);
                setLoaded(true);
            });
    }, [props.name])
    return (
        <div>
            {loaded && <Page books={books} />}
        </div>
    )
}