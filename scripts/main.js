const myLibrary = [];
class Book {
    constructor(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    }
}

let myBook = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);

// function Book(title, author, pages, hasRead) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.hasRead = hasRead;
// }

function addBookToLibrary(Book) {
    myLibrary.push(Book);
}

function displayBooks() {
    const table = document.querySelector('table');

    // Check if the table already has headers
    const hasHeaders = table.querySelector('th') !== null;

    // If there are no headers, add them
    if (!hasHeaders) {
        const headersRow = table.insertRow();
        ['Title', 'Author', 'Pages', 'Read (y/n)'].forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headersRow.appendChild(th);
        });
    }

    // Clear existing rows except for the headers
    const rowsToRemove = Array.from(table.querySelectorAll('tr')).slice(hasHeaders ? 1 : 0);
    rowsToRemove.forEach(row => row.remove());

    // Loop through each book in myLibrary and create a table row for each book
    myLibrary.forEach(book => {
        const row = table.insertRow();

        // Insert cells into the row for each book property
        const titleCell = row.insertCell();
        titleCell.textContent = book.title;

        const authorCell = row.insertCell();
        authorCell.textContent = book.author;

        const pagesCell = row.insertCell();
        pagesCell.textContent = book.pages;

        const readCell = row.insertCell();
        readCell.textContent = book.hasRead ? 'Yes' : 'No';
    });
}

// Example usage:
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
const germanWar = new Book('The German War', 'Nicholas Stargardt', 736, true);

addBookToLibrary(theHobbit);
addBookToLibrary(germanWar);

// Call the displayBooks function to populate the table
displayBooks();

function openForm() {
    document.getElementById("add-book").style.display = "block";
}

function closeForm() {
    document.getElementById("add-book").style.display = "none";
}

function addBook() {
    // Extract values from form inputs
    const title = document.querySelector("#add-book input[placeholder='Book Title']").value;
    const author = document.querySelector("#add-book input[placeholder='Book Author']").value;
    const pages = document.querySelector("#add-book input[placeholder='Number of Pages']").value;
    const hasRead = document.querySelector("#readCheckbox").checked;
    
    // Check if all inputs are filled out
    if (title && author && pages) {
        // Create a new Book object
        const newBook = new Book(title, author, pages, hasRead);
        
        // Add the new book to the library array
        addBookToLibrary(newBook);
        
        // Refresh the display of books
        displayBooks();
        
        // Close the form
        closeForm();
    } else {
        // If any input is missing, display an alert
        alert("Please fill out all fields.");
    }
}

console.log(myLibrary);