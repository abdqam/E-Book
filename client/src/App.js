import "./App.css";
import Root from "./components/Root";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from './components/Main';
import Update from './components/Update';
import Book from './components/Book';

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";

function App() {
  const [user, setUser] = useState({ _id: false });
  const logout = (val) => {
    axios
      .get("http://localhost:8000/api/logout", { withCredentials: true })
      .then(() => {
        setUser({ _id: false });
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/tokenuser", { withCredentials: true })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log("Unauthorized"));
  }, [user._id]);
  const signedUser = (data) => {
    setUser(data);
  };
  return (
    <div className="App">
      <Header user={user} logout={logout} />
      <Root user={user} signedUser={signedUser} />
      {user._id?
            <Router>
            <Main path="/admin" />
            <Update path="/books/:id/edit" />
            <Book path="/books/:id" />
          </Router>:
          "hello"
      }
      <Footer />
    </div>
  );
}
export default App;
