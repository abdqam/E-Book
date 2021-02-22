import React,{ useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

import Login from './Login';
import Register from './Register';
import {Router} from '@reach/router'


const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
});

function SimpleDialog(props) {
    const classes = useStyles();
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

const Registerdd = React.createRef(false);
    // const [registered, setRegisterd] = useState(false);
    const registerdUser = (userVal) => {
        props.signedUser(userVal);
    }
    const Registerd = (val) => {
        Registerdd.current = val;
    }
    const loggedUser = (userVal) => {
        props.signedUser(userVal);
    }


    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>

                {Registerdd?
                    <Login Registerd={Registerd} loggedUser={loggedUser} />:
                <Register Registerd={Registerd} registerdUser={registerdUser} />
                }
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <div>
            <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
            <br />
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open simple dialog
            </Button>
            <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
        </div>
    );
}
