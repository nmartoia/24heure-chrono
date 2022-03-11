let div = document.querySelectorAll("div");
for (let i = 0; i < div.length; i++) {
    div[i].className = ("tous");
}
let heure1 = 2
let heure2 = 4
let minute1 = 0
let minute2 = 0
setInterval(function(){
minute2--
if(minute2<0){
    minute1 --
    minute2 = 9
}
else if(minute1>0){
    heure2--
    minute1 =5
}
else if(heure2<0){
    heure1--
    heure2=9
}
else if(heure1>0){
    heure1 = 2
    heure2 = 4
    minute1 = 0
    minute2 = 0
}
console.log(heure1,heure2,minute1,minute2)
},60000)
if(heure1==2){
    div[0].className = "droithautbas"
    div[1].className = "gauchhautbas"
}
