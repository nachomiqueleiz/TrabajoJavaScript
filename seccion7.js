//7. Introduccion al DOM

//Ejercicio 1

const boton = document.getElementById("cambiarAzul")
boton.addEventListener("click",cambiarColor)

function cambiarColor() {
  let parrafosAzules = document.querySelectorAll("#azules p")
  parrafosAzules.forEach(function(parrafo) {
      parrafo.style.color = "blue" //cambia el estilo de la letra a azul
    })
}

//Ejercicio 2

const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", function(evento){
  evento.preventDefault()
  const alerta = document.getElementById("texto").value
  alert("Has ingresado: "+ alerta)
})
