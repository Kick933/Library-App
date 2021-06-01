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
        document.body.style.cssText = "background-color: white; color: black"
        darkmode = 0;
    }else if(darkmode == 0){
        document.body.style.cssText = "background-color: black; color: white; filter: brightness(0.8);"
        darkmode = 1;
    }
}
let darkmode = 0;
let temp;
const wrap = document.querySelector('#page-wrapper');
const dark = document.querySelector("#dark_mode");
dark.addEventListener('click', schemeChange);

