URL_API = "http://localhost:8080/mascotas/add";
const id_kind_pet = {
    'cat': 1,
    'dog': 2
}
document.getElementsByClassName("profile-name")[0].innerHTML = localStorage.getItem("namePerson")
async function createPet(evt) {
    evt.preventDefault();
    const form = evt.target;
    let kind_pet = document.querySelector('input[name="pets"]:checked').value
    var pet = {
        name: form.name.value,
        dateLost: form.dateLost.value,
        placeLost: form.placeLost.value,
        details: document.getElementById("details").value,
        id_person: localStorage.getItem("id"),
        id_kindpet: id_kind_pet[kind_pet],
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
    await Swal.fire({
        icon: 'success',
        title: 'Mascota creada con éxito',
        confirmButtonColor: '#524388',
        color: '#524388'
    })
    window.location.href = "./home.html"
}