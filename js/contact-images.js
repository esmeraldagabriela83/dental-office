console.log("contact-images.js");

var imgImg=document.getElementById("img-img");


imgImg.style.marginTop="5em";

imgImg.src="./images/contact1.jpg";

const arrayImg=["./images/contact1.jpg" , "./images/contact2.jpg" , "./images/contact3.jpg"]
var j=0 ;
function changeImg(){
    imgImg.src= arrayImg[j];
  if(j<arrayImg.length -1){
   j++
  }else{
    j=0;
  }
}
setInterval(changeImg, 3000);
