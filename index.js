class Book {
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;}
}


class UI {
  static displayBooks(){
const StoredBooks = [
{
  title: 'Book One',
  author: 'John Doe',
  isbn: '3434434'
},
{
  title: 'Book Two',
  author: 'Jane Doe',
  isbn: '45545'
}
];
const books = StoredBooks;
books.forEach((book) => UI.addBookToList(book));
}

static addBookToList(book) {
  const list = document.querySelector('#book-list');

  const row = document.createElement('tr');

row.innerHTML = `
<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.isbn}</td>
<td><a href ="#" class ="btn btn-danger btn-sm delete">X</a></td>`;
list.appendChild(row);
}

static deleteBook(el){
  if(el.classList.contains('delete')){
el.parentElement.parentElement.remove();

  }
}

static showAlert(message, className){
  const div = document.createElement('div');
div.className = `alert alert-${className}`;
div.appendChild(document.createTextNode(message));
const container = document.querySelector('.container');
const form = document.querySelector('#book-form');
container.insertBefore(div, form);
// Vanishing in 3 sec.
setTimeout(()=>
  document.querySelector('.alert').remove(),3000);

}

static clearFields(){
  document.querySelector('#title').value = "";
  document.querySelector('#author').value = "";
  document.querySelector('#isbn').value = "";
}
}




document.addEventListener('DOMContentLoaded', UI.displayBooks);




document.querySelector('#book-form').addEventListener('submit', (e)=>
{
e.preventDefault();

const title = document.querySelector("#title").value;
const author = document.querySelector("#author").value;
const isbn = document.querySelector("#isbn").value;

//validate
if(title === '' || author === '' || isbn === ''){
  UI.showAlert('Please fill in all fields', 'danger');
}else{
const book = new Book(title, author, isbn);
console.log(book)

// add book to UI;
UI.addBookToList(book);

//show succes message
UI.showAlert('book added', 'success');
// clear fields
UI.clearFields();
}
});




//event remove a book;
document.querySelector('#book-list').addEventListener('click', (e)=>{

UI.deleteBook(e.target);
//show succes message
UI.showAlert('book removed', 'danger');

})
