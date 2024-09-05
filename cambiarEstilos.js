// Selección de los botones
var botonEstilo1 = document.getElementById("estilo1");
var botonAltoContraste = document.getElementById("alto-contraste");

// Click a botón "Estilo 1"
botonEstilo1.addEventListener("click", function() {
    document.body.style.backgroundColor = "#a39b7b"; // Color claro
});
// Click a botón "Estilo de Alto Contraste"
botonAltoContraste.addEventListener("click", function() {
    document.body.style.backgroundColor = "#3d3b3b"; // Color oscuro
});
