import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from './components/Main';
import Update from './components/Update';
import Book from './components/Book';
import Home from './components/Home';
import Category from './components/Category';
import ContactUs from './components/AboutUs/ContactUs.jsx';
import Chat from './components/Chat'



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
      <div className="Background">
      <Header user={user} User={signedUser} />
      {
        user.role === 1 ?
          <Router >
            <ContactUs path="/about-us"/>
            <Home path="/" />
            <Category path="/category/:name" />
            <Main path="/admin"/>
            <Update path="/books/:id/edit" />
            <Book path="/books/:id" />
            <Chat path="/chat"/>
          </Router> :
          <Router >
            <Home path="/" />
            <ContactUs path="/about-us"/>
            <Category path="/category/:name" />
            <Book path="/books/:id" />
            <Chat path="/chat"/>
          </Router>
      }
      <Footer />
      </div>
    </div>
  );
}
export default App;
