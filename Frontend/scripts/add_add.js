URL_API = "http://localhost:8080/mascotas/add"
async function createPet(evt){
    evt.preventDefault();
    const form = evt.target;
    let pet = {
        name: form.name.value,
        photo: form.photo.value,
        dateLost: form.dateLost.value,
        placeLost: form.placeLost.value,
        id_person: 2,
        id_kindpet: 1,
    }

    let formData = new FormData();
    formData.append('name', form.name.value);
    formData.append('photo', form.photo.value);
    formData.append('dateLost', form.dateLost.value);
    formData.append('placeLost', form.placeLost.value);
    formData.append('id_person', 2);
    formData.append('id_kindpet', 1);

    console.log(form.photo.value)
    const request = await fetch(URL_API,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pet)
    });
}