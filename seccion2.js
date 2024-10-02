//2. Operadores Logicos y condicionales

//Ejercicio 1
{
    let a = 10
    let b = 1
    let c = 1
    if (a >= b && a >= c){
      console.log("El mayor de los tres numeros es: " + a)
    } else if(b >= a && b >= c){
      console.log("El mayor de los tres numeros es: " + b)
    }else{
      console.log("El mayor de los tres numeros es: " + c)
    }
    }
    
    //Ejercicio 2
    {
      let numero = prompt("Ingresa un numero y te dire si es par o impar")
      if (numero % 2 == 0){
        console.log("El numero " +numero+ ", es par")
      }else{
        console.log("El numero " +numero+ ", es impar")
      }
    }
    