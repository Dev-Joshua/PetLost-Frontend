const URL_API = 'http://localhost:8080/login';

async function login(evt) {
    evt.preventDefault();
    let user = {
        email: document.getElementById('email').value,
        password: document.getElementById("password").value
    }

    console.log(user);

    const request = await fetch(URL_API, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    const response = await request.json();
    if (response) {
        window.location.href = "./html/home.html"
        const id_request = await fetch("http://localhost:8080/usuarios/id",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        localStorage.setItem("email",user.email)
        localStorage.setItem("password",user.password)
        localStorage.setItem("id", await id_request.json())
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Usuario y/o contraseña incorrecto',
        })
    }
}


// Esta funcion permite validar el correo electronico

function validation() {
    var form = document.getElementById('form');
    var email = document.getElementById('email').value;
    var text = document.getElementById('text');
    var pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;
    // Hasta que no copie un correo valido le saldra en rojo
    if (email.match(pattern)) {
        form.classList.add('valid');
        form.classList.remove('invalid');
        text.innerHTML = "Su email es válido"
        text.style.color = 'green';
    }
    // Si copia un correo valido, le saldra en verde
    else {
        form.classList.remove('valid');
        form.classList.add('invalid');
        text.innerHTML = "Ingrese un email válido"
        text.style.color = 'red';
    }
    if (email == "") {
        // Mientras este copiando le saldra en rojo
        // form.classList.remove('valid');
        // form.classList.remove('invalid');
        text.innerHTML = ""
        text.style.color = 'green';
    }
}


