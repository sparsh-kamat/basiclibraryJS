const myLibrary = [];

function Book(name, author, pages, year, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.year = year;
    this.read = read;
}

function addBookToLibrary() {
    let name = document.getElementById('nameinput').value;
    let author = document.getElementById('authorinput').value;
    let pages = document.getElementById('pgnoinput').value;
    let year = document.getElementById('yearinput').value;
    let book = new Book(name, author, pages, year, false);
    myLibrary.push(book);
    render();
    formcontainer.style.display = "none";
    table.style.display = "flex";
    closeform.style.display = "none";
    document.getElementById('nameinput').value = "";
    document.getElementById('authorinput').value = "";
    document.getElementById('pgnoinput').value = "";
    document.getElementById('yearinput').value = "";

}


let togglebutton = document.querySelector(".toggle");
let formcont = document.getElementById(".formcontainer");
let table = document.querySelector("table");
let closeform = document.querySelector(".close");

togglebutton.addEventListener('click', () => {
    if (formcontainer.style.display == "flex") {
        formcontainer.style.display = "none";
        table.style.display = "flex";
        closeform.style.display = "none";
    }

    else {
        formcontainer.style.display = "flex";
        table.style.display = "none";
        closeform.style.display = "flex";
    }
});

closeform.addEventListener('click', () => {
    formcontainer.style.display = "none";
    table.style.display = "flex";
});



function render() {
    let table = document.querySelector('table');
    // clear the table except for the header
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let row = table.insertRow(-1);
        let readCell = row.insertCell(0);
        let nameCell = row.insertCell(1);
        let authorCell = row.insertCell(2);
        let pagesCell = row.insertCell(3);
        let yearCell = row.insertCell(4);
        nameCell.innerHTML = book.name;
        authorCell.innerHTML = book.author;
        pagesCell.innerHTML = book.pages;
        yearCell.innerHTML = book.year;
        let readButton = document.createElement('button');
        readButton.textContent = book.read ? 'Read' : 'Unread';
        readButton.addEventListener('click', () => {
            changeReadStatus(i);
        });
        readCell.appendChild(readButton);
    }
}

function changeReadStatus(index) {
    myLibrary[index].read = !myLibrary[index].read;
    render();
}

const addBookButton = document.querySelector('.submit');
addBookButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    addBookToLibrary();
});


// Add some books to the library
const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 1937, false);
myLibrary.push(book1);
const book2 = new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', 423, 1954, false);
myLibrary.push(book2);
const book3 = new Book('The Two Towers', 'J.R.R. Tolkien', 352, 1954, false);
myLibrary.push(book3);
const book4 = new Book('The Return of the King', 'J.R.R. Tolkien', 416, 1955, false);
myLibrary.push(book4);
const book5 = new Book('The Silmarillion', 'J.R.R. Tolkien', 365, 1977, false);
myLibrary.push(book5);
const book6 = new Book('The Children of Hurin', 'J.R.R. Tolkien', 320, 2007, false);
myLibrary.push(book6);


render();