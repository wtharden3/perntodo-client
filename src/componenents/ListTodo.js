import React, { useState, useEffect } from "react";

const ListTodo = () => {
  const [todos, setTodos] = useState(["todo 1","todo 2","todo 3"]);
  //I want to pass down InputTodos state so that I can make it a dependency
  //for the useEffect that is running fetch function as an argument.
  // useEffect() //used this for fetch
  const fetchTodos = () => {
    fetch("http://localhost:4040/alltodos", {
        method: "GET",
        headers: { "Content-Type": "application/json"},
      })
      .then(res => res.json())
      .then(data => setTodos(data))
    }
    // converted the above function to trycatch using asyc await and storing await fetch in a function that should be returned...
  // const fetchTodosAsync = async () => {
  //   try {
  //     const response = await fetch("http://localhost:4040/alltodos", {
  //         method: "GET",
  //         headers: { "Content-Type": "application/json"}
  //       });
  //     const fetchJson = await response.json();
  //     console.log(`fetchJson: ${fetchJson}`)
  //     setTodos(fetchJson);
  //   } catch (err) {
  //     console.error(`[ERROR] ${err.message}`);
  //   }
  // }

  useEffect(() => fetchTodos(), []) //will only run when initialized not when state changes
  // useEffect(() => fetchTodosAsync(), [])
  return(
    <div className="mt-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Todo</th>
            <th className="text-info" scope="col">Edit</th>
            <th className="text-danger" scope="">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => {
            return(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td >{todo.description}</td>
                <td><button type="button" className="btn btn-outline-info">Edit</button></td>
                <td><button type="button" className="btn btn-danger">Delete</button></td>
              </tr>
            )   
          })}
        </tbody>
      </table>
            
    </div>
  )
}

export default ListTodo;