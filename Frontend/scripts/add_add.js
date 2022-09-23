URL_API = "http://localhost:8080/mascotas/add"
async function createPet(evt) {
    evt.preventDefault();
    const form = evt.target;
    let pet = {
        name: form.name.value,
        photo: "form.photo.value",
        dateLost: form.dateLost.value,
        placeLost: form.placeLost.value,
        id_person: 2,
        id_kindpet: 1,
        details: "Prueba"
    }

    console.log(form.photo.value)
    const request = await fetch(URL_API, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pet)
    });
}