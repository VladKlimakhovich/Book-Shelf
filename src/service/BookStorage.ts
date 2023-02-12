import { Book } from "../models/Books";





  export const bookStorage = {

    getData(): any{  
        var localStorageData =  localStorage.getItem("booksDB");
        //console.log(localStorageData);
        return localStorageData
        },

    saveBook(newBook: Book[]) {
        console.log(newBook);
        var newBookJSON = JSON.stringify(newBook);
        localStorage.setItem("booksDB", newBookJSON);
        //console.log(localStorage);
        
      }





}