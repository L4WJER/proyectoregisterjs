const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});

function captura(){
  var nombre=document.getElementById("nombre").value;
  var email=document.getElementById("email").value;
  var psw=document.getElementById("psw").value;
  console.log(nombre +" "+email +" "+psw);
  if(nombre==""){
    alert("completar el nombre es obligatorio");
    document.getElementById("nombre").focus();
  }else{ if(email==""){
    alert("completar el email es obligatorio");
    document.getElementById("email").focus();
  }else { if(psw==""){
    alert("completar la contraseña es obligatorio");
    document.getElementById("psw").focus();
  }}


}}

