import React, { Fragment } from 'react';
import './App.css';

// components

import InputBooks from "./components/InputBooks";
import ListBooks from "./components/ListBooks";

function App() {
  return (
    <Fragment>
      <div className="container">
        <h1 className="text-center mt-4">My Books</h1>
            <InputBooks />
            <ListBooks />
      </div>
    </Fragment>
  );
}

export default App;
