// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI() {}

UI.prototype.deleteListItem = function(e) {
    if(e.target.className.includes('delete')) {
        e.target.parentElement.parentElement.remove();
    }
}
UI.prototype.showAlert = function(message, cls) {
    const div = document.createElement("div");
    div.className = `alert ${cls}`;
    div.textContent = message;
    let refElement = document.querySelector("#book-form");
    refElement.parentElement.insertBefore(div, refElement);

    setTimeout(() => {
        div.remove();
    }, 3000);



}

UI.prototype.addBookToList = function(book) {
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
}
// Clear fields
UI.prototype.clearFields = function() {
    document.querySelector("#title").value = '';
    document.querySelector("#author").value = '';
    document.querySelector("#isbn").value = '';
}


// Event Listener
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