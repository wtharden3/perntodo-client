import React, { Fragment } from "react";
import './App.css';
import InputTodo from "./componenents/InputTodo";
import ListTodo from "./componenents/ListTodo";

function App() {
  return (
   <Fragment>
    <div className="container">
      <InputTodo />
      <ListTodo />
    </div>
   </Fragment>
  );
}

export default App;
