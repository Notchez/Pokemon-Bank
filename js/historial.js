let usuario = JSON.parse(localStorage.getItem("usuario"));
let historial = usuario.historial;
let tabla = document.getElementById("tablaHistorial");
historial.forEach(function (transaccion) {
  let fila = `
        <tr>
            <td>
   ${transaccion.tipo}
   ${transaccion.servicio ? "- " + transaccion.servicio : ""}
</td>
            <td>$${transaccion.monto.toFixed(2)}</td>
        </tr>
    `;
  tabla.innerHTML += fila;
});
