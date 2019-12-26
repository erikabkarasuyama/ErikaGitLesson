//book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Constructor
function UI() {}

//add book to list
UI.prototype.addBookToList = function(book) {
    const list = document.querySelector("#book-list");
    //create TR element
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X</a></td>
      `;

    list.appendChild(row);
};

//Clear field
UI.prototype.clearFields = function() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
};
//event listeners
document.querySelector("#book-form").addEventListener("submit", function(e) {
    //get form values
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;

    //instantiate book
    const book = new Book(title, author, isbn);

    //instantiate
    const ui = new UI();
    ui.clearFields();
    ui.addBookToList();

    //console.log(title, author, isbn);
    e.preventDefault();
});
