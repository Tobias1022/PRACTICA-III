async function obtenerCriptomonedas() {
    const respuesta = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    const datos = await respuesta.json();

    const tablaCriptos = document.getElementById('tablaCriptos').querySelector('tbody');

    datos.forEach(cripto => {
        const fila = document.createElement('tr');

        fila.innerHTML = `
            <td><img src="${cripto.image}" alt="${cripto.name}" width="32" height="32"></td>
            <td>${cripto.name}</td>
            <td>${cripto.symbol.toUpperCase()}</td>
            <td>$${cripto.current_price.toLocaleString()}</td>
            <td>${cripto.price_change_percentage_24h.toFixed(2)}%</td>
            <td>${cripto.total_volume.toLocaleString()}</td>
        `;

        tablaCriptos.appendChild(fila);
    });
}

obtenerCriptomonedas();