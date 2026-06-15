const parametros = new URLSearchParams(window.location.search);

const nombre = parametros.get("nombre");
const email = parametros.get("email");
const edad = parametros.get("edad");
const pais = parametros.get("pais");

document.getElementById("nombre").textContent = nombre;
document.getElementById("email").textContent = email;
document.getElementById("edad").textContent = edad;
document.getElementById("pais").textContent = pais;