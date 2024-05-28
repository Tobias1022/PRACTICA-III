function ejecutar(){
    const dato = document.getElementById("inp_dato").value
    const respuesta = calcular(dato)
}   alert(respuesta)

function calcular(s1){
    const resultado = number(d1) + 2
    return resultado

}

const btn = document.getElementById("btn_ejecutar")
btn.addEventListener("click",ejecutar)
function cambiar_label(){

    const select = document.getElementById("slt_operationes")
    const label = document.getElementById("lbl.")

    if(select == 0){
        label.textContent = "option 1"

    }else{
        label.textContent = "option2"
    }

}

