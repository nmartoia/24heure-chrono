let div = document.querySelectorAll("div");
let heure1 = 2;
let heure2 = 4;
let minute1 = 0;
let minute2 = 0;
let cadence = 60000;
if(heure1==2){
    div[0].className = "droithautbas"
    div[1].className = "gauchhautbas"
}
if(heure2==4){
    div[2].className = "gauchdroitbas"
    div[3].className = "droit"
}
if(minute1==0){
    div[4].className = "gauchhautdroit"
    div[5].className = "gauchdroitbas"
}
if(minute2==0){
    div[6].className = "gauchhautdroit"
    div[7].className = "gauchdroitbas"
}
setInterval(function(){
minute2--
if(minute2<0){
    minute1 --
    minute2 = 9
}
if(minute1<0){
    heure2--
    minute1 =5
}
if(heure2<0){
    heure1--
    heure2=9
}
if(heure1<0){
    heure1 = 2
    heure2 = 4
    minute1 = 0
    minute2 = 0
}
if(heure1==2){
    div[0].className = "droithautbas"
    div[1].className = "gauchhautbas"
}
else if(heure1==1){
    div[0].className = "droit"
    div[1].className = "droit"
}
else if(heure1==0){
    div[0].className = "gauchhautdroit"
    div[1].className = "gauchdroitbas"
}
if(heure2 ==9){
    div[2].className = "tous"
    div[3].className = "droitbas"
}
else if(heure2 ==8){
    div[2].className = "tous"
    div[3].className = "tous"
}
else if(heure2 ==7){
    div[2].className = "droithaut"
    div[3].className = "droit"
}
else if(heure2 ==6){
    div[2].className = "gauchhaut"
    div[3].className = "tous"
}
else if(heure2 ==5){
    div[2].className = "gauchhautbas"
    div[3].className = "droithautbas"
}
else if(heure2==4){
    div[2].className = "gauchdroitbas"
    div[3].className = "droit"
}
else if(heure2==3){
    div[2].className = "droithautbas"
    div[3].className = "droithautbas"
}
else if(heure2==2){
    div[2].className = "droithautbas"
    div[3].className = "gauchhautbas"
}
else if(heure2==1){
    div[2].className = "droit"
    div[3].className = "droit"
}
else if(heure2==0){
    div[2].className = "gauchhautdroit"
    div[3].className = "gauchdroitbas"
}
if(minute1 ==5){
    div[4].className = "gauchhautbas"
    div[5].className = "droithautbas"
}
else if(minute1==4){
    div[4].className = "gauchdroitbas"
    div[5].className = "droit"
}
else if(minute1==3){
    div[4].className = "droithautbas"
    div[5].className = "droithautbas"
}
else if(minute1==2){
    div[4].className = "droithautbas"
    div[5].className = "gauchhautbas"
}
else if(minute1==1){
    div[4].className = "droit"
    div[5].className = "droit"
}
else if(minute1==0){
    div[4].className = "gauchhautdroit"
    div[5].className = "gauchdroitbas"
}
if(minute2 ==9){
    div[6].className = "tous"
    div[7].className = "droitbas"
}
else if(minute2 ==8){
    div[6].className = "tous"
    div[7].className = "tous"
}
else if(minute2 ==7){
    div[6].className = "droithaut"
    div[7].className = "droit"
}
else if(minute2 ==6){
    div[6].className = "gauchhaut"
    div[7].className = "tous"
}
else if(minute2 ==5){
    div[6].className = "gauchhautbas"
    div[7].className = "droithautbas"
}
else if(minute2==4){
    div[6].className = "gauchdroitbas"
    div[7].className = "droit"
}
else if(minute2==3){
    div[6].className = "droithautbas"
    div[7].className = "droithautbas"
}
else if(minute2==2){
    div[6].className = "droithautbas"
    div[7].className = "gauchhautbas"
}
else if(minute2==1){
    div[6].className = "droit"
    div[7].className = "droit"
}
else if(minute2==0){
    div[6].className = "gauchhautdroit"
    div[7].className = "gauchdroitbas"
}
console.log(heure1,heure2,minute1,minute2)
},cadence)
