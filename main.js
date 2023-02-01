const form = document.getElementById('form-enviar')

function validaForm (numA, numB) {
    return parseInt(numB) > parseInt(numA) 
}

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const valorA = document.getElementById('numeroA')
    const valorB = document.getElementById('numeroB')
    const mensagemSucesso = "Formulário válido, campo B é maior que o campo A"
    const mensagemErro = "Formulário inválido, campo A é maior que o campo B"
    
    let formValido = false
    formValido = validaForm(valorA.value, valorB.value)

    if (formValido) {
        alert(mensagemSucesso)
    } else {
        alert(mensagemErro)
    }

    validaForm(numeroA, numeroB)
    
})








