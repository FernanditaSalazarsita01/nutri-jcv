import { obtenerSesion, cerrarSesionStorage } from "./storage.js";
import { registrarPaciente, cargarPacientes } from "./pacientes.js";
import {
  guardarConsulta,
  mostrarHistorial,
  colocarFechaHoraActual,
  editarConsulta,
  eliminarConsulta
} from "./consultas.js";

const nutriologo = obtenerSesion();

if (!nutriologo) {
  alert("Acceso bloqueado. Debes iniciar sesión.");
  window.location.href = "index.html";
}

document.getElementById("nutriologoActivo").textContent = `Nutriólogo: ${nutriologo}`;

window.editarConsulta = editarConsulta;
window.eliminarConsulta = eliminarConsulta;

document.getElementById("btnCerrarSesion").addEventListener("click", cerrarSesion);
document.getElementById("btnGuardarPaciente").addEventListener("click", registrarPaciente);
document.getElementById("btnGuardarConsulta").addEventListener("click", guardarConsulta);
document.getElementById("listaPacientes").addEventListener("change", mostrarHistorial);

window.addEventListener("load", function () {
  cargarPacientes();
  colocarFechaHoraActual();
});

function cerrarSesion() {
  cerrarSesionStorage();
  window.location.href = "index.html";
}