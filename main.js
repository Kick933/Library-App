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

// The main Array which stores the objects.
let stored = [];

const dark = document.querySelector("#dark_mode");
dark.addEventListener('click', schemeChange);

function Book(bookName,bokAuthor,bookPages,bookRead){
    this.name= bookName;
    this.author= bookAuthor;
    this.read= bookRead;
    this.pages= bookPages;
}
// function to toggle hideen classes of 
function toggleAddLayer(){
    document.getElementById("overlay").classList.toggle("hidden");
    document.getElementById("add-layer").classList.toggle("hidden");
}
// Add Eventlistener to ADD BUTTON and DARK OVERLAY.
document.querySelector("#add").addEventListener('click',toggleAddLayer)
document.querySelector("#overlay").addEventListener('click',toggleAddLayer)

//Declaring variables used.
let darkmode = 0;// used in schemechange function.
let temp; //Just a reusable temporary variable.
let bookName;// used for getting book name from DOM
let bookAuthor;// used for getting book author from DOM
let bookPages;// used for getting pages of book from DOM
let bookRead;// Used to get book read status from DOM
// Variable declaration ends
function addBookToLibrary(){
    bookName = document.getElementById("name_of_book").value;
    bookAuthor = document.getElementById("name_of_author").value;
    bookPages = document.getElementById("number_of_pages").value;
    bookRead = document.getElementById("read").checked;
    stored.push(new Book(bookName,bookAuthor,bookPages,bookRead));
    console.log(stored);
}


document.getElementById("create").addEventListener('click', addBookToLibrary);
