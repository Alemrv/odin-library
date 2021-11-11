const button = document.getElementById("button");
const test = document.getElementById("test");
var modal = document.getElementById("myModal");
var span = document.getElementById("close");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

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
    modal.style.display = "block";
    let book = prompt("Enter a book name");
    if (book != null) {
        myLibrary.push(book);
        console.log(myLibrary);
    }
    for (let index = 0; index < myLibrary.length; index++) {
        test.innerHTML += myLibrary[index];
    }
}

button.addEventListener("click", addBookToLibrary);
span.addEventListener("click", closeModal);

function closeModal(){
    modal.style.display = "none";
}
// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");

// console.log(theHobbit.info());

//paso 3