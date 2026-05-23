const usuario = JSON.parse(localStorage.getItem("usuario"));
document.getElementById("nombreUsuario").textContent = usuario.nombre;
document.getElementById("numeroCuenta").textContent =
  "Cuenta: " + usuario.cuenta;
document.getElementById("saldoUsuario").textContent =
  "Saldo: $" + usuario.saldo.toFixed(2);
