let usuario = JSON.parse(localStorage.getItem("usuario"));
document.getElementById("saldoActual").textContent =
  "$" + usuario.saldo.toFixed(2);
