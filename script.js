fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
  .then(res => res.json())
  .then(res => displayBooks(res))
  .catch(error => console.error('Error fetching data:', error)); 

let Div = document.getElementById("root");
let Div3 = document.getElementById("all-books");




function displayBooks(res) {
  console.log(res);

  const startIndex = 18;
  for (let i = startIndex ; i <  startIndex + 4; i++) {
    if (i < res.length) {
    Div.innerHTML += `
      <div class="Card" style=" padding: 10px; flex: 1 1 200px; " >
        <img style= "width: 75%" src="${res[i].simple_thumb}" />
        <h4 class="py-2">${res[i].title}</h4>
        <p class="font-very-small"> ${res[i].author}</p>
      </div>
    `;
  }
 }
const maxBooksToDisplay = 8;
const totalBooks = Math.min(res.length, maxBooksToDisplay);


for (let i = 0; i < totalBooks; i++) {
    const book = res[i];
    
    Div3.innerHTML += `
        <div class="col-md-3 mb-4">
            <div class="book-item" style="padding: 10px; flex: 1 1 200px;"> 
                <img style="width: 100%" src="${book.simple_thumb}"/>
                <h6 class="card-subtitle mb-2 text-muted">${book.title}</h6>
                <p class="card-text">${book.author}</p>
            </div>
        </div>
    `;
}
}

fetch('https://wolnelektury.pl/api/books/studnia-i-wahadlo/')
  .then(res => res.json())
  .then(res => displayOnlyBook(res))

  let Div2 = document.getElementById("one");
 
function displayOnlyBook(res){
const single=res[0];
  Div2.innerHTML=
  ` 
   <div class="row">
      <div class="col-sm-6">
         <img style= "width: 90%" src="${single.cover}" />
      </div>
      <div class="col-sm-6">
        <h4>Best Selling Book</h4>
        <p>${single.title}</p>
      </div>
    </div>
  </div>
  
  `
  }

