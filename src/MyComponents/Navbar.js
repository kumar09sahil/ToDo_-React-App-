import React, { useEffect, useState } from "react";
import { Searchbar } from "./Searchbar";



export const Navbar = (props) => {
 const[flag,setFlag] = useState("false");
  const[FinalData, setFinalData ] = useState([{
    sno:"",
    title:"",
    description:""
  }]);
  const onsearch = (searcheditem,flag)=>{
        setFinalData(searcheditem);
        setFlag(flag);
        console.log(FinalData)
  }
  // useEffect(()=>{
  //   flag=true;
  // },[FinalData])
  return (
    <>
    {FinalData.map((data) => (
        <div className="modal" tabIndex="-1" key={data.sno}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{data.title}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p>{data.description}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-sm btn-danger" onClick={() => props.onDelete(data)} data-bs-dismiss="modal">delete</button>
              </div>
            </div>
          </div>
        </div>
      ))}
      
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
      </ul>
        <Searchbar onSearch={onsearch} todo={props.todo}  FinalData={FinalData} onDelete={props.onDelete} />
    </div>
  </div>
</nav>
    </>
  );
};
