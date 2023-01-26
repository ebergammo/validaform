const form = document.getElementById('form-enviar')


form.addEventListener('submit', function(e) {
    e.preventDefault()

    const numeroA = document.getElementById('numeroA')
    const numeroB = document.getElementById('numeroB')


    function validaForm (numeroA, numeroB) {    
        if (numeroA < numeroB) {
            alert("Form valido")
        } else {
            alert("Form invalido")
        }
    }
    
    validaForm(numeroA, numeroB)
    
})








