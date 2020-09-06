import React, { Fragment, useEffect, useState } from "react";

const EditBook = ({ book }) => {
  const [title, setTitle] = useState(book.title);

  // update book title

  const updateTitle = async (e) => {
    try {
      e.preventDefault();
      console.log(book.book_id);
      const body = { title };
      const response = await fetch(
        `http://206.189.23.196:5005/books/${book.book_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      window.location = "/";
    } catch (err) {
      console.log(err.meesage);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${book.book_id}`}
      >
        Edit
      </button>

      <div
        className="modal fade"
        id={`id${book.book_id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit book
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  updateTitle(book.title);
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                defaultValue={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                onClick={(e) => {
                  updateTitle(e);
                }}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={() => {
                  updateTitle(book.title);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditBook;
