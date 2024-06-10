const cotizacion = async () => {

    const lista = await fetch('https://dolarapi.com/v1/dolares')
    const lista_definitiva = await lista.json()

    lista_definitiva.forEach(element => {
        console.log(element.title)
    });
}
