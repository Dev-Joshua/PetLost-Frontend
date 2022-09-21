const URL_API = 'http://localhost:8080/login';

async function login(evt){
    evt.preventDefault();
    const form = evt.target;
    let user = {
        email: form.email.value,
        password: document.getElementById("password").value
    }

    console.log(user);

    const request = await fetch(URL_API,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    const response = await request.json();
    
    if(response){
        window.location.href = "./html/home.html"
    }else{
        alert("Usuario y/o contraseña incorrecto")
    }

}



