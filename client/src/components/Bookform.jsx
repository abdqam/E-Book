import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'

const Bookform = () => {
    const [name, setName] = useState('');
    const [filename,setFilename] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [errors, setErrors] = useState('');
    const useStyles = makeStyles((theme) => ({
        root: {
          '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
      }));

      const submitData = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('upload', filename);
        formData.append('name', name);
        formData.append('description', description);
        formData.append('url',url);
        axios.post('http://localhost:8000/api/createNewBook', formData)
            .then(res=>console.log(res))
            // .catch(err=>{
            //     const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            //     const errorArr = []; // Define a temp error array to push the messages in
            //     for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
            //         errorArr.push(errorResponse[key].message)
            //     }
            //     // Set Errors
            //     setErrors(errorArr);
            // })
            .catch(err => setErrors("there is an error"))
    }
      const classes = useStyles();
    return (
        <div style={{width:"35%",border:"1px solid steelblue",margin:"0 auto"}}>
            Welcome To Admin Page
            <h2>Add New Book</h2>
            <form id="form" onSubmit={submitData} encType="multipart/form-data">
            <p>
            <TextField
            id="name"
            label="Book name"
            autoComplete="Book name"
            variant="outlined"
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setUrl(e.target.value)}
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
            filename="upload"
            onChange={(e) => setFilename(e.target.files[0])}
        />
        </p> 
        
  <Button variant="contained" color="primary" type="submit">ADD Book</Button>
</form>
{/* <div style={{color:"red"}}> {errors.map((err, index) => <p key={index}>{err}</p>)}</div> */}
{errors}
        </div>
        
    )
}

export default Bookform
