import React, { Fragment, useState, useEffect } from "react";

const ListTodo = () => {
  const [todos, setTodos] = useState(["todo 1","todo 2","todo 3"]);
  // useEffect() //used this for fetch
  const fetchTodos = () => {
    fetch("http://localhost:4040/alltodos", {
        method: "GET",
        headers: { "Content-Type": "application/json"},
      })
      .then(res => res.json())
      .then(data => setTodos(data))
    }
    
  useEffect(() => fetchTodos())

  return(
    <div className="mt-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Todo</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => {
            return(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td >{todo.description}</td>
              </tr>
            )   
          })}
        </tbody>
      </table>
            
    </div>
  )
}

export default ListTodo;