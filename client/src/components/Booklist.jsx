import React from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Description from '@material-ui/icons/Description';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#424242',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);
const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    center: {
        overflow:'auto',
        textAlign: 'center',
        width: '70%',
        // marginLeft: '25%',
        marginTop: '2%',
        height:'300px',
        margin:'0 auto'
    }
});
export default props => {

    const { removeFromDom } = props;
    const deleteBook = (bookId) => {
        axios.delete('http://localhost:8000/api/books/' + bookId)
            .then(res => {
                removeFromDom(bookId)
            })
    }
    const classes = useStyles();
    return (
        <div className={classes.center}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Book ID</StyledTableCell>
                            <StyledTableCell>Book Name</StyledTableCell>
                            <StyledTableCell align="right">Book Description</StyledTableCell>
                            <StyledTableCell align="right">Display</StyledTableCell>
                            <StyledTableCell align="right">Edit</StyledTableCell>
                            <StyledTableCell align="right">Delete</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.books.map((book, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell component="th" scope="row">{index+1}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">{book.name}</StyledTableCell>
                                <StyledTableCell align="right">{book.description}</StyledTableCell>
                                <StyledTableCell align="right"><IconButton onClick={() => navigate(`/books/${book._id}`)}><Description /></IconButton></StyledTableCell>
                                <StyledTableCell align="right"><IconButton onClick={() => navigate(`/books/${book._id}/edit`)}><EditIcon /></IconButton></StyledTableCell>
                                <StyledTableCell align="right"><IconButton onClick={() => deleteBook(book._id)} aria-label="delete" color="danger"><DeleteIcon /></IconButton></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}