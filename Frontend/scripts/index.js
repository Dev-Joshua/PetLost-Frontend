const URL_API = 'http://localhost:8080/login';

async function login(evt) {
    evt.preventDefault();
    let user = {
        email: document.getElementById('email').value,
        password: document.getElementById("password").value
    }

    // console.log(user);

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
        const id_request = await fetch("http://localhost:8080/usuarios/id", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        localStorage.setItem("email", user.email)
        localStorage.setItem("password", user.password)
        localStorage.setItem("id", await id_request.json())
        window.location.href = "./html/home.html"
        
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Usuario y/o contraseña incorrecto',
        })
    }
}

///EMAIL CHECK FROM DATABASE///

// $(document).ready(function () {
//     $('#email').blur(function () {
//         var email = $(this).val();
//         $.ajax({
//             url: 'http://localhost:8080/usuarios/id',
//             method: "POST",
//             data: { email: emailValue },
//             success: function (data) {
//                 if (data != '0') {
//                     setError(email, 'Lo sentimos, este correo ya se encuentra registrado');

//                 }
//                 else {
//                     setSuccess(email);
//                 }
//             }

//         });
//     })
// });

///EMAIL CHECK FROM DATABASE///

// Mostrar contraseña

const password = document.getElementById('password');
const toggle = document.getElementById('toggle');

function showHide() {
    if (password.type === 'password') {
        password.setAttribute('type', 'text');
        toggle.classList.add('hide')
    } else {
        password.setAttribute('type', 'password');
        toggle.classList.remove('hide')
    }
}