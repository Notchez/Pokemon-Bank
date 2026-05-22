document.getElementById("btnRetirar")
.addEventListener("click", function(){

    // Obtenemos monto
    let monto = parseFloat(
        document.getElementById("montoRetiro").value
    );

    // Validamos monto
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

    // Se valida si hay saldo suficiente
    if(monto > usuario.saldo){

        swal({
            title: "Saldo insuficiente",
            text: "No tiene fondos suficientes",
            icon: "error"
        });

        return;
    }

    // Resta saldo
    usuario.saldo -= monto;

    // Guarda historial
    usuario.historial.push({
        tipo: "Retiro",
        monto: monto
    });

    // Guardar en localStorage
    localStorage.setItem(
        "usuario",
        JSON.stringify(usuario)
    );

    // con esta parte del swal se muestra mensaje éxito
    swal({

    title: "Retiro realizado",

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

        //Se crea PDF
        const { jsPDF } = window.jspdf;

        const doc = new jsPDF();

        doc.text("POKEMON BANK", 20, 20);

        doc.text("Tipo: Retiro", 20, 40);

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

        // con esta parte se descargar PDF
        doc.save("comprobante.pdf");

    }

    // Vuelve al menú
    window.location.href = "pokemon.html";

});

});