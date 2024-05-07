//declarar o inicializar una variable
//variable global
var numero = 2;

//condicional expresion clasica
if(numero > 6){
    console.log('Esta aprobado')
}else{
    console.log('Desaprobado')
}

//Condicional para expresion ternaria.Dos puntos (especie de else )
var respuesta = (numero > 6) ? 'Aprobado':'Desaprobado'
console.log(respuesta)

//Diferencia en LET y VAR

var x = 44
if(x == 44){
    x = 74
    console.log(x)//74
}
console.log(x)//74

let y = 50
if(y == 50){
    let y = 11
    console.log(y)//11
}
console.log(y)//50

//Constantes
const nombre = "Juan"
//No se puede accinar un nuevo valor a una constante: nombre = 'Pepe'
