function calcular() {
    const operacion = document.getElementById("operacion").value;
    const valor1 = parseFloat(document.getElementById("valor1").value);
    const valor2 = parseFloat(document.getElementById("valor2").value);
    let resultado;

    if (operacion === "corriente") {
        resultado = valor2 / valor1;
    } else if (operacion === "tension") {
        resultado = valor1 * valor2;
    } else if (operacion === "resistencia") {
        resultado = valor1 / valor2;
    }

    document.getElementById("resultado").innerText = `El resultado es: ${resultado}`;
}

document.getElementById("btn_ejecutar").addEventListener("click", calcular);
