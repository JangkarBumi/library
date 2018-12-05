let myLibrary = []

let counter = -1;


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

function render() {

    for (let i =0;i<myLibrary.length;i++) {

        const title = document.createElement('div');
        title.innerHTML = myLibrary[i].title;
        document.querySelector('.container').appendChild(title);
        title.setAttribute('id', counter)

        const author = document.createElement('div');
        author.innerHTML = myLibrary[i].author;
        document.querySelector('.container').appendChild(author);
        author.setAttribute('id', counter)

        const pages = document.createElement('div');
        pages.innerHTML = myLibrary[i].pages;
        document.querySelector('.container').appendChild(pages);
        pages.setAttribute('id', counter)

        const read = document.createElement('div');
        read.innerHTML = myLibrary[i].read;
        document.querySelector('.container').appendChild(read);
        read.setAttribute('id', counter)

        const del= document.createElement('button');
        del.innerHTML = 'delete'
        document.querySelector('.container').appendChild(del);
        del.setAttribute('id', counter)
        del.addEventListener("click", function () {
          demo(counter,1)
        }
        );
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
    counter++
    render()
}

function demo (counter,element) {
  myLibrary.splice(counter,element)

  for(let i=0;i<5;i++){
  var elem = document.getElementById(counter);
  elem.remove();
}
}



