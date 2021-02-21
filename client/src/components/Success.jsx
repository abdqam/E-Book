import React from 'react'

const Success = (props) => {
    return (
        <div>
            <div><h3>{props.user.firstName}</h3><button onClick={props.logout()}>LogOut</button></div>
        </div>
    )
}

export default Success
