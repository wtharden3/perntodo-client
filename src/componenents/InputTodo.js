import React, { Fragment } from "react";

const InputTodo = () => {
  return(
    <Fragment>
      <h1 className="text-center mt-5">
        PERN Todo List
      </h1>
      <form className="d-flex mt-5">
        <input className="form-control" type="text" name="description"/>
        <button className="btn btn-info">Add</button>
      </form>
    </Fragment>
  )
}

export default InputTodo;