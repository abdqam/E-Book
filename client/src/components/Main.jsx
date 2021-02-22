import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Bookform from './Bookform';
import Booklist from './Booklist';
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
        <div>
            
            {loaded && <Booklist books={books} removeFromDom={removeFromDom} />}
            <hr/>
            <Bookform />
        </div>
    )
}