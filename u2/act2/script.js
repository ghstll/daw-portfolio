const form = document.getElementById("form-user")
const salida = document.getElementById("salida")
const listaUsuarios = document.getElementById("lista-usuarios")
const tableBody = document.getElementById("table-body")
const btnCerrar = document.getElementById("btnCerrar")
const users = []
form.addEventListener("submit",(event) =>{
    event.preventDefault()

    const nombre = form.nombre.value
    const apellidos = form.apellidos.value
    const edad = parseInt(form.edad.value)
    
    if(nombre.trim() === '' || apellidos.trim() === '' || isNaN(edad) || edad < 0){
        salida.textContent = "Completa todos los campos porfavor"
        salida.style.color = "red"
        return
    }
    
    users.push(
        {
            nombre : nombre,
            apellidos : apellidos,
            edad : edad
        }
    )
    
    listaUsuarios.style.display = "flex"
    tableBody.innerHTML = ""
    users.forEach((user)=>{
        tableBody.innerHTML += `
            <tr>
                <td>${user.nombre}</td>
                <td>${user.apellidos}</td>
                <td>${user.edad}</td>
            </tr>
        `
    })
    salida.textContent = "Usuario agregado con exito"
    salida.style.color = "green"

    form.reset()
    form.nombre.focus()

})

btnCerrar.addEventListener("click",(event)=>{
    listaUsuarios.style.display = "none"
    
})