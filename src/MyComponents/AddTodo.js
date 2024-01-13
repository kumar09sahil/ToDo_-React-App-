import React, { useState } from "react";

export const AddTodo = ({addTodo}) => {
  const [title,setTitle] = useState("");
  const [desc,setdesc] = useState("");
  
  //* handle after clicking submit butoon
  const submit = (e) =>{
    e.preventDefault(); //* prevents page from reloading
    if(!title || !desc)
    {
      alert("title and description required");
    }
    else
    {
      addTodo(title,desc);
      //*after adding title and description making it empty so it is not displayed on the input area
      setTitle("");
      setdesc("");
    }
  }
  return (
    <div className="container">
      <form onSubmit={submit}>
        <div className=" mb-3">
        <h2 className="my-3">Add ToDo</h2>
          <label
            htmlFor="title"
            className="form-label"
          ></label>
          <input
            onChange = {(e) =>{ setTitle(e.target.value)}} //* to set the title as to ehat is being typed on the input label
            value={title}
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            placeholder="title"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="description"
            className="form-label"
            ></label>
          <input
            onChange={(e) => {setdesc(e.target.value)}}  //* to set the description as to ehat is being typed on the input label
            value={desc}
            type="text"
            className="form-control"
            id="description"
            placeholder="description"
          />
        </div>
        <button type="submit"  className="btn btn-sm btn-success">
          ADD
        </button>
      </form>
    </div>
  );
};
