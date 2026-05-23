let usuario = JSON.parse(localStorage.getItem("usuario"));
let historial = usuario.historial;
let depositos = 0;
let retiros = 0;
let pagos = 0;
historial.forEach(function (transaccion) {
  if (transaccion.tipo === "Depósito") {
    depositos++;
  } else if (transaccion.tipo === "Retiro") {
    retiros++;
  } else if (transaccion.tipo === "Pago") {
    pagos++;
  }
});
const ctx = document.getElementById("miGrafica");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Depósitos", "Retiros", "Pagos"],
    datasets: [
      {
        label: "Número de transacciones",
        data: [depositos, retiros, pagos],
        borderWidth: 1,
      },
    ],
  },
});
