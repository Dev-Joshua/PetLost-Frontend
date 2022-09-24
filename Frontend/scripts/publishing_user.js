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
        <article class="card">
          <h4>${element.name}</h4>
          <table align="center">
            <tbody>
              <tr>
                <td>${element.placeLost}</td>
              </tr>
              <tr>
                <td>Fecha de perdida:${(element.dateLost).slice(0,10).replaceAll("-","/")}</td>
              </tr>
              <tr>
                <td>Descripción: ${element.details}.</td>
              </tr>
            </tbody>
          </table>
          <input type="button" value="Eliminar" id="">
        </article>
        
        `
    });
}