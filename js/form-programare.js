console.log("form-programare.js");

const form=document.getElementById("form");
console.log("form is : " , form);

const username=document.getElementById("username");
console.log("username is : " , username);

const tel=document.getElementById("phone");
console.log("tel is : " , tel);

const email=document.getElementById("email");
console.log("email is : " , email);

const password=document.getElementById("password");
console.log("password is : " ,password);

const passwordCheck=document.getElementById("password-check");
console.log("passwordCheck is : " ,passwordCheck);

const message=document.getElementById("message");
console.log("message is : " ,message);

form.addEventListener("submit" , (event) =>{
  event.preventDefault();
//apel functie when submit //click btn Trimite
checkInputs();

})

function checkInputs(){

//get the values from inputs

const usernameValue=username.value.trim() ;
console.log("usernameValue is : " ,usernameValue);

const telValue=tel.value.trim() ;
console.log("telValue is : " ,telValue);

const emailValue=email.value.trim() ;
console.log("emailValue is : " ,emailValue);

const passwordValue=password.value.trim() ;
console.log("passwordValue is : " ,passwordValue);

const passwordCheckValue=passwordCheck.value.trim() ;
console.log("passwordCheckValue is : " ,passwordCheckValue);
////////////////////////////////////////////////////////////////////////////////////////////////////////////
const messageValue=message.value.trim() ;
console.log("messageValue is : " ,messageValue);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(usernameValue === ""){
  //show console.error
  //add error class;
  setErrorFor(username , "Completeza numele");
}else{
  //add sucess class;
  setSuccessFor(username);
}
//////////////////
if(telValue !== 10){
  //show console.error
  //add error class;
  setErrorFor(tel , "Completeza numarul de telefon");
}else{
  //add sucess class;
  setSuccessFor(tel);
}
/////////////////////////
if(emailValue === '') {
		setErrorFor(email, 'Completeza email');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Email nevalid');
	} else {
		setSuccessFor(email);
	}
///////////////////////////////////////
if(passwordValue === '') {
		setErrorFor(password, 'Completeza parola');
	} else {
		setSuccessFor(password);
	}

  if(passwordCheckValue === '') {
  		setErrorFor(passwordCheck, 'Spatiul verificare parola nu poate fi gol');
  	} else if(passwordValue !== passwordCheckValue) {
  		setErrorFor(passwordCheck, 'Nepotrivire parole');
  	} else{
  		setSuccessFor(passwordCheck);
  	}

    //////////////////////////////////////////////////////////

    if(messageValue === ""){
      //show console.error
      //add error class;
      setErrorForTextarea(message , "Completeza mesaj");
    }else{
      //add sucess class;
      setSuccessForTextarea(message);
    }

}

function setErrorFor(input, message) {
	const formControl = input.parentElement.parentElement;
	const small = formControl.querySelector('.form-control small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement.parentElement;
	formControl.className = 'form-control success';
}

//////////////////////

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
//////////////////////////////////////////////////////////////////////////////////


function setErrorForTextarea(textarea, message) {
	const formControl = textarea.parentElement.parentElement;
	const small = formControl.querySelector('.form-control small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessForTextarea(textarea) {
	const formControl = textarea.parentElement.parentElement;
	formControl.className = 'form-control success';
}

















//
