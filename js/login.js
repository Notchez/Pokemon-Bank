const loginForm =
document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const pinIngresado =
    document.getElementById("pin").value;

    const usuario =
    JSON.parse(localStorage.getItem("usuario"));

    if(pinIngresado === usuario.pin){

        window.location.href = "pokemon.html";

    } else {

        swal({
            title: "Error",
            text: "PIN incorrecto",
            icon: "error"
        });

    }

});