// acá verificamos si el usuario existe

if (!localStorage.getItem("usuario")) {

    const usuario = {
        nombre: "Ash Ketchum",
        pin: "1234",
        cuenta: "0987654321",
        saldo: 500,
        historial: []
    };

    localStorage.setItem(
        "usuario",
        JSON.stringify(usuario)
    );
}

