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

function Book(name,author,read,pages){
    name: name;
    author: author;
    read: read;
    pages: pages;
}

// To toggle overlay
const overlay = document.querySelector("#overlay");

const addBtn = document.querySelector("#add");
addBtn.addEventListener('click', ()=>{
    document.getElementById("overlay").classList.toggle("hidden");
    document.getElementById("add-layer").classList.toggle("hidden");
})

//Declaring variables used.
let darkmode = 0;// used in schemechange function.
let temp; //Just a reusable temporary variable.
let bookName;// used for getting book name from DOM
let bookAuthor;// used for getting book author from DOM
let bookPages;// used for getting pages of book from DOM
let bookRead;// Used to get book read status from DOM
// Variable declaration ends
function addBookToLibrary(){
    document.getElementById("name_of_book").value
}