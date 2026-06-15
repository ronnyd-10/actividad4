const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const edad = Number(document.getElementById("edad").value);
    const pais = document.getElementById("pais").value;
    const terminos = document.getElementById("terminos").checked;

    // Nombre
    if (nombre.length < 5) {
        alert("El nombre debe tener al menos 5 caracteres");
        return;
    }

    // Email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {
        alert("Ingrese un email válido");
        return;
    }

    // Edad
    if (isNaN(edad) || edad < 18 || edad > 60) {
        alert("La edad debe estar entre 18 y 60 años");
        return;
    }

    // País
    if (pais === "") {
        alert("Debe seleccionar una nacionalidad");
        return;
    }

    // Términos
    if (!terminos) {
        alert("Debe aceptar los términos y condiciones");
        return;
    }

    const parametros = new URLSearchParams({
        nombre,
        email,
        edad,
        pais
    });

    window.location.href = `resultado.html?${parametros.toString()}`;
});