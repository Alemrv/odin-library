const addBook = document.getElementById("addBook");
const test = document.getElementById("test");
const modal = document.getElementById("myModal");
const span = document.getElementById("close");
const fromSubmit = document.getElementById("fromSubmit");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//create div block for books

let myLibrary = [];

function Book(name, author, title, pages, isRead) {
  this.name = name;
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.isRead = isRead;
}

function openModal() {
  modal.style.display = "block";
}
addBook.addEventListener("click", openModal);


function closeModal() {
  return modal.style.display = "none";
}
span.addEventListener("click", closeModal);

let className = "book"; //created books
let counter = 0; //is added to every book so each one has a different class

function addDataToBook() {

  const bName = document.getElementById("bName").value;
  const author = document.getElementById("author").value;
  const title = document.getElementById("title").value;
  const pages = document.getElementById("pages").value;
  const check = document.getElementById("check").value;

  const books = new Book(bName, author, title, pages, check);

  Book.prototype.info = function () {
    return `${this.name} ${this.author} ${this.title} ${this.pages}${this.isRead}`;
  }
  console.log(books.info());
  console.log(Object.keys(books)[0]);

  myLibrary.push(bName);

  console.log(myLibrary);

  let div = document.createElement("div");
  div.classList.add(className + counter);
  test.appendChild(div);

  const bookArr = Object.values(books);
  let card = document.querySelector(`.${className}` + counter); //gets LAST element that matches the name

  for (let i = 0; i < Object.keys(books).length; i++) {
    let h3 = document.createElement("h3");
    card.appendChild(h3);
    h3.innerText += bookArr[i];
  }
  counter++;
  closeModal();
}

fromSubmit.addEventListener("click", addDataToBook);