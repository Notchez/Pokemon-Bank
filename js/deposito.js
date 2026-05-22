console.log("deposito.js conectado");

document.getElementById("btnDepositar")
.addEventListener("click", function(){

    // Obtener monto del input
    let monto = parseFloat(
        document.getElementById("montoDeposito").value
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

   
    // Sumamos saldo
    usuario.saldo += monto;

    // Guardamos historial
    usuario.historial.push({
        tipo: "Depósito",
        monto: monto
    });

    // Guardar nuevamente en localStorage
    localStorage.setItem(
        "usuario",
        JSON.stringify(usuario)
    );

    // Muestra mensaje
    swal({

    title: "Depósito realizado",

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

        // se crea PDF
        const { jsPDF } = window.jspdf;

        const doc = new jsPDF();

        doc.text("POKEMON BANK", 20, 20);

        doc.text("Tipo: Deposito", 20, 40);

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

        // se descarga PDF
        doc.save("comprobante.pdf");

    }

    // vuelve al menú
    window.location.href = "pokemon.html";

});

});