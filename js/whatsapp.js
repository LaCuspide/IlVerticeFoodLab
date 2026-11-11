/* ==========================================================
   WHATSAPP — arma los enlaces wa.me con mensaje codificado
   (No necesitas editar este archivo.)
   ========================================================== */

(function () {
  "use strict";

  /** Deja solo los dígitos del número (quita +, espacios y guiones). */
  function numeroLimpio() {
    var bruto = typeof WHATSAPP_NUMBER === "string" ? WHATSAPP_NUMBER : "";
    return bruto.replace(/\D/g, "");
  }

  /** Devuelve el enlace de WhatsApp con el mensaje ya codificado. */
  function enlace(mensaje) {
    var numero = numeroLimpio();
    if (!numero) {
      console.warn(
        "[Il Vértice] Falta el número de WhatsApp. Escríbelo en js/config.js (WHATSAPP_NUMBER)."
      );
      return "#contacto";
    }
    return "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
  }

  function rellenar(plantilla, nombre) {
    return plantilla.split("{nombre}").join(nombre);
  }

  function enlaceGeneral() {
    return enlace(SITIO.mensajes.general);
  }

  function enlaceProducto(producto) {
    var mensaje =
      producto.mensaje || rellenar(SITIO.mensajes.producto, producto.nombre);
    return enlace(mensaje);
  }

  function enlaceServicio(servicio) {
    var mensaje =
      servicio.mensaje || rellenar(SITIO.mensajes.servicio, servicio.nombre);
    return enlace(mensaje);
  }

  window.WhatsApp = {
    numero: numeroLimpio,
    general: enlaceGeneral,
    producto: enlaceProducto,
    servicio: enlaceServicio
  };
})();
