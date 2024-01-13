import React from 'react'
import { ToDoItem } from './ToDoItem'

export const Todo = (props) => {
  return (
    <div className='container'>
    <h2 className=" my-3">ToDo List </h2>
    <div className=' row'>
      {/* //* using map to render elements of the todo lists one by one  */}
      { props.todo.map((todo) => {
        return (
                <div className='col-md-3' key={todo.sno}>
                    <ToDoItem title={todo.title}  desc={todo.description} onDelete={props.onDelete} todo={todo} />
                </div>
        )
      }) }
      </div>
    </div>
  )
}

