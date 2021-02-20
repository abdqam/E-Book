import './App.css';
import Root from './components/Root';
import Test from './components/Test';

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Router } from '@reach/router';

function App() {
  const [user, setUser] = useState({ _id: false });
  const logout = (val) => {
    axios.get('http://localhost:8000/api/logout', { withCredentials: true })
      .then(() => { setUser({ _id: false }); })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    axios.get('http://localhost:8000/api/tokenuser', { withCredentials: true })
      .then(res => { setUser(res.data); })
      .catch(err => console.log("Unauthorized"));
  }, [user._id])
  const signedUser = (data) => {
    setUser(data)
  }
  return (
    <div className="App">
      {
        user._id ?
          <div><h3>{user.firstName}</h3><button onClick={logout}>LogOut</button></div> :
          <Root user={user} signedUser={signedUser} />
      }
    </div>
  );
}
export default App;