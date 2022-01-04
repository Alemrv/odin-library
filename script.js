const button = document.getElementById("button");
const test = document.getElementById("test");
let modal = document.getElementById("myModal");
let span = document.getElementById("close");
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//create div block for books

let myLibrary =[];

function Book(name, author, title, pages, isRead){
    this.name = name;
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = isRead;
}

/*Book.prototype.info = function(){
    return `${this.name} ${this.author} ${this.title} ${this.pages} ${this.isRead}`;
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");

console.log(theHobbit.info());
*/

let className = "book"; //created books
let counter = 0; //is added to every book so each one has a different class

function addBookToLibrary(){
    modal.style.display = "block";
    let book = prompt("Enter a book name");

    if (book != null) {
      myLibrary.push(book);
      let div = document.createElement("div");
      div.classList.add(className + counter);
      test.appendChild(div);

      for (let index = 0; index < myLibrary.length; index++) {
        let div = document.querySelector(`.${className}`+ counter); //gets LAST element that matches the name
        div.textContent = myLibrary[index];
      }
    }
    counter++;
}

button.addEventListener("click", addBookToLibrary);
span.addEventListener("click", closeModal);

function closeModal(){
    modal.style.display = "none";
}
