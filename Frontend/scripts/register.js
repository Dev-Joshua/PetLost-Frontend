const URL_API = "http://localhost:8080/"
async function registerUser(evt){
    evt.preventDefault();
    //Creo una lista y le meto los valores que hay en el input para nombre y apellido (TABLA PERSONA)
    let data_person = {};
    data_person.names = document.getElementById("name_input").value;
    data_person.lastnames = document.getElementById("lastname_input").value;
    
    //Hago una petición POST al back para que guarde esa info en la tabla personas de la BD
    const request_person = await fetch(URL_API + "personas/add", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data_person) //Como necesita un objeto tipo persona para registrar, le paso la lista que tiene la info
    });

    //La petición regrea el id de la persona que creó en la BD
    const id_person = await request_person.json();

    //Creo una lista y le meto los valores que hay en el input para la tabla CONTACTO
    let data_contact = {};
    data_contact.id_person = id_person; //Llave foranea que referencia la persona que pertenecen los contactos
    data_contact.city = document.getElementById("city_input").value;
    data_contact.phone = document.getElementById("phone_input").value;
    data_contact.address = document.getElementById("address_input").value;

    //Petición POST para que guarde la info en la tabla contactos de la BD
    const request_contact = await fetch(URL_API+'contactos/add', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data_contact)
    });

    //Creo una lista y le meto los valores que hay en el input para la tabla USUARIO
    let data_user = {};
    data_user.id_person = id_person; //Llave foranea que referencia a la persona que pertenece el usuario
    data_user.email = document.getElementById("email_input").value;
    data_user.password = document.getElementById("pass_input").value;
    let repeat_pass = document.getElementById("repeat_pass_input").value;

    //Verifica que las dos contraseñas sean iguales
    if(data_user.password != repeat_pass){
        alert("La contraseña es diferenre");
        return;
    }
    
    //Hace petición POST para crear el Usuario
    const request_user = await fetch(URL_API + 'usuarios/add', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data_user)
    });

    await Swal.fire('Usuario registrado con éxito')
    window.location.href="../index.html"

    
}