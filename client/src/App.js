import "./App.css";
import Root from "./components/Root";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from './components/Main';
import Update from './components/Update';
import Book from './components/Book';
import Main2 from './components/Main2';


import axios from "axios";
import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";

function App() {
  const [user, setUser] = useState({ _id: false });
  
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
      <Header user={user} User={signedUser} />
      {/* <Root user={user}/> */}
      {user._id?
            <Router signedUser={signedUser}>
              <Main2 path="/index" />
            <Main path="/admin" />
            <Update path="/books/:id/edit" />
            <Book path="/books/:id" />
          </Router>:
          ""
      }
      <Footer />
    </div>
  );
}
export default App;
