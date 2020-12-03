//dot&image

var slideIndex = 0;
showSlides();
function showSlides(){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var imagedots = document.getElementsByClassName("image-dot");
  for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length){
    slideIndex = 1;
  }    
  for (i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email1');
const phone = document.getElementById('phone');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const messageValue = message.value.trim();
  var phoneno = /^\d{10}$/;
  var letters = /^[A-Za-z]+$/;
  console.log(messageValue)
  
  if(nameValue=="")
  {
    document.getElementById('name_error').innerHTML="Please fill the name field ! ";
  }
  if(emailValue=="")
  {
    document.getElementById('email_error').innerHTML="Please fill the email field !";
  }
  if(phoneValue=="")
  {
    document.getElementById('phone_error').innerHTML="Please fill the phone number field !";
  }
  if(messageValue=="")
  {
    document.getElementById('message_error').innerHTML="Please add a message ! ";
  }

  if(!(nameValue.match(letters)) && nameValue!="")
  {
    document.getElementById('name_error').innerHTML="name field should contain only alphabets ! ";
  }

  if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailValue)) && emailValue!="")
  {
    document.getElementById('email_error').innerHTML="Please enter a valid email address !";
  }
  if(!(phoneValue.match(phoneno)) && phoneValue!="")
  {
    document.getElementById('phone_error').innerHTML="Phone number is invalid !";
  }
  
}


  
