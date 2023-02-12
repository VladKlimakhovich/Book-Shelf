import React, { SyntheticEvent, useState } from "react";


import Modal from "react-modal";
import { Book } from "../models/Books";
import { authorConst, cancelButtonConst, deleteButtonConst, nameOfPublisherConst, saveButtonConst, titleLabelConst, authorNameConst, authorLastNameConst, editButton } from "../models/Constants";
import "./BookModalWindow.css";
Modal.setAppElement("#root");

interface BookFormProps{
  book: Book;
  onCancel: () => void;
  onSave: (book: Book) => void;
  onDelete:(book:Book) => void;
}

export default function BookModalWindow({
  book: initialBook,
  onSave,
  onCancel, 
  onDelete,
}:BookFormProps): JSX.Element {


  const[book, setBook] = useState(initialBook);    


    const handleSave = (event: SyntheticEvent) =>{
        event.preventDefault();
        console.log("handleSubmit BookModalWindow", book)
        onSave(book);   
        setIsOpen(!isOpen);
        return parseJSON
    }

    const handleDelete = (event: SyntheticEvent) =>{
      event.preventDefault();
      onDelete(book);
      setIsOpen(!isOpen);
    }
    
    function parseJSON(response: Response) {
      return response.json();
    }
  const [isOpen, setIsOpen] = useState(false);


  
  const handleChange = (event: any) => {
    const { type, name, value, checked } = event.target;
    let updatedValue = type === 'checkbox' ? checked : value;

    if (type === 'number') {
      updatedValue = Number(updatedValue);
    }
    const change = {
      [name]: updatedValue,
    };

    let updatedBook: Book;
    setBook((t) => {
      updatedBook = new Book({ ...t, ...change})
      return updatedBook;
    });
  };


  function toggleModal() {
    setIsOpen(!isOpen);
  }
  
  return (
    <div >
      <button 
      className="button"
      onClick={() => {
        toggleModal()
      }}>{editButton}</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="hystmodal"
      >
      <form className="card"
         >
            
     
              <label htmlFor="title">{titleLabelConst}</label>
              <input 
                type="text" 
                name="title" 
                placeholder="enter title"
                value={book.title}
                onChange={handleChange} />
              <label htmlFor="authorName"><br/>{authorNameConst}</label>
              <textarea 
                name="authorName" 
                placeholder="enter author name"
                value={book.authorName}
                onChange={handleChange} />
              <label htmlFor="authorLastName"><br/>{authorLastNameConst}</label>
              <textarea 
                name="authorLastName" 
                placeholder="enter author name"
                value={book.authorLastName}
                onChange={handleChange} />
              <label htmlFor="nameOfPublisher"><br/>{nameOfPublisherConst}</label>
              <input 
                type="text" 
                name="nameOfPublisher" 
                placeholder="enter name of publisher"
                value={book.nameOfPublisher}
                onChange={handleChange} />
              <div className="input-group">
                <button className="primary bordered medium"
                onClick={handleSave}>
                  {saveButtonConst}
                </button>
                <span />
                <button type="button" className="bordered medium"
                onClick={toggleModal}>{cancelButtonConst}</button>
                <button type="button" className="bordered medium"
                onClick={handleDelete}>
                {deleteButtonConst}
                </button>
            
        </div>
    </form>
        
      </Modal>
    </div>
  );
}