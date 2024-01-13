import React from "react";

export const ToDoItem = ({title,desc, onDelete,todo}) => {
    return (
    <div className="container my-2">
    <div className="card " style={{width:"18rem"}}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {desc}
        </p>
        <button type="button" className="btn btn-sm btn-danger" onClick={() => onDelete(todo)}>Delete</button>
      </div>
    </div>
    </div>
    )
};
