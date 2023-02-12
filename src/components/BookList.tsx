
import { Book } from '../models/Books';
import React, { useState } from 'react';
import BookCard from './BookCard';

import BookModalWindow from './BookModalWindow';


interface BookListProps {
  books: Book[];
  onSave:(book: Book) => void;
  onDelete:(book: Book) => void;
}

function BookList({ books, onSave, onDelete 
}: BookListProps) {
  const [bookBeingEdited, setBookBeingEdited] = useState({});
    const handleEdit = (book: Book) => {
        setBookBeingEdited(book);
           };
    const cancelEditing = () =>{
        setBookBeingEdited({});
    };
return (
  
    <div className="flex-row-container">
      {books.map((book, index) => (
        <div key={index} className="flex-row-item">
            {book === bookBeingEdited ?(
              <BookModalWindow
              book={book}
              onSave={onSave}
              onCancel={cancelEditing} 
              onDelete={onDelete}                            />
            ):(
              <BookCard book={book} onSave={onSave} onDelete={onDelete}/>
            )}
        </div>
                ))}
              </div>
              
            );
}

export default BookList;