import { SyntheticEvent, useState } from "react";
import { Book } from "../models/Books";
import { authorConst, publisherConst, yearOfPublicationConst } from "../models/Constants";
import BookModalWindow from "./BookModalWindow";
import "./BookCard.css";

interface IBookProps{
    book: Book;
    
    onSave: (book: Book) => void;
    onDelete: (book: Book) => void;
}

function BookCard({book, onSave, onDelete}:IBookProps){
    const handleEditClick = (bookBeingEdited: Book) => {
        console.log("handleEditClick, BookCard",bookBeingEdited);
        onSave(bookBeingEdited);
      };
    const handleDelete = (book:Book) =>{
        onDelete(book);    
    }

    
    
    return(
        <div className="book-card">
        <div></div>
        <p className="name">{book.title}</p>
        <div className="book-cover">
          <img className="round" src="https://img.freepik.com/free-photo/young-male-web-designers-working-computer_1303-19453.jpg?auto=format&h=200" />
        </div>
  
        <p>
          {authorConst} {book.authorName} {book.authorLastName}
        </p>
        <p>
          {publisherConst} {book.nameOfPublisher}
        </p>
        <>
          {yearOfPublicationConst} {book.yearOfPublication}
        </>
  
        <BookModalWindow
          book={book}
          onCancel={function (): void {
            throw new Error("Function not implemented.");
          }}
          onSave={handleEditClick}
          onDelete={handleDelete}
        />
      </div>
    )
}
export default BookCard;


