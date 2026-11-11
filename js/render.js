/* ==========================================================
   RENDER — dibuja productos, servicios y contacto a partir de
   los archivos de datos. (No necesitas editar este archivo.)
   ========================================================== */

(function () {
  "use strict";

  /* Evita que un texto con caracteres especiales rompa la página */
  function esc(texto) {
    return String(texto == null ? "" : texto)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  var ICONO_WA =
    '<svg class="icono" aria-hidden="true" focusable="false"><use href="#i-whatsapp"></use></svg>';

  /* Íconos de servicios (línea simple, 24x24) */
  var ICONOS_SERVICIO = {
    fuego:
      '<path d="M12 2.5c1 3.5 5.5 6 5.5 11a5.5 5.5 0 0 1-11 0c0-2 .9-3.6 2-4.8.3 1.3 1 2.1 1.8 2.5C10 8 10.8 5 12 2.5z"/><path d="M12 18.5a2.2 2.2 0 0 1-2.2-2.2c0-1.4 1.3-2 2.2-3.5.9 1.5 2.2 2.1 2.2 3.5a2.2 2.2 0 0 1-2.2 2.2z"/>',
    bandeja:
      '<path d="M3 18h18"/><path d="M5 18a7 7 0 0 1 14 0"/><path d="M12 11V8.5"/><path d="M10.5 8.5h3"/><path d="M2.5 21h19"/>',
    pastel:
      '<path d="M4 21h16"/><path d="M5 21v-7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7"/><path d="M5 17.2c2 1.4 3.4 1.4 5 0s3-1.4 5 0 2.6 1.4 4 0"/><path d="M9 13V9.5"/><path d="M15 13V9.5"/><path d="M9 7.2v-.4"/><path d="M15 7.2v-.4"/>',
    copa:
      '<path d="M7 3h10l-1 6.5a4 4 0 0 1-8 0L7 3z"/><path d="M12 13.5V21"/><path d="M8 21h8"/>'
  };

  function iconoServicio(nombre) {
    var trazo = ICONOS_SERVICIO[nombre] || ICONOS_SERVICIO.bandeja;
    return (
      '<svg class="icono--linea" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
      trazo +
      "</svg>"
    );
  }

  /* ---------- PRODUCTOS ---------- */
  function tarjetaProducto(p) {
    var medio;
    if (p.imagen) {
      medio =
        '<div class="medio">' +
        (p.etiqueta ? '<span class="insignia">' + esc(p.etiqueta) + "</span>" : "") +
        '<img src="' + esc(p.imagen) + '" alt="' + esc(p.imagenAlt || p.nombre) +
        '" loading="lazy" width="800" height="600"></div>';
    } else {
      medio =
        '<div class="medio medio--pendiente">' +
        (p.etiqueta ? '<span class="insignia">' + esc(p.etiqueta) + "</span>" : "") +
        '<img src="assets/logo/sello.webp" alt="" width="240" height="240" loading="lazy">' +
        '<span class="medio__aviso">' + esc(SITIO.textos.fotoPendiente) + "</span></div>";
    }

    var caracteristicas = "";
    if (p.caracteristicas && p.caracteristicas.length) {
      caracteristicas =
        '<ul class="lista-check">' +
        p.caracteristicas.map(function (c) { return "<li>" + esc(c) + "</li>"; }).join("") +
        "</ul>";
    }

    var filas = "";
    if (p.presentacion) {
      filas += "<div><dt>Presentación</dt><dd>" + esc(p.presentacion) + "</dd></div>";
    }
    filas +=
      "<div><dt>Precio</dt><dd>" +
      esc(p.precio || SITIO.textos.precioPendiente) +
      "</dd></div>";
    if (p.disponibilidad) {
      filas += "<div><dt>Disponibilidad</dt><dd>" + esc(p.disponibilidad) + "</dd></div>";
    }

    return (
      '<article class="tarjeta" aria-labelledby="prod-' + esc(p.id) + '">' +
      medio +
      '<div class="tarjeta__cuerpo">' +
      '<h3 class="tarjeta__titulo" id="prod-' + esc(p.id) + '">' + esc(p.nombre) + "</h3>" +
      '<p class="tarjeta__texto">' + esc(p.descripcion) + "</p>" +
      caracteristicas +
      '<dl class="datos">' + filas + "</dl>" +
      '<a class="btn btn--bloque" href="' + esc(WhatsApp.producto(p)) +
      '" target="_blank" rel="noopener noreferrer">' + ICONO_WA +
      "Pedir por WhatsApp</a>" +
      "</div></article>"
    );
  }

  function renderProductos() {
    var cont = document.getElementById("lista-productos");
    if (!cont) return;
    var activos = (typeof PRODUCTOS !== "undefined" ? PRODUCTOS : []).filter(function (p) {
      return p.activo !== false;
    });
    cont.innerHTML = activos.map(tarjetaProducto).join("");
  }

  /* ---------- SERVICIOS ---------- */
  function tarjetaServicio(s, indice) {
    var color = "servicio--c" + ((indice % 4) + 1);
    var foto = s.imagen
      ? '<div class="servicio__foto"><img src="' + esc(s.imagen) + '" alt="' +
        esc(s.imagenAlt || s.nombre) + '" loading="lazy" width="800" height="450"></div>'
      : "";
    var puntos = (s.puntos || [])
      .map(function (t) { return "<li>" + esc(t) + "</li>"; })
      .join("");

    return (
      '<article class="tarjeta ' + color + '" aria-labelledby="serv-' + esc(s.id) + '">' +
      '<div class="servicio__cabecera">' +
      '<span class="servicio__icono">' + iconoServicio(s.icono) + "</span>" +
      '<h3 id="serv-' + esc(s.id) + '">' + esc(s.nombre) + "</h3></div>" +
      foto +
      '<div class="tarjeta__cuerpo">' +
      '<p class="tarjeta__texto">' + esc(s.descripcion) + "</p>" +
      (puntos ? '<ul class="lista-check">' + puntos + "</ul>" : "") +
      '<a class="btn btn--bloque" href="' + esc(WhatsApp.servicio(s)) +
      '" target="_blank" rel="noopener noreferrer">' + ICONO_WA +
      "Solicitar cotización</a>" +
      "</div></article>"
    );
  }

  function renderServicios() {
    var cont = document.getElementById("lista-servicios");
    if (!cont) return;
    var activos = (typeof SERVICIOS !== "undefined" ? SERVICIOS : []).filter(function (s) {
      return s.activo !== false;
    });
    cont.innerHTML = activos.map(tarjetaServicio).join("");
  }

  /* ---------- BOTONES GENÉRICOS DE WHATSAPP (data-wa="general") ---------- */
  function renderEnlacesGenerales() {
    var enlaces = document.querySelectorAll('[data-wa="general"]');
    var href = WhatsApp.general();
    for (var i = 0; i < enlaces.length; i++) {
      enlaces[i].setAttribute("href", href);
      enlaces[i].setAttribute("target", "_blank");
      enlaces[i].setAttribute("rel", "noopener noreferrer");
    }
  }

  /* ---------- CONTACTO (footer) ---------- */
  function renderContacto() {
    var lista = document.getElementById("contacto-lista");
    if (!lista) return;
    var items = [];

    items.push(
      '<li><a href="' + esc(WhatsApp.general()) +
        '" target="_blank" rel="noopener noreferrer">' + ICONO_WA +
        "WhatsApp: " + esc(SITIO.telefonoVisible || "Escríbenos") + "</a></li>"
    );
    if (SITIO.horarioAtencion) {
      items.push("<li>Atención: " + esc(SITIO.horarioAtencion) + "</li>");
    }
    if (SITIO.zonaAtencion) {
      items.push("<li>Zona de atención: " + esc(SITIO.zonaAtencion) + "</li>");
    }
    lista.innerHTML = items.join("");
  }

  function renderRedes() {
    var bloque = document.getElementById("bloque-redes");
    var lista = document.getElementById("redes-lista");
    if (!bloque || !lista) return;
    var nombres = { instagram: "Instagram", tiktok: "TikTok", facebook: "Facebook" };
    var items = [];
    Object.keys(nombres).forEach(function (clave) {
      var url = SITIO.redes && SITIO.redes[clave];
      if (url) {
        items.push(
          '<li><a href="' + esc(url) + '" target="_blank" rel="noopener noreferrer">' +
            nombres[clave] + "</a></li>"
        );
      }
    });
    if (items.length) {
      lista.innerHTML = items.join("");
      bloque.hidden = false;
    }
  }

  function renderAnio() {
    var el = document.getElementById("anio");
    if (el) el.textContent = new Date().getFullYear();
  }

  window.Render = {
    todo: function () {
      renderProductos();
      renderServicios();
      renderEnlacesGenerales();
      renderContacto();
      renderRedes();
      renderAnio();
    }
  };
})();
