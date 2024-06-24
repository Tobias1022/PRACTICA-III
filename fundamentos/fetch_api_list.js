/*
  SOLICITUDES HTTP

  MÉTODOS:
    GET
    POST    
    DELETE
    PUT
*/

const listar_usuarios = async () => {
    //POR DEFECTO FECHT REALIZA UNA SOLICITUD A TRAVES DEL METODO GET//
    const usuarios = await fetch("https://jsonplaceholder.typicode.com/users")
    const datos_finales = await usuarios.json()

    const lista = []
    datos_finales.forEach(element => {
        const item = `<li class="list-group-item">${element.name}</li>`
        lista.push(item)
    });

    document.getElementById("list_users").innerHTML = lista.join("")
}
//invocamos la funcion fetch. sin necesidad de boton.
listar_usuarios()

const crear_tabla =async () => {
    const usuarios = await fetch("https://jsonplaceholder.typicode.com/users")
    const datos_finales = await usuarios.json()

    const filas = []
    datos_finales.forEach( (element,index) => {
        const f = `
            <tr>
                <td>${index+1}</td>
                <td>${element.name}</td>
                <td>${element.username}</td>
                <td>${element.email}</td>
                <td>${element.website}</td>
            <tr>        
        `
        filas.push(f)
    });

    document.getElementById("tb_users").innerHTML = filas.join("")

}

crear_tabla()