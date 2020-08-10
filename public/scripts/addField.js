// Procurar o botao
document.querySelector("#add-time")
// quando clicar no botao
.addEventListener('click', cloneField)


// executar uma açao
function cloneField(){
    // duplicar os campos. que campo??
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // pegar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    // para cada campo, limpar
    fields.forEach(function(field) {
        // pegar o field do momento e limpa ele
        field.value = ""
    })

    // colocar na pagina: onde???
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}
    