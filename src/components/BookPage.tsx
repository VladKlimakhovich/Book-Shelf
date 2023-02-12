import React from "react";
import { Book } from "../models/Books";
import BookList from "./BookList";
import { bookConst, moreButtonConst } from "../models/Constants";
import { bookStorage } from "../service/BookStorage";
import BookModalWindow from "./BookModalWindow";
import BookModalForAdd from "./BookModalForAdd";

const { useState, useEffect } = React;

enum SortByEnum {
  ByTitle,
  ByID
}


function BookPage(): JSX.Element {


  const [books, setBooks] = useState<Book[]>([]);
  const [newForm, setNewForm] = useState(true);

  const [sortBy, setSortBy] = useState(SortByEnum.ByTitle);
  
  const showNewForm = () => {
    setNewForm(true);
  }
  const cancelNewForm = () => {
    setNewForm(false);
  }

  useEffect(() => {
    const books = JSON.parse(bookStorage.getData());
    if (books) {
      books.sort(compareBooks);
      console.log(sortBy)
      setBooks(books);
    }
  }, [sortBy]);


  const compareBooks = (b1: Book, b2: Book) => {
    if (sortBy == SortByEnum.ByTitle) {
      var nameA = b1.title.toLowerCase(), nameB = b2.title.toLowerCase()
      if (nameA > nameB) {
        return 1;
      }

      if (nameA < nameB) {
        return -1;
      }

      return 0;
    }
    else if (sortBy == SortByEnum.ByID) {
      return Number(b1.id) - Number(b2.id);
    }
  }


  const saveUpdatedBook = (book: Book) => {
    console.log("saveUpdatedBook", book);
    const newBooks = books.map(obj => {
      if (obj.id === book.id) {
        return book;
      }
      return obj;
    });
    setBooks(newBooks);
    bookStorage.saveBook(newBooks);
  }

  const saveNewBook = (book: Book) => {
    let newId = new Date().getTime();
    book.id = newId.toString();
    books.push(book)

    bookStorage.saveBook(books)
    return setBooks(books);
  }

  console.log(books)





  const deleteBook = (book: Book) => {
    let bookArray = JSON.parse(bookStorage.getData())
    bookArray.splice(bookArray.indexOf(book), 1)
    localStorage.setItem("booksDB", JSON.stringify(bookArray));
    return setBooks(bookArray);
  }


  return (
    <div id="body">
      <div className="row no-gutters">
        <div className="center_body">
          <div id="content">
            <div id="sorter" className="no-jumper">
                <div className="label">
                  Sort by:
                </div>
                <button className="sort_buttons" onClick={(e)=> {setSortBy(SortByEnum.ByID)}}> by date </button>
                <button className="sort_buttons" onClick={(e)=> {setSortBy(SortByEnum.ByTitle)}}> by title </button>
                
            </div>
            <div></div>
            <div className="std row no-gutters" id="product-browse">

              <BookList
                books={books}
                onSave={saveUpdatedBook}
                onDelete={deleteBook}
              />

              
            </div>
          </div>
          {newForm && (<BookModalForAdd
        book={new Book()}
        onSave={saveNewBook}
        onCancel={cancelNewForm}
        onDelete={deleteBook}
      />)}
        </div>
        
      </div>
      
    </div>

  );

}
export default BookPage;