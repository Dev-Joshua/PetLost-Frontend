const URL_API = "http://localhost:8080/mascotas"
$(document).ready(function () {
  document.getElementsByClassName("profile-name")[0].innerHTML = localStorage.getItem("namePerson")
  showPets();
  
});

async function showPets() {
  const request_pets = await fetch(URL_API, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

  const pets = await request_pets.json();

  const container = document.getElementById("cards-ads")
  console.log(container)

  pets.forEach(element => {
    container.innerHTML += `
    <article class="card-pet">
    <img src="${element.photo}" alt="">
    <div class="card-body">
      <h3>${element.name}</h3>
      <table>
        <tbody>
          <tr>
            <td>${element.placeLost}</td>
          </tr>
          <tr>
            <td>Fehca de perdida: ${(element.dateLost).slice(0,10).replaceAll("-","/")}</td>
          </tr>
          <tr>
            <td>Descripcion: ${element.details}</tr>
          <hr />
        </tbody>
      </table>
      <hr>
      <div class="container-ul">
        <div class="button-container">
          <button class="contactar" id="">Contactar</button>
          <div id="" class="modal-container">
            <div class="modal">
              <div id="" class="icon-closed">
                <img src="../assets/icon/closed - color.png" width="20px" height="20px" alt="cerrar">
              </div>
              <ul>
                <li><a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
                <li><a href="#" target="_blank"><i class="fab fa-whatsapp"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
        `
  });
  const contactar = document.getElementsByClassName("contactar");
  const close = document.getElementsByClassName('icon-closed');

  for (let index = 0; index < contactar.length; index++) {
      contactar[index].addEventListener('click', () => {
          contactar[index].nextElementSibling.classList.add('show')
      })

      close[index].addEventListener('click', () => {
          close[index].parentElement.parentElement.classList.remove('show')
      })   
  } 
}
