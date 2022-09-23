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