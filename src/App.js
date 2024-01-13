import React, { useEffect, useState } from "react";
import { Navbar } from "./MyComponents/Navbar";
import {AddTodo}  from "./MyComponents/AddTodo";
import {Footer} from "./MyComponents/Footer";
import {Todo} from "./MyComponents/Todo";

function App() {
  let inTodo;
  //* to check for the content in local storage
  if(localStorage.getItem("todo")===null)
  {
    inTodo=[];
  }
  else
  {
    inTodo = JSON.parse(localStorage.getItem("todo"))
  }

  const[todo , setTodo] = useState(inTodo)
  
  //* to add todo list 
  const addTodo = (title,desc) =>
  {
      let sno;
      const mytodo = {
        sno : todo.length>0?todo[todo.length-1].sno +1: 1,
        title : title,
        description: desc,
      }
      console.log(mytodo)
      setTodo([...todo,mytodo])
  }

  //* useeffect hook used in order for the todo to be store in local storage after it is set
  useEffect(()=>{
    //*to store todo into the local storage to prevent from disappearing on reload of page
    localStorage.setItem("todo",JSON.stringify(todo))
  },[todo])
  
  
  const onDelete = (todos) =>{
        console.log("deleting ",todos);
        setTodo(todo.filter((e) =>{
          return e!==todos;
        }));
        //* updating the local storage after an item is deleted
        localStorage.setItem("todo",JSON.stringify(todo));  
  }
  return (
    <>
      <Navbar title="ToDo" todo={todo} onDelete={onDelete}/>
      <AddTodo addTodo={addTodo}/>
      <Todo todo={todo} onDelete={onDelete}/>
      <Footer/>  
    </>
  );
}

export default App;
