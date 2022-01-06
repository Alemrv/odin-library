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
};
//create div block for books

let myLibrary = [];

function Book(name, author, title, pages, isRead) {
  this.name = name;
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.isRead = isRead;
}

Book.prototype.status = function () {
  this.isRead = false;
  return this.isRead;
};

function openModal() {
  modal.style.display = "block";
}
addBook.addEventListener("click", openModal);

function closeModal() {
  return (modal.style.display = "none");
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

  console.log(books.status());
  console.log(Object.keys(books));

  myLibrary.push(bName);

  console.log(myLibrary);

  createElement("div", className + counter, test);

  const bookArr = Object.values(books);
  let card = document.querySelector(`.${className}` + counter); //gets LAST element that matches the name

  for (let i = 0; i < Object.keys(books).length - 1; i++) {
    let h3 = document.createElement("h3");
    card.appendChild(h3);
    h3.innerText += bookArr[i];
  }

  createElement("button", "status", card);
  let status = document.querySelector(".status");
  status.innerHTML = "read";

  createElement("button","remove", card);
  let selectRemoveBtn = document.querySelectorAll(".remove");
  selectRemoveBtn.forEach((item) => {
    item.innerHTML = "remove";
    item.addEventListener("click", () => {
      item.parentNode.remove(item);
    });
  });
  counter++;

  closeModal();
}

function createElement(type, className, parent) {
  let element = document.createElement(type);
  element.classList.add(className);
  parent.appendChild(element);
}

fromSubmit.addEventListener("click", addDataToBook);
