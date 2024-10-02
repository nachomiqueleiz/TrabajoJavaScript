//4. Funciones de JavaScript

//Ejercicio 1

function esPar(num){
    if (num % 2 == 0){
        return true
       }else{
        return false
      }
  }
  console.log("El numero 8 es par: " + esPar(8))
  console.log("El numero 7 es par: " + esPar(7))
  
  //Ejercicio 2
  
  function convertirCelsiusAFahrenheit(celcius){
    let f = celcius*1.8 +32
    console.log(celcius +"°C son equivalentes a "+ f +"°F")
  }
  convertirCelsiusAFahrenheit(30)