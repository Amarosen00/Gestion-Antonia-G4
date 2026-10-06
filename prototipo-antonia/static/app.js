/* Prototipo navegable · Antonia Centro de Estética
   No guarda datos: solo recuerda el perfil y la sucursal elegidos para mostrar el menú correcto. */
(function () {
  "use strict";
  var LOCALES = ["Mall Plaza Calama", "Vargas", "J. A. Espinosa"];

  function get(k, def) { try { return localStorage.getItem(k) || def; } catch (e) { return def; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* sin almacenamiento: se usa el valor por defecto */ } }
  function del(k) { try { localStorage.removeItem(k); } catch (e) { } }
  var qs = new URLSearchParams(location.search);

  // Perfil: también se puede forzar con ?rol=propietaria para mostrar el prototipo rápido
  if (qs.get("rol")) set("antonia_rol", qs.get("rol"));
  var rol = get("antonia_rol", "recepcionista");
  var local = get("antonia_local", LOCALES[0]);
  window.ANTONIA = { rol: rol, local: local, set: set, get: get };

  document.addEventListener("DOMContentLoaded", function () {
    // Menú y elementos según el rol
    document.querySelectorAll("[data-rol]").forEach(function (el) {
      if (el.getAttribute("data-rol") !== rol) el.remove();
    });
    document.querySelectorAll("[data-local]").forEach(function (el) { el.textContent = local; });
    document.querySelectorAll("[data-rol-nombre]").forEach(function (el) {
      el.textContent = rol === "propietaria" ? "Propietaria" : "Recepcionista";
    });

    // Página solo para la propietaria
    var solo = document.body.getAttribute("data-solo");
    if (solo && solo !== rol) {
      var ac = document.querySelector(".acciones"); if (ac) ac.remove();
      var m = document.querySelector("main .contenido");
      if (m) m.innerHTML = '<div class="alert alert-warning d-flex gap-2 align-items-start mt-3"><i class="bi bi-lock-fill fs-5"></i><div><b>Acceso restringido.</b> ' +
        'Esta sección solo está disponible para la propietaria. <a href="agenda.html">Volver a la agenda</a>.</div></div>';
    }

    // Cerrar sesión
    document.querySelectorAll("[data-logout]").forEach(function (a) {
      a.addEventListener("click", function () { del("antonia_rol"); del("antonia_local"); });
    });

    // Elegir sucursal (P-08)
    document.querySelectorAll("[data-elegir-local]").forEach(function (a) {
      a.addEventListener("click", function () { set("antonia_local", a.getAttribute("data-elegir-local")); });
    });

    // Avisos de confirmación (?ok=...)
    var MSG = {
      agendada: "Reserva agendada. La clienta recibirá la confirmación de su hora.",
      reprogramada: "Reserva reprogramada. Se liberó el bloque anterior.",
      cancelada: "Reserva cancelada. El bloque quedó libre.",
      entrada: "Entrada registrada.",
      salida: "Salida registrada.",
      especialista: "Datos de la especialista guardados.",
      desactivada: "Especialista desactivada. Ya no aparece en la agenda.",
      aprobada: "Liquidación aprobada.",
      clienta: "Clienta registrada con su consentimiento."
    };
    var ok = qs.get("ok");
    if (ok && MSG[ok]) {
      var t = document.getElementById("toast-ok");
      if (t) {
        t.querySelector(".toast-body span").textContent = MSG[ok] + " (simulado)";
        bootstrap.Toast.getOrCreateInstance(t, { delay: 4500 }).show();
      }
    }

    // Formularios del prototipo: validan campos obligatorios y navegan al destino
    document.querySelectorAll("form[data-go]").forEach(function (f) {
      f.addEventListener("submit", function (ev) {
        ev.preventDefault();
        if (!f.checkValidity()) { f.classList.add("was-validated"); return; }
        if (f.id === "login") {
          var r = f.querySelector("[name=perfil]").value;
          set("antonia_rol", r);
          if (r === "recepcionista") set("antonia_local", LOCALES[0]);
          location.href = r === "propietaria" ? "sucursales.html" : "agenda.html";
          return;
        }
        location.href = f.getAttribute("data-go");
      });
    });

    if (typeof window.paginaLista === "function") window.paginaLista();
  });
})();
