const URL_API = "http://localhost:8080/mascotas"
$(document).ready(function () {
  showPets();
});

async function showPets() {
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
    <img src="https://revista.weepec.com/wp-content/uploads/2019/07/chihuahua-in-studio-BVACJ8D.jpg" alt="">
    <div class="card-body">
      <h3>${element.name}</h3>
      <table>
        <tbody>
          <tr>
            <td>${element.placeLost}</td>
          </tr>
          <tr>
            <td>${element.dateLost}</td>
          </tr>
          <tr>
            <td>${element.details}</tr>
          <hr />
        </tbody>
      </table>
      <hr>
      <div class="container-ul">
        <div class="button-container">
          <button class="contactar" id="contactar">Contactar</button>
          <div id="modal-container" class="modal-container">
            <div class="modal">
              <div id="close" class="icon-closed">
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
}

const contactar = document.getElementById("contactar");
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');

contactar.addEventListener('click', () => {
  modal_container.classList.add('show')
  // alert('prueba')
})

close.addEventListener('click', () => {
  modal_container.classList.remove('show')
  // alert('prueba')
})