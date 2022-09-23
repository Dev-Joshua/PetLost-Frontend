const URL_API = "http://localhost:8080/mascotas"
$(document).ready(function(){
    showPets();
});

async function showPets(){
    const request_person = await fetch(URL_API, {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
});

    const pets = await request_person.json();
    
    const container = document.getElementById("cards-ads")
    console.log(container)
    
    pets.forEach(element => {
        container.innerHTML += `
        <article class="card-pet">
        <div class="image">
          <img src="${element.photo}" alt="">
        </div>
        <div class="card-body">
          <h3>${element.name}</h3>
          <table align="center">
            <thead>
              <tr>
                <th>Informacion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${element.placeLost}</td>
              </tr>
              <!-- <tr>
                <td>Hr de perdida: 3pm</td>
              </tr> -->
              <tr>
                <td>Fecha de perdida:${element.dateLost}<br>Ultima vez visto:
                  ${element.placeLost}</td>
              </tr>
              <tr>
                <td>Descripción: ${element.placeLost}.</td>
              </tr>
              <hr />
            </tbody>
          </table>
          <div class="container-ul">
            <ul>
              <li><a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
              <li><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
              <li><a href="#" target="_blank"><i class="fab fa-whatsapp"></i></a></li>
            </ul>
            <div class="button-container">
              <button><a>Contactar</a></button>
            </div>
          </div>
        </div>
        </article>
        `
    });
}