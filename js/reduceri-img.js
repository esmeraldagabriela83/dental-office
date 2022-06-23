console.log("reduceri img");

var reduceriImg=document.getElementById("reduceri-img");
console.log("reduceriImg is : " , reduceriImg);
reduceriImg.style.backgroundImage="url(./images/reduceri1.jpg)";//citire ca si cand ar fi in index html

const myTimeout = setTimeout(changeMoneyImg, 3000);

function changeMoneyImg() {
  // document.getElementById("reduceri-img").innerHTML = "Happy Birthday!"
console.log("after 3s I change the image reduceri1.jpg in reduceri2.jpg");
// reduceriImg.innerHTML = "Happy Birthday!"
reduceriImg.style.backgroundImage="url(./images/reduceri2.jpg)";//citire ca si cand ar fi in index html
}
///////////////////////////////////////////////////////////////////////////////////////////////

function clickChangeImg(){
  console.log("at click event  I change the image reduceri2.jpg in reduceri1.jpg");
  reduceriImg.style.backgroundImage="url(./images/reduceri1.jpg)";//citire ca si cand ar fi in index html
}

reduceriImg.addEventListener("click" , clickChangeImg);
