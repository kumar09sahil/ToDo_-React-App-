import React, { useState, useRef, useEffect } from "react";


export const Searchbar = (props) => {
  const [searchitem, setsearchitem] = useState("");
  const [searchResult, setsearchResult] = useState(null);
  const Modalref = useRef();

  const searchtodo = (searcheditem) => {
    if (props.todo) {
      const result = props.todo.filter((todo) => {
        return (
          todo.title.toLowerCase().includes(searcheditem.toLowerCase()) ||
          todo.description.toLowerCase().includes(searcheditem.toLowerCase())
        );
      });
      if (result.length > 0) {
        setsearchResult(result);
      } else {
        setsearchResult(null);
      }
    }
  };

  useEffect(() => {
    // Open the modal after the state has been updated
    if (searchResult && Modalref.current) {
      new bootstrap.Modal(Modalref.current).show();
    }
  }, [searchResult]);

  const handlechange = (e) => {
    setsearchitem(e.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    searchtodo(searchitem);
  };

  const closeModal = () => {
    setsearchitem("");
    setsearchResult(null);
    // Hide the modal using Bootstrap's modal hide method
    if (Modalref.current) {
      new bootstrap.Modal(Modalref.current).hide();
    }
  };

  return (
    <>
      <form className="d-flex" role="search" onSubmit={handlesubmit}>
        <input
          className="form-control me-2"
          type="search"
          onChange={handlechange}
          value={searchitem}
          placeholder="search key words"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" onClick={handlesubmit} type="submit">
          Search
        </button>
      </form>
      {searchResult && (
        <>
          <button
            type="button"
            className="btn btn-sm "
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          ></button>

          <div
            className="modal fade"
            id="staticBackdrop"
            ref={Modalref}
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  {searchResult.map((resultItem, index) => (
                    <h1 className="modal-title fs-5" key={index}>
                      {resultItem.title}
                    </h1>
                  ))}
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  {searchResult.map((resultItem, index) => (
                    <div key={index}>{resultItem.description}</div>
                  ))}
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="button" onClick={()=>props.onDelete(searchResult[0])} data-bs-dismiss="modal" className="btn btn-sm btn-danger">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
        </>
      )}
    </>
  );
};
