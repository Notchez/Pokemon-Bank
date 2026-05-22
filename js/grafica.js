// Obtenemos usuario
let usuario =
JSON.parse(localStorage.getItem("usuario"));

// Obtenemos historial
let historial = usuario.historial;

// Contadores
let depositos = 0;
let retiros = 0;
let pagos = 0;

// Recorre historial
historial.forEach(function(transaccion){

    if(transaccion.tipo === "Depósito"){

        depositos++;

    }

    else if(transaccion.tipo === "Retiro"){

        retiros++;

    }

    else if(transaccion.tipo === "Pago"){

        pagos++;

    }

});

// Usamos canvas
const ctx =
document.getElementById("miGrafica");

// Crea gráfica
new Chart(ctx, {

    type: 'bar',

    data: {

        labels: [
            'Depósitos',
            'Retiros',
            'Pagos'
        ],

        datasets: [{

            label: 'Número de transacciones',

            data: [
                depositos,
                retiros,
                pagos
            ],

            borderWidth: 1

        }]

    }

});