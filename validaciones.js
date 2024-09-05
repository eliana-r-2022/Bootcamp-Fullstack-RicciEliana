function validaFormulario() {
    // Se toman valores de cada campo 
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var fechaNacimiento = document.getElementById("fecha de nacimiento").value;
    var pais = document.getElementById("país").value;
    

    // Valida que los campos no estén vacíos
    if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
        return false;
    }

    if (apellido === "") {
        alert("Por favor, ingresa tu apellido.");
        return false;
    }

    if (email === "") {
        alert("Por favor, ingresa tu correo electrónico.");
        return false;
    }

    // Valida formato del email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, ingresa un correo electrónico o email válido.");
        return false;
    }

    if (fechaNacimiento === "") {
        alert("Por favor, selecciona tu fecha de nacimiento.");
        return false;
    }

    // Valida que se haya seleccionado un país - mediante el select
    if (pais === "país") {
        alert("Por favor, selecciona tu país.");
        return false;
    }

    // Si todas las validaciones son correctas = true
    alert("Formulario enviado correctamente.");
    return true;
}
