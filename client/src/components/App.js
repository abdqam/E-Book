import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Login from './components/Login'
import Main from './components/Main'
import Update from './components/Update'
import Book from './components/Book'
function App() {
  return (
    <div className="App">
        {
          <Router>
           
<Main path="/admin" />
<Update path="/books/:id/edit"/>
<Book path="/books/:id"/>
</Router>

   }
   </div>
  );

}
export default App;
