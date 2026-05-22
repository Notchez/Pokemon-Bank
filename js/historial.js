// Obtenemos usuario desde localStorage
let usuario =
JSON.parse(localStorage.getItem("usuario"));

// Obtenemos historial
let historial = usuario.historial;

// Obtenemos tbody
let tabla =
document.getElementById("tablaHistorial");

// Recorre historial
historial.forEach(function(transaccion){

    // Se crea la fila
    let fila = `

        <tr>

            <td>

   ${transaccion.tipo}

   ${transaccion.servicio
      ? "- " + transaccion.servicio
      : ""}

</td>

            <td>$${transaccion.monto.toFixed(2)}</td>

        </tr>

    `;

    // Agrega fila a la tabla
    tabla.innerHTML += fila;

});