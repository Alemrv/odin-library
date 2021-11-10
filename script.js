const button = document.getElementById("button");

let myLibrary =[];

function Book(name, author, pages, isRead){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}
Book.prototype.info = function(){
    return `${this.name} ${this.author} ${this.pages} ${this.isRead}`;
}

function addBookToLibrary(){
    let book = prompt("Enter a book name");
    if (book != null) {
        myLibrary.push(book);
        console.log(myLibrary);
    }
}

button.addEventListener("click", addBookToLibrary);

// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");

// console.log(theHobbit.info());

//paso 3