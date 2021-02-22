import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
export default props => {

    const { removeFromDom } = props;
    const deleteBook = (bookId) => {
        axios.delete('http://localhost:8000/api/books/' + bookId)
            .then(res => {
                removeFromDom(bookId)
            })
    }


    return (
        <div>
           
            <center>All Books</center><center><table border="1">
            {props.books.map((book, idx)=>{
                // return <p key={idx}>{product.title}, {product.price}, {product.description}</p>
                return <><tr>
                <td key={idx}><Link to ={"/books/"+book._id}>{book.name}</Link>  </td><td>
                <button onClick={(e)=>{deleteBook(book._id)}}>
                    Delete
                </button></td><td>
                                <button><Link to={"/books/"+book._id+"/edit"}>
				                    Edit
                </Link></button></td>
                </tr>
					</>
            })}
            </table>
            </center>
        </div>
    )
}