//6. Arrays

//Ejercicio 1

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numerosDuplicados = numeros.map(function(numero) {return numero * 2}) //aplica una funcion a todo el array y resulta un array nuevo
console.log("Numeros originales: "+numeros)
console.log("Numeros multiplicados por 2: "+numerosDuplicados)

//Ejercicio 2

let pares = []
for(let i = 1; i<21; i++){
  if(i % 2 == 0){
    pares.push(i)
  }
}
console.log("Primeros 10 numeros pares: "+pares)
