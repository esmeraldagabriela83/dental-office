console.log("team-images.js");

var imgImg=document.getElementById("img-img");


imgImg.style.marginTop="5em";

imgImg.src="./images/team1.jpg";

const arrayImg=["./images/team1.jpg" , "./images/team2.jpg" , "./images/team3.jpg"];
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
