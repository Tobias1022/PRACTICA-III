function calcularDescuento() {
    const precios = {
        'ford_ka': 10700000,
        'ford_fiesta': 15350000,
        'ford_focus': 18500000
    };

    const descuentos = {
        'ford_ka': 0.15,
        'ford_fiesta': 0.05,
        'ford_focus': 0.10
    };

    const vehiculo = document.getElementById('vehiculo').value;

    const precioInicial = precios[vehiculo];
    const descuento = descuentos[vehiculo];
    const precioFinal = precioInicial - (precioInicial * descuento);

    document.getElementById('preciofinal').textContent = `precio final: $${precioFinal.toLocaleString()}`;
}