import React, { Fragment, useState} from "react";

const ListTodo = () => {
  const [todos, setTodos] = useState(["todo 1","todo 2","todo 3"]);
  const [todoNum, setTodoNum] = useState(1);

  return(
    <div className="mt-5">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => {
            return(
              <Fragment>
                <tr>
                  <th scope="row">{todoNum}</th>
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