// Esta funcion lo que hace es que cuando se de click en el boton de iniciar sesion te manda al formulario de inicio de sesion y viscebersa.

const btnSignIn = document.querySelector('.sign-in-btn'),
        btnSignUp = document.querySelector('.sign-up-btn');
        signUp = document.querySelector('.sign-up'),
        signIn = document.querySelector('.sign-in');
        // Cuando se de click en el boton de iniciar sesion te manda al otro formulario
document.addEventListener('click', e =>{
    if(e.target === btnSignIn || e.target === btnSignUp){
        signIn.classList.toggle('active');
        signUp.classList.toggle('active')
    }
})

// Esta funcion es para mostrar y ocultar la contrasena de la sesion de inicio de sesion.
const password = document.getElementById('password');
const toggle = document.getElementById('toggle');
function showHide() {
    if(password.type === 'password'){
        password.setAttribute('type', 'text');
        toggle.classList.add('hide');
    }
    else{
        password.setAttribute('type', 'password');
        toggle.classList.remove('hide');
    }
}

// Esta funcion permite validar el correo electronico

function validation(){
    var form = document.getElementById('form');
    var email = document.getElementById('email').value;
    var text = document.getElementById('text');
    var pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;
    // Hasta que no copie un correo valido le saldra en rojo
    if (email.match(pattern)){
        form.classList.add('valid');
        form.classList.remove('invalid');
        text.innerHTML = "Su email es valido"
        text.style.color = 'green';
    }
    // Si copia un correo valido, le saldra en verde
    else{
        form.classList.remove('valid');
        form.classList.add('invalid');
        text.innerHTML = "Por favor ingrese un mail valido"
        text.style.color = 'red';
    }
    if (email == ""){
        // Mientras este copiando le saldra en rojo
        form.classList.remove('valid');
        form.classList.remove('invalid');
        text.innerHTML = ""
        text.style.color = 'green';
    }
}