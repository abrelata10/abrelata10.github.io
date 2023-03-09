const datosPersonales = document.getElementById("nav_dp");
const historiaLaboral = document.getElementById("nav_hl");
const contacto = document.getElementById("nav_c");

const bloqueDatosPersonales = document.getElementById("bloque_dp");
const bloqueHistoriaLaboral = document.getElementById("bloque_hl");
const bloqueContacto = document.getElementById("bloque_c");

console.log(bloqueDatosPersonales);

datosPersonales.addEventListener("click", function (event){
    event.preventDefault();
    bloqueDatosPersonales.classList.remove("oculta");
    bloqueHistoriaLaboral.className = "oculta";
    bloqueContacto.className ="oculta";
    console.log(bloqueDatosPersonales);
});

historiaLaboral.addEventListener("click", function (event){
    event.preventDefault();
    bloqueDatosPersonales.className = "oculta";
    bloqueHistoriaLaboral.className = "visible";
    bloqueContacto.className ="oculta";
});

contacto.addEventListener("click", function (event){
    event.preventDefault();
    bloqueDatosPersonales.className = "oculta";
    bloqueHistoriaLaboral.className = "oculta";
    bloqueContacto.className ="visible";
});



