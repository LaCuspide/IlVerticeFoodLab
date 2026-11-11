/* ==========================================================
   CATÁLOGO DE PRODUCTOS
   ----------------------------------------------------------
   Cada producto es un bloque entre llaves { ... }.
   Para AGREGAR un producto: copia un bloque completo (desde
   { hasta },), pégalo debajo del último y cambia los datos.
   Para OCULTAR un producto sin borrarlo: activo: false

   CAMPOS:
   - id             Nombre corto sin espacios ni tildes (no repetir).
   - activo         true = se muestra · false = se oculta.
   - nombre         Nombre del producto.
   - etiqueta       Sello pequeño sobre la foto (ej. "Congelado").
   - descripcion    Texto breve debajo del nombre.
   - caracteristicas Lista de puntos con check.
   - presentacion   Ej. "Pack de 12 unidades". Vacío "" = no se muestra.
   - precio         Ej. "S/ 25.00". Vacío "" = "Consúltalo por WhatsApp".
   - disponibilidad Ej. "Por pedido". Vacío "" = no se muestra.
   - imagen         Ruta de la foto, ej. "assets/img/croquetas-pollo.webp".
                    Vacío "" = se muestra un marcador "Foto próximamente".
   - imagenAlt      Descripción de la foto (para accesibilidad y Google).
   - mensaje        Mensaje de WhatsApp propio. Vacío "" = usa el general.
   ========================================================== */

const PRODUCTOS = [
  {
    id: "croquetas-pollo",
    activo: true,
    nombre: "Croquetas de pollo",
    etiqueta: "Congelado",
    descripcion:
      "Croquetas de pollo congeladas, preparadas para que las cocines en casa.",
    caracteristicas: ["Producto congelado", "Listas para cocinar en casa"],
    presentacion: "",   // PENDIENTE: pack y cantidad por definir
    precio: "",         // PENDIENTE
    disponibilidad: "", // PENDIENTE
    imagen: "",
    imagenAlt: "Croquetas de pollo de Il Vértice Food Lab",
    mensaje:
      "Hola, Il Vértice. Estoy interesado en comprar las croquetas de pollo. ¿Podrían brindarme información sobre disponibilidad, presentaciones y entrega?"
  },
  {
    id: "croquetas-aji-de-gallina",
    activo: true,
    nombre: "Croquetas de ají de gallina",
    etiqueta: "Congelado",
    descripcion:
      "Croquetas de ají de gallina congeladas, preparadas para que las cocines en casa.",
    caracteristicas: ["Producto congelado", "Listas para cocinar en casa"],
    presentacion: "",   // PENDIENTE: pack y cantidad por definir
    precio: "",         // PENDIENTE
    disponibilidad: "", // PENDIENTE
    imagen: "",
    imagenAlt: "Croquetas de ají de gallina de Il Vértice Food Lab",
    mensaje:
      "Hola, Il Vértice. Estoy interesado en comprar las croquetas de ají de gallina. ¿Podrían brindarme información sobre disponibilidad, presentaciones y entrega?"
  }

  /* ---- PLANTILLA para un producto nuevo (copia el bloque, quita la marca de comentario y completa) ----
  ,
  {
    id: "nombre-corto",
    activo: true,
    nombre: "Nombre del producto",
    etiqueta: "Congelado",
    descripcion: "Descripción breve.",
    caracteristicas: ["Característica 1", "Característica 2"],
    presentacion: "",
    precio: "",
    disponibilidad: "",
    imagen: "",
    imagenAlt: "Descripción de la foto",
    mensaje: ""
  }
  ------------------------------------------------------------------------ */
];
