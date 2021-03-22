var books = [];
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    deleteListItem(e) {
        if(e.target.className.includes('delete')) {
            e.target.parentElement.parentElement.remove();
        }
    }
    showAlert(message, cls) {
        const div = document.createElement("div");
        div.className = `alert ${cls}`;
        div.textContent = message;
        let refElement = document.querySelector("#book-form");
        refElement.parentElement.insertBefore(div, refElement);

        setTimeout(() => {
            div.remove();
        }, 3000);
    }
    addBookToList(book) {
        const list = document.querySelector("#book-list");
        const row = document.createElement("tr");
        row.innerHTML = 
        `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class='delete'>X</a></td>
        `;
        list.appendChild(row);
        Storage.addBook(book);
    }
    clearFields() {
        document.querySelector("#title").value = '';
        document.querySelector("#author").value = '';
        document.querySelector("#isbn").value = '';
    }
}

class Storage {
    static getBooks() {
        const g_books_array = localStorage.getItem("books");
        let g_books = JSON.parse(g_books_array);
        const ui = new UI();
        for(let X in g_books) {
            ui.addBookToList(g_books[X]);
        }

    }

    deleteBook() {
        
    }

    displayBooks() {

    }

    static addBook(e_book) {
        const l_book = new Book(e_book.title, e_book.author, e_book.isbn);
        books.push(l_book);
        localStorage.setItem("books", JSON.stringify(books));
    }
}

// Event Listener
document.addEventListener('DOMContentLoaded', Storage.getBooks);

document.querySelector("#book-form").addEventListener('submit', function(e) {
    
    const title = document.querySelector("#title").value,
            author = document.querySelector("#author").value,
            isbn = document.querySelector("#isbn").value;

    const book = new Book(title, author, isbn);
    const ui = new UI();

    // validation
    if(title == '' || author == '' || isbn == '') {
        ui.showAlert('please enter the value', 'error');
    } else {
        ui.addBookToList(book);

        // Clear fields
        ui.clearFields();

        ui.showAlert("inserted successfully", 'success')

    }
    // Instantiate Book

    e.preventDefault();
});

document.querySelector("#book-list").addEventListener('click', function(e) {
    const ui = new UI();
    ui.deleteListItem(e);
  
  e.preventDefault();
})