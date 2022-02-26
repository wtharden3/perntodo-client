import React, { Fragment, useState, useEffect } from "react";

const ListTodo = () => {
  const [todos, setTodos] = useState(["todo 1","todo 2","todo 3"]);
  const [todoNum, setTodoNum] = useState(1);

  // useEffect()

  return(
    <div className="mt-5">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Todo</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => {
            return(
              <Fragment>
                <tr>
                  <th scope="row">{index+1}</th>
                  <td>{todo}</td>
                </tr>
              </Fragment>
            )   
          })}
        </tbody>
      </table>
            
    </div>
  )
}

export default ListTodo;