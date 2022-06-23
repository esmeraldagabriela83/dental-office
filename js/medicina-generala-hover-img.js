console.log("medicina generala hover img");

var myImg=document.getElementById('medicina-generala-img');
// myImg.style.border="5px solid yellowgreen";

myImg.style.backgroundImage="url(./images/medicina-generala1.jpg)";//il citeste ca si cand ar fi scris in html

var changeContent=function(event){
   event.preventDefault();
   myImg.style.backgroundImage="url(./images/medicina-generala-2.jpg)";
}

//click or mouseover
myImg.addEventListener("mouseover" , changeContent);
//////////////////////////////////////////////////////////////


var changeContentAgain=function(event){
   event.preventDefault();
   myImg.style.backgroundImage="url(./images/medicina-generala1.jpg)";
}
myImg.addEventListener("click" , changeContentAgain);
