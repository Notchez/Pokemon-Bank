// Obtenemos usuario desde localStorage
let usuario =
JSON.parse(localStorage.getItem("usuario"));

// Muestra saldo actual
document.getElementById("saldoActual")
.textContent =
"$" + usuario.saldo.toFixed(2);