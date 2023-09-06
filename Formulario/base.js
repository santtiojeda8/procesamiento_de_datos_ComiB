const rango = document.getElementById("rango");
const rangoActual = document.getElementById("rango-actual");
rango.addEventListener("input", () => {
    rangoActual.textContent = rango.value;
});
const rango1 = document.getElementById("rango1");
const rangoActual1 = document.getElementById("rango-actual1");
rango1.addEventListener("input", () => {
    rangoActual1.textContent = rango1.value;
});
const rango2 = document.getElementById("rango2");
const rangoActual2 = document.getElementById("rango-actual2");
rango2.addEventListener("input", () => {
    rangoActual2.textContent = rango2.value;
});
const rango3 = document.getElementById("rango3");
const rangoActual3 = document.getElementById("rango-actual3");
rango3.addEventListener("input", () => {
    rangoActual3.textContent = rango3.value;
});
rangoActual.textContent = rango.value;

const formulario = document.getElementById("form");
const datosFormulario = document.getElementById("datos-formulario");
formulario.addEventListener("submit", function (e) {
    e.preventDefault(); 
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const dni = document.getElementById("dni").value;
    const nac = document.getElementById("nac").value;
    const domi = document.getElementById("domi").value;
    const loc = document.getElementById("loc").value;

    const idiomasSeleccionados = [];
    const idiomas = document.querySelectorAll('input[name="opciones[]"]:checked');
    idiomas.forEach(function (idioma) {
        idiomasSeleccionados.push(idioma.value);
    });

    const datos = `
        Nombre: ${nombre}<br>
        Apellido: ${apellido}<br>
        DNI: ${dni}<br>
        Fecha de Nacimiento: ${nac}<br>
        Domicilio: ${domi}<br>
        Localidad: ${loc}<br>
        Idiomas que conoce: ${idiomasSeleccionados.join(", ")}
    `;

    datosFormulario.innerHTML = datos;
});