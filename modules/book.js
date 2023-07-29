import { listElement, books } from './variables.js';
export class book {
    constructor(tit, auth) {
        this.tit = tit;
        this.auth = auth;
    }

    displayBook(index) {
        let bookElement = document.createElement('section');
        // const index = books.indexOf(this);
        bookElement.classList.add('flexSec');
        bookElement.innerHTML = `
      
     <h3>"${this.tit}" by ${this.auth} </h3>    
     <button id="rmvBtn">remove</button>    
     `;
        console.log(index);
        bookElement.classList.add(index % 2 === 0 ? 'brown' : 'white');

        listElement.appendChild(bookElement);
        const removeBtn = bookElement.querySelector('#rmvBtn');

        removeBtn.addEventListener('click', () => {
            this.removeBook(index, bookElement);
        });

    }

    removeBook(index, bookElement) {
        // const index = books.indexOf(this);
        books.splice(index, 1);
        console.log(books);
        bookElement.remove();
        this.save();
    }

    save() {
        let bookjson = JSON.stringify(books);
        localStorage.setItem('bookStore', bookjson);

    }

}

