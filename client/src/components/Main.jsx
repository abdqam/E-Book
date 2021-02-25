import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Bookform from './Bookform';
import Booklist from './Booklist';
import AddCategory from './AddCategory';
export default () => {
    const [books, setBooks] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [book, setBook] = useState('');
    const [added, setadded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/getAllBooks')
            .then(res => {
                setBooks(res.data);
                setLoaded(true);
            });
    }, [book])
    const removeFromDom = bookId => {
        setBooks(books.filter(book => book._id != bookId));
    }
    const bookAdded = (val) =>{
        setBook(val)
    }
    const Added = (val) => {
        setadded(!val)
    }


    return (
        <div>
            <AddCategory added={Added}/>
            <Bookform bookAdded={bookAdded} Added={added}/>
            <hr/>
            {loaded && <Booklist books={books} removeFromDom={removeFromDom}/>}
            
        </div>
    )
}