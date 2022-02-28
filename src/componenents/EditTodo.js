import React, {Fragment, useState} from "react";

const EditTodo = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [todoId, setTodoId] = useState(props.todoId);

  const fetchFn = () => {
    try {
      console.log(todoId);
      const body = "something";
      fetch(`http://localhost:4040/todo/${todoId}`, {
        method: "PUT",
        headers: {"Content-type": "application/json"},
        body: body
      });
    } catch (err) {
      console.error(`[ERROR] ${err.message}`);
    }
  }

  const handleEdit = () => {
    console.log(true)
    console.log(todoId);
    setModalOpen(true);
  }

  const handleClose = () => {
    console.log(false);
    setModalOpen(false);
  }

  const handleSave = () => {
    fetchFn()
  }

  return(
    <Fragment>
      <button 
        type="button" 
        className="btn btn-outline-info" 
        data-bs-toggle="modal" 
        data-bs-target="#editModal"
        onClick={e => handleEdit()}
      >
        Edit
      </button>
      <div className="modal" id="editModal" tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-secondary" 
                data-bs-dismiss="modal"
                onClick={e => handleClose()}
              >
                Close
              </button>
              <button 
                type="button" 
                className="btn btn-primary"
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