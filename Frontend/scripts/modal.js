$(document).ready(function () {
    var contactar = document.getElementsByClassName("contactar");
    var close = document.getElementsByClassName('icon-closed');


    for (let index = 0; index < contactar.length; index++) {
        contactar[index].addEventListener('click', () => {
            contactar[index].nextElementSibling.classList.add('show')
            // alert('prueba')
        })

        close[index].addEventListener('click', () => {
            close[index].parentElement.parentElement.classList.remove('show')
            // alert('prueba')
        })   
    }

});


