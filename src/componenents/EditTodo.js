import React, {Fragment, useState} from "react";

const EditTodo = ({todo}) => {
  // const [todoId, setTodoId] = useState(todo.todo_id);
  const [newDescription, setNewDescription] = useState(todo.description);
  // const [openModal, setOpenModal] = useState(false)

  const fetchFn = async () => {
    try {
      const body = newDescription;
      console.log(body);
      const response = await fetch(`http://localhost:4040/todo/${todo.todo_id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          description: body
        })
      });
      console.log(response);
    } catch (err) {
      console.error(`[ERROR] ${err.message}`);
    }
  }

  const handleEdit = (e) => {
    e.preventDefault();
    // console.log(e);
    console.log(todo.todo_id);
    fetchFn();
  }

  // console.log(`This is the todoId: ${todo.todo_id} and this is description: ${newDescription}`);
  return(
    <Fragment>
      <button 
        type="button" 
        className="btn btn-outline-info" 
        data-bs-toggle="modal" 
        data-bs-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>
      <div className="modal" id={`id${todo.todo_id}`} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Todo: {`This is the ${ todo.todo_id }!`}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <input 
                type="text" 
                className="form-control"
                value={newDescription}
                onChange={e => setNewDescription(e.currentTarget.value)}
              />
            </div>
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-secondary" 
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={e => handleEdit(e)}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default EditTodo;