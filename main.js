let myLibrary = []

function Book(title,author,pages,read) {
this.title =     title
this.author = author
this.pages = pages
this.read = read
this.info = function () {
  return {title,author,pages,read }
}    
}

function addBookToLibrary() {
  // do stuff here
}

const book1 = new Book('Lord of the rings','JRR Tolkien',479,'yes')

myLibrary.push(book1)


const book2 = new Book('War and Peace','Unk Author',400,'no')

myLibrary.push(book2)


function render() {

    for (let i =0;i<myLibrary.length;i++) {

        const title = document.createElement('div');
        title.innerHTML = myLibrary[i].title;
        document.querySelector('.container').appendChild(title);

        const author = document.createElement('div');
        author.innerHTML = myLibrary[i].author;
        document.querySelector('.container').appendChild(author);

        const pages = document.createElement('div');
        pages.innerHTML = myLibrary[i].pages;
        document.querySelector('.container').appendChild(pages);

        const read = document.createElement('div');
        read.innerHTML = myLibrary[i].read;
        document.querySelector('.container').appendChild(read);

        const del= document.createElement('button');
        del.innerHTML = 'delete'
        document.querySelector('.container').appendChild(del);
    }
}



function submitt () {
 
myLibrary = [];    

let title = document.getElementById("title").value;
let author = document.getElementById("author").value;
let pages = document.getElementById("pages").value;
let read = document.getElementById("read").value;


const book3= new Book(title,author,pages,read)

    myLibrary.push(book3)

    render()
}

function demo () {
    myLibrary[0] = []
    myLibrary[1] = []

    render()
}