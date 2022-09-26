URL_API = "http://localhost:8080/mascotas/add"
document.getElementsByClassName("profile-name")[0].innerHTML = localStorage.getItem("namePerson")
async function createPet(evt) {
    evt.preventDefault();
    const form = evt.target;
    var pet = {
        name: form.name.value,
        dateLost: form.dateLost.value,
        placeLost: form.placeLost.value,
        details: document.getElementById("details").value,
        id_person: localStorage.getItem("id"),
        id_kindpet: 1,
    }
    let input = document.getElementById("input_image")
    var file = input.files[0];
    var reader = new FileReader();
    reader.onloadend = async function () {
        // console.log('RESULT', reader.result)
        pet.photo = reader.result
        const request = await fetch(URL_API, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pet)
        });
    }
    reader.readAsDataURL(file)
    await Swal.fire('Mascota creada con éxito')
    window.location.href = "./home.html"
}