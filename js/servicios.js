document.getElementById("btnPagar")
.addEventListener("click", function(){

    // Obtenemos servicio seleccionado
    let servicio =
    document.getElementById("tipoServicio").value;

    // Obtenemos monto
    let monto = parseFloat(
        document.getElementById("montoServicio").value
    );

    // En esta parte se valida el monto
    if(isNaN(monto) || monto <= 0){

        swal({
            title: "Error",
            text: "Ingrese un monto válido",
            icon: "error"
        });

        return;
    }

    // Obtenemos usuario
    let usuario =
    JSON.parse(localStorage.getItem("usuario"));

    // Se Valida saldo suficiente
    if(monto > usuario.saldo){

        swal({
            title: "Saldo insuficiente",
            text: "No tiene fondos suficientes",
            icon: "error"
        });

        return;
    }

    // Descontar saldo
    usuario.saldo -= monto;

    // Guarda historial
    usuario.historial.push({

        tipo: "Pago",
        servicio: servicio,
        monto: monto

    });

    // Guarda cambios
    localStorage.setItem(
        "usuario",
        JSON.stringify(usuario)
    );

    // Muestra mensaje éxito
    swal({

    title: "Pago de Servicios realizado",

    text: "¿Desea descargar el comprobante PDF?",

    icon: "success",

    buttons: {

        cancel: "No",

        confirm: "Sí"

    }

})
.then((descargar) => {

    // Si quiere PDF
    if(descargar){

        // Se crea el PDF
        const { jsPDF } = window.jspdf;

        const doc = new jsPDF();

        doc.text("POKEMON BANK", 20, 20);

        doc.text("Tipo: Pago de Servicios", 20, 40);

        doc.text(
            "Monto: $" + monto.toFixed(2),
            20,
            50
        );

        doc.text(
            "Saldo actual: $" +
            usuario.saldo.toFixed(2),
            20,
            60
        );

        doc.text(
            "Gracias por usar Pokemon Bank",
            20,
            80
        );

        // Descargar PDF
        doc.save("comprobante.pdf");

    }

    // Vuelve al menú
    window.location.href = "pokemon.html";

});

});