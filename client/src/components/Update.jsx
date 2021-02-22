import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { navigate } from '@reach/router';
export default props => {
    const { id } = props;
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    useEffect(() => {
        axios.get('http://localhost:8000/api/books/' + id)
            .then(res => {
                setName(res.data.name);
                setImage(res.file.image);
                setDescription(res.data.description);
                setUrl(res.data.url);
        
            })
    }, [])
    const updateBook = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/books/' + id, {
            name,
            // image,
            description,
            url,

        })
            .then(res => navigate("/admin"));
    }
    return (
        <div>
          <h2>Update this Book</h2>
            <p>
            <TextField
            id="name"
            label="Book name"
            autoComplete="Book name"
            variant="outlined"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
           </p>
           <p>
            <TextField
            id="book image"
            label=""
            autoComplete="book image"
            variant="outlined"
            type="file"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
        />
        </p> 
        <p>
            <TextField
            id="book description"
            label="book description"
            autoComplete="book description"
            variant="outlined"
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
        </p>
        <p>
            <TextField
            id="book URL"
            label="book URL"
            autoComplete="book URL"
            variant="outlined"
            type="text"
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
        />
</p>
<Button onClick={updateBook} variant="contained" color="primary">
  Update Book
</Button>
        </div>
    )
}