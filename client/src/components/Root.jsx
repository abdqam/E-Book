import React, { useState } from 'react'
import Login from './Login';
import Register from './Register';
import {Router} from '@reach/router'

const Root = (props) => {
    const [registered, setRegisterd] = useState(false);
    const registerdUser = (userVal) => {
        props.signedUser(userVal);
    }
    const Registerd = (val) => {
        setRegisterd(val)
    }
    const loggedUser = (userVal) => {
        props.signedUser(userVal);
    }
    return (
        <div>
            <Router>
                <Login path="/login" Registerd={Registerd} loggedUser={loggedUser}/> 
                <Register path="/register" Registerd={Registerd} registerdUser={registerdUser}/>
            </Router>
        </div>
    )
}
export default Root