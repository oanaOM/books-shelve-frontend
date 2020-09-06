import React, { Fragment, useState } from "react";


const InputBooks = () => {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

    const onSubmitForm = async e => { 
        e.preventDefault();
        
        try {
            const body = { title, author };
            const response = await fetch("http://206.189.23.196:5005/books", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body),
            });
console.log(">>>body: ", body);
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }


  return (
    <Fragment>
     

      <form className="d-flex flex-column mt-5" onSubmit={onSubmitForm}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button className="btn btn-success"> Add</button>
      </form>
    </Fragment>
  );
};

export default InputBooks;
