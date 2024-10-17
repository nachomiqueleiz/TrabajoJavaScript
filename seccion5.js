//5. Objetos en JavaScript

//Ejercicio 1
let persona = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Barcelona",
    cambiarCiudad: function(nuevaCiudad){ //definir metodo en un objeto
      this.ciudad = nuevaCiudad
      console.log("Persona: "+this.nombre+", Edad: "+this.edad+", Ciudad: "+this.ciudad)
    }
  
  }
  console.log("Persona: "+persona.nombre+", Edad: "+persona.edad+", Ciudad: "+persona.ciudad)
  persona.cambiarCiudad("Madrid")
  
  //Ejercicio 2
  let libro = {
    titulo: "El Quijote",
    autor: "Miguel de Cervantes",
    anio: 1605,
    antiguo: function(){ //definir metodo en un objeto
      if (this.anio+10 < 2024){
        console.log("El libro, "+this.titulo+ "  es antiguo: " + true)
      } else{
        console.log("El libro, "+this.titulo+ " es antiguo: " + false)
      }
    }
  }
  libro.antiguo()
