console.log("deposito.js conectado");
document.getElementById("btnDepositar").addEventListener("click", function () {
  let monto = parseFloat(document.getElementById("montoDeposito").value);
  if (isNaN(monto) || monto <= 0) {
    swal({
      title: "Error",
      text: "Ingrese un monto válido",
      icon: "error",
    });
    return;
  }
  let usuario = JSON.parse(localStorage.getItem("usuario"));
  usuario.saldo += monto;
  usuario.historial.push({
    tipo: "Depósito",
    monto: monto,
  });
  localStorage.setItem("usuario", JSON.stringify(usuario));
  swal({
    title: "Depósito realizado",
    text: "¿Desea descargar el comprobante PDF?",
    icon: "success",
    buttons: {
      cancel: "No",
      confirm: "Sí",
    },
  }).then((descargar) => {
    if (descargar) {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
      doc.text("POKEMON BANK", 20, 20);
      doc.text("Tipo: Deposito", 20, 40);
      doc.text("Monto: $" + monto.toFixed(2), 20, 50);
      doc.text("Saldo actual: $" + usuario.saldo.toFixed(2), 20, 60);
      doc.text("Gracias por usar Pokemon Bank", 20, 80);
      doc.save("comprobante.pdf");
    }
    window.location.href = "pokemon.html";
  });
});
