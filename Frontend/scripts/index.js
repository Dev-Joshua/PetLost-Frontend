const URL_API = 'http://localhost:8080/login';

async function login(evt) {
    evt.preventDefault();
    let user = {
        email: document.getElementById('email').value,
        password: document.getElementById("password").value
    }

    const request_login = await fetch(URL_API, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    const response = await request_login.json();
    if (response) {
        const id_request = await fetch("http://localhost:8080/usuarios/id", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        let id_person = await id_request.json();
        let name_person = await savePersonInSession(id_person);

        localStorage.setItem("email", user.email)
        localStorage.setItem("password", user.password)
        localStorage.setItem("id", id_person)
        localStorage.setItem("namePerson", name_person)
        window.location.href = "./html/home.html"
        
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Usuario y/o contraseña incorrecto',
        })
    }
}


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

async function savePersonInSession(id){
    const person_request = await fetch("http://localhost:8080/personas/"+id,{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    let person = await person_request.json()
    console.log(person.names)
    return person.names;
}