const form = document.querySelector("#registroForm")
const inputNombre = document.querySelector("#nombre")
const inputEdad = document.querySelector("#edadd") 
const mensajes = document.querySelector("#mensajeJS")

function validacionDeFormulario(event) {
    event.preventDefault();


const nombre = inputNombre.value.trim()
const edad = Number(inputEdad.value);

mensajes.classList.remove("ingresoExitoso", "ingresoFallido")

let clase;

if (edad >= 18) {
    mensajes.textContent= ` ✅ Tenes acceso ${nombre} porque tu edad es de ${edad}`
    clase = "ingresoExitoso"
} else {
    mensajes.textContent= ` 📛 No tenes acceso ${nombre}, tu edad es de ${edad} y tenes que ser mayor de 18 `
    clase = "ingresoFallido"
}
console.log(nombre, edad)

mensajes.classList.add(clase)
}

form.addEventListener("submit", validacionDeFormulario)
