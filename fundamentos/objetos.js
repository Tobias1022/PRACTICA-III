const empleado = {
    nombre:'Juan',
    apellido:'Rodriguez',
    dni:33234567,
    correo:{
        gmail:'juan@gmail.com',
        outlook:'juan@outlook.com'
    }
}

//Forma tradicional
//const nombre = empleado.nombre
//const email = empleado.correo.gmail
//const outlook = empleado.correo.outlook


//destructuring object
const { gmail,outlook } = empleado.correo


console.log(`
    Correo Gmail: ${gmail}
    Correo Outlook: ${outlook}
`)

      

