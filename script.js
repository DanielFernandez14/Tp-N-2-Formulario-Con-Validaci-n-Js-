const form = document.querySelector("#registroForm")
const inputNombre = document.querySelector("#nombre")
const inputEdad = document.querySelector("#edadd") 
const mensajes = document.querySelector("#mensajeJS")

function validacionDeFormulario(event) {
    event.preventDefault();


const nombre = inputNombre.value.trim()
const edad = Number(inputEdad.value);

if (edad >= 18) {
    mensajes.textContent= ` ✅ Tenes acceso ${nombre}`
} else {
    mensajes.textContent= ` 📛 no Tenes acceso ${nombre}, tu edad es menor a 18`
}
console.log(nombre + edad)
}

form.addEventListener("submit", validacionDeFormulario)
