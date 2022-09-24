const URL_API = "http://localhost:8080/mascotasxperson"
$(document).ready(function(){
    showPets();
});

async function showPets(){
    var user = {
        email: localStorage.getItem("email"),
        password: localStorage.getItem("password")
    }
    const request_pet = await fetch(URL_API, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });

    const pets = await request_pet.json();
    
    const container = document.getElementById("cards-ads")
    console.log(container)
    
    pets.forEach(element => {
        container.innerHTML += `
        <article class="card id="${element.id}">
          <h3>${element.name}</h3>
          <p>${element.details}</p>
          <input type="button" value="Eliminar" id="">
        </article>
        `
    });
}