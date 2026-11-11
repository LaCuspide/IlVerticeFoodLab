/* ==========================================================
   MAIN — menú móvil, sección activa y botón flotante
   (No necesitas editar este archivo.)
   ========================================================== */

(function () {
  "use strict";

  /* 1) Dibujar productos, servicios, enlaces y contacto */
  Render.todo();

  /* 2) Menú móvil */
  var boton = document.getElementById("menu-boton");
  var nav = document.getElementById("menu");

  function abrirMenu(abrir) {
    boton.setAttribute("aria-expanded", abrir ? "true" : "false");
    boton.setAttribute("aria-label", abrir ? "Cerrar menú" : "Abrir menú");
    nav.classList.toggle("nav--abierto", abrir);
  }

  if (boton && nav) {
    boton.addEventListener("click", function () {
      abrirMenu(boton.getAttribute("aria-expanded") !== "true");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) abrirMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        abrirMenu(false);
        boton.focus();
      }
    });
    window.matchMedia("(min-width: 900px)").addEventListener("change", function (e) {
      if (e.matches) abrirMenu(false);
    });
  }

  /* 3) Marcar en el menú la sección que se está viendo */
  if ("IntersectionObserver" in window) {
    var enlaces = document.querySelectorAll(".nav__lista a");
    var mapa = {};
    for (var i = 0; i < enlaces.length; i++) {
      mapa[enlaces[i].getAttribute("href").slice(1)] = enlaces[i];
    }
    var observador = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          if (!entrada.isIntersecting) return;
          Object.keys(mapa).forEach(function (id) {
            if (id === entrada.target.id) mapa[id].setAttribute("aria-current", "true");
            else mapa[id].removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    Object.keys(mapa).forEach(function (id) {
      var seccion = document.getElementById(id);
      if (seccion) observador.observe(seccion);
    });

    /* 4) Ocultar el botón flotante cuando ya se ve un botón grande de WhatsApp
          (llamado final y contacto), para no tapar contenido. */
    var flotante = document.getElementById("flotante-wa");
    var zonasConAccion = document.querySelectorAll("[data-oculta-flotante]");
    if (flotante && zonasConAccion.length) {
      var visibles = new Set();
      var obs2 = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (entrada) {
          if (entrada.isIntersecting) visibles.add(entrada.target);
          else visibles.delete(entrada.target);
        });
        flotante.classList.toggle("flotante--oculto", visibles.size > 0);
      });
      zonasConAccion.forEach(function (z) { obs2.observe(z); });
    }
  }
})();
