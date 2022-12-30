$(document).ready(function () {
  $("#formulario").submit(function (event) {
    event.preventDefault();
    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();
    var correo = $("#correo").val();
    var genero = $("#genero").val();
    var fecha_nacimiento = $("#fecha_nacimiento").val();
    alert(
      "Nombre: " +
        nombre +
        "\nApellido: " +
        apellido +
        "\nCorreo: " +
        correo +
        "\nGénero: " +
        genero +
        "\nFecha de nacimiento: " +
        fecha_nacimiento
    );
  });
});
