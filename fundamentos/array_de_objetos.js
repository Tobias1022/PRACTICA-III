const alumnos = [
    {
        legajo:'234',
        usuario:'dvillegas',
        password:'1234',
        calificaciones:{
            matematica:8,
            sociales:7
        }
    },
    {
        legajo:'235',
        usuario:'pepito',
        password:'123456',
        calificaciones:{
            matematica:10,
            sociales:10
        }
    }
]

alumnos.forEach(element => {
    console.log(element.usuario)
});
