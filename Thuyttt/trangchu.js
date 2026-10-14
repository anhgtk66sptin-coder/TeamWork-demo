// ========================
// ĐỔI MÀU NỀN LIGHT / DARK
// ========================


const themeBtn =
document.getElementById("themeToggle");



if(themeBtn){


themeBtn.onclick=function(){


document.body.classList.toggle("dark");



if(
document.body.classList.contains("dark")
){

themeBtn.innerHTML="☀️";


}

else{


themeBtn.innerHTML="🌙";


}



}


}





// ========================
// HIỆU ỨNG CHÀO MỪNG
// ========================


window.onload=function(){


console.log(
"Chào mừng đến với CLB Tin học"
);


};





// ========================
// HIỆU ỨNG CUỘN TRANG
// ========================


const cards =
document.querySelectorAll(".card");



window.addEventListener(
"scroll",
()=>{


cards.forEach(card=>{


let position =
card.getBoundingClientRect().top;



let screen =
window.innerHeight;



if(position < screen-100){


card.style.opacity="1";

card.style.transform=
"translateY(0)";


}



});


});



cards.forEach(card=>{


card.style.opacity="0";

card.style.transform=
"translateY(50px)";

card.style.transition=
"0.6s";


});