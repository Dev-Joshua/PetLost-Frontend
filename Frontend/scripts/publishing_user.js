const URL_API = "http://localhost:8080/"
$(document).ready(function(){
    showPets();
});

async function showPets(){
    var user = {
        email: localStorage.getItem("email"),
        password: localStorage.getItem("password")
    }
    const request_pet = await fetch(URL_API + "mascotasxperson", {
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
      console.log(element)
        container.innerHTML += `
        <article class="card" id="${element.id}">
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
          <input type="button" value="Eliminar" id="" onclick="deleteAdd(${element.id})">
        </article>
        
        `
    });
}

function deleteAdd(id){
  Swal.fire({
    title: 'Seguro que quiere eliminarlo?',
    // showDenyButton: true,
    // showCancelButton: true,
    confirmButtonText: 'Si',
    // denyButtonText: `Don't save`,
  }).then(async(result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      const request_del = await fetch(URL_API + "mascotas/del/"+ id,{
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      })

      await Swal.fire('Eliminado!', '', 'success')
      location.reload();
    } else if (result.isDenied) {
      
    }
  })
}