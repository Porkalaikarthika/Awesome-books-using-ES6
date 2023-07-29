import { book } from './modules/book.js';
import { title, author, addBtn, listElement, addNew, contact, btnList, btnaddNew, btnContact, books } from './modules/variables.js';
document.addEventListener('DOMContentLoaded', function () 
  {
    listElement.style.display="none";
    addNew.style.display="none";
    contact.style.display="none";    
  });
if (localStorage.getItem('bookStore')) {
    const storedBooks = JSON.parse(localStorage.getItem('bookStore'));
    for (let i = 0; i < storedBooks.length; i++) {
      const storebook = new book(storedBooks[i].tit, storedBooks[i].auth);
      storebook.displayBook(i);
    }
  }
  addBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission
    
    const newBook=new book(title.value,author.value);

    books.push(newBook);
    //   console.log(books);
    newBook.save();

    newBook.displayBook(books.length-1);

    title.value = ''; // Clear the input fields
    author.value = '';
  });
  
  btnList.onclick = function (){
    document.getElementById('welcome').style.display="block";
    listElement.style.display="block";
    addNew.style.display="none";
    contact.style.display="none";
  }

  btnaddNew.onclick = function (){
    document.getElementById('welcome').style.display="none";
    listElement.style.display="none";
    addNew.style.display="block";
    contact.style.display="none";
  }

  btnContact.onclick = function (){
    document.getElementById('welcome').style.display="none";
    listElement.style.display="none";
    addNew.style.display="none";
    contact.style.display="block";
  }

