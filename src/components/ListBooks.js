import React, { Fragment, useEffect, useState} from "react";
import EditBook from "./EditBook";

const ListBooks = () => { 

    const [books, setBooks] = useState([]);

    const deleteBook = async (id) => { 
        try {
             await fetch(`http://206.189.23.196:5005/books/${id}`, {
               method: "DELETE",
               headers: { "Content-Type": "application/json" },
             });
            setBooks(books.filter(book => book.book_id !== id))
        } catch (err) {
            console.error(err.message);
        }
    }

    const getBooks = async () => { 
        try {
            const response = await fetch("http://206.189.23.196:5005/books");

            const jsonData = await response.json();

            setBooks(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getBooks();
    }, []);


    return (
      <Fragment>
        <table className="table mt-4 text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col" className="text-left">
                Title
              </th>
              <th scope="col">Author</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.book_id}>
                <td>{book.book_id}</td>
                <td className="text-left">{book.title}</td>
                <td>{book.author}</td>
                <td>
                  <EditBook book={book} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteBook(book.book_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
}

export default ListBooks;
