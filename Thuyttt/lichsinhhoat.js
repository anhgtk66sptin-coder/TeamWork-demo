// =======================
// ĐỔI MÀU NỀN
// =======================


const themeBtn =
document.getElementById("themeToggle");



if(themeBtn){


themeBtn.onclick=function(){


document.body.classList.toggle("dark");



themeBtn.innerHTML =
document.body.classList.contains("dark")
?
"☀️"
:
"🌙";


}


}






// =======================
// ĐẾM NGƯỢC BUỔI SINH HOẠT
// =======================


const countdown =
document.getElementById("countdown");



if(countdown){



let eventTime =
new Date(
"November 15, 2026 08:00:00"
).getTime();



setInterval(()=>{


let now =
new Date().getTime();



let distance =
eventTime-now;



let days =
Math.floor(
distance/(1000*60*60*24)
);



let hours =
Math.floor(
(distance%(1000*60*60*24))
/
(1000*60*60)
);



let minutes =
Math.floor(
(distance%(1000*60*60))
/
(1000*60)
);



let seconds =
Math.floor(
(distance%(1000*60))
/1000
);



countdown.innerHTML =

days+" ngày "
+
hours+" giờ "
+
minutes+" phút "
+
seconds+" giây";



},1000);


}





// =======================
// LỌC LỊCH SINH HOẠT
// =======================


const filter =
document.getElementById("filter");



if(filter){


filter.addEventListener(
"change",
function(){


let value =
this.value;



let activities =
document.querySelectorAll(".activity");



activities.forEach(item=>{


if(
value=="all"
||
item.dataset.type==value
){


item.style.display="block";


}

else{


item.style.display="none";


}


});


});


}