//8. Eventos en DOM

//Ejercicio 1

let elementos = document.querySelectorAll("#elementos li")
elementos.forEach(function(linea){
  linea.addEventListener("click", function(){
    console.log(linea.textContent) //defino que al clickear muestre en consola
  })
})

//Ejercicio 2
const campo = document.getElementById("campo");
const deshabilitar = document.getElementById("deshabilitar")
const habilitar = document.getElementById("habilitar")


deshabilitar.addEventListener("click", function() {
    campo.disabled = true  //deshabilitar campo
    campo.style.pointerEvents = "none" //cambia el hover
})

habilitar.addEventListener("click", function() {
    campo.disabled = false //habilitar campo
    campo.style.pointerEvents = "auto"//cambia el hover
});