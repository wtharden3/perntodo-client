import React, { Fragment, useState } from "react";

const InputTodo = () => {

  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {description};
      const response = await fetch("http://localhost:4040/createtodo", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
      });

      console.log(response);

    } catch (err){
      console.error(`[CLIENT ERROR] ${err.message}`);
    }
  }

  return(
    <Fragment>
      <h1 className="text-center mt-5">
        PERN Todo List
      </h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input 
          className="form-control" 
          type="text" 
          name="description" 
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button className="btn btn-info">Add</button>
      </form>
    </Fragment>
  )
}

export default InputTodo;