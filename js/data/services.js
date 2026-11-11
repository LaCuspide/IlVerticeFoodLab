/* ==========================================================
   SERVICIOS GASTRONÓMICOS
   ----------------------------------------------------------
   Cada servicio es un bloque entre llaves { ... }.
   Para AGREGAR uno: copia un bloque completo, pégalo debajo
   del último (con una coma antes) y cambia los datos.
   Para OCULTAR uno sin borrarlo: activo: false

   CAMPOS:
   - id           Nombre corto sin espacios ni tildes (no repetir).
   - activo       true = se muestra · false = se oculta.
   - nombre       Nombre del servicio.
   - icono        Uno de: "fuego", "bandeja", "pastel", "copa".
   - descripcion  Texto breve.
   - puntos       Lista de puntos con check.
   - imagen       Foto opcional, ej. "assets/img/parrillas.webp".
                  Vacío "" = se muestra solo el bloque de color con ícono.
   - imagenAlt    Descripción de la foto.
   - mensaje      Mensaje de WhatsApp propio. Vacío "" = usa el general.

   IMPORTANTE: aquí no se muestran paquetes, tarifas ni capacidades
   porque todavía no están definidos. Cuando lo estén, se agregan
   como nuevos puntos en la lista "puntos".
   ========================================================== */

const SERVICIOS = [
  {
    id: "parrillas",
    activo: true,
    nombre: "Parrillas",
    icono: "fuego",
    descripcion: "Organizamos la parrilla de tu reunión o evento.",
    puntos: [
      "Parrillas para reuniones y eventos",
      "Alternativas de servicio según la cantidad de invitados",
      "Cotización personalizada"
    ],
    imagen: "",
    imagenAlt: "Servicio de parrillas para eventos de Il Vértice Food Lab",
    mensaje:
      "Hola, Il Vértice. Quisiera solicitar una cotización para el servicio de parrillas. ¿Podrían ayudarme?"
  },
  {
    id: "catering",
    activo: true,
    nombre: "Catering",
    icono: "bandeja",
    descripcion: "Propuestas gastronómicas para reuniones y celebraciones.",
    puntos: [
      "Opciones de bocaditos y preparaciones",
      "Cotización según tus requerimientos"
    ],
    imagen: "",
    imagenAlt: "Servicio de catering de Il Vértice Food Lab",
    mensaje:
      "Hola, Il Vértice. Quisiera solicitar una cotización para el servicio de catering. ¿Podrían ayudarme?"
  },
  {
    id: "cumpleanos",
    activo: true,
    nombre: "Cumpleaños y celebraciones",
    icono: "pastel",
    descripcion: "Servicio gastronómico para cumpleaños y reuniones privadas.",
    puntos: [
      "Servicio gastronómico para cumpleaños",
      "Atención de reuniones privadas",
      "Opciones personalizadas"
    ],
    imagen: "",
    imagenAlt: "Servicio gastronómico para cumpleaños de Il Vértice Food Lab",
    mensaje:
      "Hola, Il Vértice. Quisiera solicitar una cotización para un cumpleaños o celebración. ¿Podrían ayudarme?"
  },
  {
    id: "eventos-privados",
    activo: true,
    nombre: "Eventos privados",
    icono: "copa",
    descripcion: "Soluciones gastronómicas para reuniones sociales.",
    puntos: [
      "Propuestas adaptadas al tipo de evento",
      "Opciones según tu presupuesto"
    ],
    imagen: "",
    imagenAlt: "Servicio gastronómico para eventos privados de Il Vértice Food Lab",
    mensaje:
      "Hola, Il Vértice. Quisiera solicitar una cotización para un evento privado. ¿Podrían ayudarme?"
  }
];
