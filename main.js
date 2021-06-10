// used for dark mode toggle
function schemeChange(){
    const isDarkNodelist = document.querySelectorAll(".dark");
    const isDark = Array.from(isDarkNodelist);
    for(let i in isDark){
        temp = isDark[i];
        temp.classList.toggle("hidden");
    }
    const isWhiteNodelist = document.querySelectorAll(".white");
    const isWhite = Array.from(isWhiteNodelist);
    for( let i in isWhite){
        temp = isWhite[i];
        temp.classList.toggle("hidden");
    }
    if(darkmode == 1){
        document.body.style.cssText = "background-color:#d6e0f0; color: black"
        darkmode = 0;
    }else if(darkmode == 0){
        document.body.style.cssText = "background-color: black; color: white; filter: brightness(0.8);"
        darkmode = 1;
    }
}
const dark = document.querySelector("#dark_mode");
dark.addEventListener('click', schemeChange);
/////////////////////////////////////////////////////////



// The main Array which stores the objects.
let stored = [];


// Add event listener to create btn of add overlay
document.getElementById("create").addEventListener('click', ()=>{
    event.preventDefault();
    verifyInput();
});

// The Object constructor.
function Book(bookName,bookAuthor,bookPages,bookRead){
    this.name= bookName;
    this.author= bookAuthor;
    this.read= bookRead;
    this.pages= bookPages;
}
// function to toggle hidden class for overlays.
function toggleAddLayer(){
    document.getElementById("overlay").classList.toggle("hidden");
    document.getElementById("add-layer").classList.toggle("hidden");
}
// function to empty the form for book addition.
function resetTheForm(){
    document.getElementById("sub").reset();
}
// Add Eventlistener to ADD BUTTON and DARK OVERLAY.
document.querySelector("#add").addEventListener('click',toggleAddLayer)
document.querySelector("#overlay").addEventListener('click',toggleAddLayer)

//Declaring variables used.
let darkmode = 0;// used in schemechange function.
let temp; //Just a reusable temporary variable.

// Variable declaration ends

// Verification function for book pages before adding to library.
function verifyInput(){
    if(document.getElementById("name_of_book").value != "" &&
     document.getElementById("name_of_author").value !="" &&
     typeof(parseInt(document.getElementById("number_of_pages").value)) =="number" &&
     document.querySelector("#number_of_pages").value != ""){
    checkDuplicates();
    }else{
        alert("Please fill the form correctly.")
    }
}


// Adds book to stored array and calls the render function.
function addBookToLibrary(){
    toggleAddLayer();
    // Addition of the book to library array.
    let bookName = document.getElementById("name_of_book").value;
    let bookAuthor = document.getElementById("name_of_author").value;
    let bookPages = document.getElementById("number_of_pages").value;
    let bookRead = document.getElementById("read").checked;
    stored.push(new Book(bookName,bookAuthor,bookPages,bookRead));
    console.log(stored);
    resetTheForm();
    // Looping through array and creating DOM Elements for list
   renderBooks();
}
// Checks for duplicates in stored Array.
function checkDuplicates(){
        if(stored.length==0){
        }else{
        for(let i=0; i < stored.length; i++){
            const beingChecked = stored[i];
            if(document.querySelector("#name_of_book").value == beingChecked.name){
                alert("duplicates not allowed.");
                return;
            }
        }
}
    addBookToLibrary();
    }
// Loops through stored array after removing child element of id= "list" div and creates DOM Elements for list
function renderBooks(){
    document.querySelector("#list").textContent ="";
    for(let i = 0; i < stored.length; i++){
        const currentBook = stored[i];
        // Creates the card.
        const card = document.createElement('div');
        card.classList.add('book-card');
        card.setAttribute("id",`${i}`);
        card.setAttribute("data-index",`${i}`);
        // Push book name inside the card.
        const title = document.createElement('p');
        title.innerText = currentBook.name;
        title.classList.add("title")
        card.appendChild(title);
        // Push Book Author inside the card.
        writer = document.createElement('p');
        writer.innerText = currentBook.author;
        writer.classList.add("author")
        card.appendChild(writer);
        // Push Book pages inside the card.
        numberOfPages = document.createElement('p');
        numberOfPages.textContent = currentBook.pages;
        card.appendChild(numberOfPages);
        // Push Read status to the card.
        const readBtn = document.createElement('button')
        readBtn.classList.add('read');
        readBtn.setAttribute("id",`${i}`);
        if(currentBook.read == true){
            readBtn.innerText = "Read";
        }else{
            readBtn.innerText = "Not Read";
        }
        // Changes Read state of the book.
        readBtn.addEventListener('click', ()=>{
            if(currentBook.read == true){
                currentBook.read = false;
                readBtn.innerText = "Not Read";
            }else{
                currentBook.read = true;
                readBtn.innerText = "Read";
            }
        });
        card.appendChild(readBtn);
        
        // Push Remove Button to the card
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove');
        removeBtn.innerText ="Remove";
        removeBtn.addEventListener('click', ()=>{
            stored.splice(i,1);
            console.log(stored);
            renderBooks();
        });
        card.appendChild(removeBtn);

       
        // Append the card to DOM
        document.querySelector("#list").appendChild(card);
    }
}