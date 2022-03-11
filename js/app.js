let div = document.querySelectorAll("div");
for (let i = 0; i < div.length; i++) {
    div[i].classList.add("tous");
}
let heure = 24
let minute = 00
setInterval(function(){
minute--
if(minute<0){
    minute = 59
    heure--
}

},60000)
