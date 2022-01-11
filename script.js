const addBookBtn = document.getElementById("addBookBtn");
const test = document.getElementById("test");
const modal = document.getElementById("myModal");
const span = document.getElementById("close");
const fromSubmit = document.getElementById("fromSubmit");
const errorMsg = document.getElementById("errorMsg");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    errorMsg.style.display = "none";
  }
};
//create div block for book

let myLibrary = [];

function Book(name, author, pages, isRead) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

Book.prototype.status = function (element) {
  element.addEventListener("click", () => {
    if (element.innerText === "read") {
      element.innerText = "not read";
    } else {
      element.innerText = "read";
    }
  });
};

function openModal() {
  modal.style.display = "block";
  errorMsg.style.display = "none";
}
addBookBtn.addEventListener("click", openModal);

function closeModal() {
  return (modal.style.display = "none");
}
span.addEventListener("click", closeModal);

let className = "book"; //created book
let counter = 0; //is added to every book so each one has a different class

let readStatus = "status";

function addDataToBook() {
  const bName = document.getElementById("bName").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const check = document.getElementById("check");

  const book = new Book(bName, author, pages, check);

  if (myLibrary.indexOf(book.name) === -1 && book.name !== "") {
    myLibrary.push(book.name);
    createElement("div", className + counter, test);

    const bookArr = Object.values(book);
    let card = document.querySelector(`.${className}` + counter); //gets First element that matches the name

    for (let i = 0; i < Object.keys(book).length - 1; i++) {
      let h3 = document.createElement("h3");
      card.appendChild(h3);
      h3.innerText += bookArr[i];
    }

    createElement("button", readStatus + counter, card);
    let status = document.querySelector(`.${readStatus}` + counter);

    if (book.isRead.checked) {
      status.innerText = "read";
    } else {
      status.innerText = "not read";
    }

    const remove  = document.createElement('button');
    card.appendChild(remove);
    remove.textContent = "Remove";
    remove.onclick = removeBook;
    counter++;
    closeModal();

    book.status(status);
  }
  else{
    errorMsg.style.display = "block";
    errorMsg.textContent = "this book is already in your library";
  }
}
const removeBook = ((e)=>{
  const bookTitle = e.target.parentNode.firstChild.textContent;
  const newLib = myLibrary.filter((e)=>{
    return e !== bookTitle;
  })
  myLibrary = newLib;
  e.target.parentNode.remove(e);
  console.log(myLibrary);
})

function createElement(type, className, parent) {
  let element = document.createElement(type);
  element.classList.add(className);
  parent.appendChild(element);
}

fromSubmit.addEventListener("click", addDataToBook);
