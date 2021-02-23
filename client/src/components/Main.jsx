import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Bookform from './Bookform';
import Booklist from './Booklist';
export default () => {
    const [books, setBooks] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [book, setBook] = useState('');

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
    const bookAdded = (val) =>{
        setBook(val)
        setBooks(() =>[...books,val])
    }


    return (
        <div>
            
            {loaded && <Booklist books={books} removeFromDom={removeFromDom}/>}
            <hr/>
            <Bookform bookAdded={bookAdded} />
        </div>
    )
}