/* ==========================================================
   CONFIGURACIÓN CENTRAL DE LA WEB — IL VÉRTICE FOOD LAB
   ----------------------------------------------------------
   Este es uno de los 3 archivos que normalmente vas a editar
   (los otros dos: data/products.js y data/services.js).

   REGLAS PARA EDITAR SIN ROMPER NADA:
   - Cambia solo lo que está dentro de las comillas "...".
   - No borres las comillas, las comas ni las llaves.
   - Si un dato aún no está definido, déjalo así: "" (vacío).
     Lo vacío NO se muestra en la web.
   ========================================================== */

/* ----------------------------------------------------------
   1) NÚMERO DE WHATSAPP  ← AQUÍ SE CAMBIA EL NÚMERO
   Formato: código de país + número, SIN espacios, guiones ni "+".
   Ejemplo Perú: 51943590093  (51 = Perú, luego el celular de 9 dígitos)
   ---------------------------------------------------------- */
const WHATSAPP_NUMBER = "51943590093";

/* ----------------------------------------------------------
   2) DATOS GENERALES DEL NEGOCIO
   ---------------------------------------------------------- */
const SITIO = {
  nombreComercial: "Il Vértice Food Lab",
  descriptor: "Dulce & Salado",

  /* Cómo se ve el teléfono escrito en la web (solo texto visible) */
  telefonoVisible: "+51 943 590 093",

  /* Redes sociales: pega el enlace completo, por ejemplo
     "https://www.instagram.com/tu_usuario". Vacío = no se muestra. */
  redes: {
    instagram: "",
    tiktok: "",
    facebook: ""
  },

  /* PENDIENTES: mientras estén vacíos, no aparecen en la web. */
  zonaAtencion: "",      // Ejemplo: "Lima Metropolitana"
  horarioAtencion: "",   // Ejemplo: "Lunes a sábado, 9:00 a 20:00"

  /* ----------------------------------------------------------
     3) MENSAJES DE WHATSAPP
     {nombre} se reemplaza automáticamente por el nombre del
     producto o servicio que el cliente eligió.
     (Cada producto/servicio puede tener su propio mensaje
     en su archivo de datos; si no lo tiene, se usa este.)
     ---------------------------------------------------------- */
  mensajes: {
    general:
      "Hola, Il Vértice. Me gustaría recibir información sobre sus productos y servicios.",
    producto:
      "Hola, Il Vértice. Estoy interesado en comprar {nombre}. ¿Podrían brindarme información sobre disponibilidad, presentaciones y entrega?",
    servicio:
      "Hola, Il Vértice. Quisiera solicitar una cotización para el servicio de {nombre}. ¿Podrían ayudarme?"
  },

  /* Textos que se muestran cuando falta un dato */
  textos: {
    precioPendiente: "Consúltalo por WhatsApp",
    fotoPendiente: "Foto próximamente"
  }
};
