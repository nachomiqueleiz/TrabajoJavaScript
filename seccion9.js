//9. LocalStorage

//Traigo los elementos del DOM
const guardarCorreo= document.getElementById("guardarCorreo")
const eliminarCorreo = document.getElementById("eliminarCorreo")
const mail = document.getElementById("mail")
const correoGuardado = document.getElementById("mailGuardado")
//validacion de formatos de correos
let regex = /^[^\s@]+@[^\s@]+.[^\s@]+$/

//Boton de guardar
guardarCorreo.addEventListener("click", (e) => {
      e.preventDefault() //No recarga la pagina al presionar
      if(mail.value != "" && regex.test(mail.value)){
      localStorage.setItem("mail", mail.value)  //Guardar el mail en el storage
      correoGuardado.innerHTML= `                   
        <p>Correo guardado: ${mail.value}</p>   
        `
      }
    })
 //Mantener el mensaje de correo guardado
   
let mailEnMemoria = localStorage.getItem("mail")
if(mailEnMemoria){
  correoGuardado.innerHTML= `
        <p>Correo guardado: ${mailEnMemoria}</p>
        `
}

//Boton de eliminar
eliminarCorreo.addEventListener("click", (e) => {
      e.preventDefault()
      localStorage.removeItem("mail") //lo elimino del storage
      correoGuardado.innerHTML= `  
        `
  })

