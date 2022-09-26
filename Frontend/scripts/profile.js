const URL_API = "http://localhost:8080/"
var name_person = document.getElementById("name")
var lastname = document.getElementById("lastname")
var city = document.getElementById("city")
var address = document.getElementById("address")
var phone = document.getElementById("phone")
var email = document.getElementById("email")
var password = document.getElementById("password")

var person = null
var contact = null
var user = null

$(document).ready(function () {
    showInfo();
});

function showInfo() {
    user = {
        email: localStorage.getItem("email"),
        password: localStorage.getItem("password")
    }
    email.value = user.email
    password.value = user.password
    putInfoPerson(user);
    putInfoContact(user);

}

async function putInfoPerson(user) {
    const requestPerson = await fetch(URL_API + "personas/info", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    person = await requestPerson.json()
    name_person.value = person[0].names
    lastname.value = person[0].lastnames
}

async function putInfoContact(user) {
    const requestContact = await fetch(URL_API + "contactos/info", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    contact = await requestContact.json()
    city.value = contact[0].city
    phone.value = contact[0].phone
    address.value = contact[0].address
}

async function updateInfo() {
    try {
        updatePerson();
        updateContact();
        updateUser();
        await Swal.fire({
            icon: 'success',
            title: 'Persona actualizada con éxito',
            showConfirmButton: false,
            timer: 1500,
            color: '#524388'
        })
        // alert("Persona actualizada con éxito")
        window.location.href = "home.html";
    } catch (error) {
        console.log(error)
    }
}

async function updatePerson() {
    let personObject = {
        names: name_person.value,
        lastnames: lastname.value
    }
    const requestUpdtPerson = await fetch(URL_API + "personas/" + person[0].idPerson, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(personObject)
    });
}

async function updateContact() {
    let contactObject = {
        address: address.value,
        city: city.value,
        phone: phone.value
    }
    const requestUpdtContact = await fetch(URL_API + "contactos/" + person[0].idPerson, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactObject)
    });

}

async function updateUser() {
    let userObject = {
        email: email.value,
        password: password.value
    }
    localStorage.setItem("email", email.value)
    localStorage.setItem("password", password.value)
    const requestUpdtUser = await fetch(URL_API + "usuarios/" + person[0].idPerson, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObject)
    });
}