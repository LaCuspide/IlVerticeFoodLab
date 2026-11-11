# Il Vértice Food Lab — Página web

Web comercial en HTML, CSS y JavaScript simple. No necesita instalar nada ni "compilar": lo que subes a GitHub es lo que se publica.

Todos los botones de compra y cotización abren WhatsApp con un mensaje ya preparado.

---

## 1. Qué hay en cada carpeta

```
il-vertice-web/
├── index.html            ← la página completa
├── css/                  ← colores, tipografías y estilos
├── js/
│   ├── config.js         ← ⭐ número de WhatsApp, redes, mensajes
│   └── data/
│       ├── products.js   ← ⭐ productos (precios, fotos, descripciones)
│       └── services.js   ← ⭐ servicios (parrillas, catering, etc.)
└── assets/
    ├── img/              ← aquí van tus fotos
    ├── logo/             ← tu logotipo
    ├── fonts/            ← tipografías (no tocar)
    └── icons/            ← íconos de la pestaña (no tocar)
```

Los tres archivos con ⭐ son los únicos que normalmente vas a editar.

---

## 2. Ver la web en tu computadora (opcional)

Descarga la carpeta completa y haz doble clic en `index.html`. Se abre en tu navegador. No hay que instalar nada.

---

## 3. Publicar la web en GitHub Pages (primera vez)

1. Entra a [github.com](https://github.com) e inicia sesión.
2. Arriba a la derecha pulsa **+** → **New repository**.
3. Nombre del repositorio: por ejemplo `il-vertice-web`. Déjalo en **Public** y pulsa **Create repository**.
4. En la página del repositorio nuevo pulsa **uploading an existing file** (o **Add file → Upload files**).
5. Arrastra **todo el contenido** de la carpeta `il-vertice-web` (el `index.html`, las carpetas `css`, `js`, `assets` y el resto de archivos), no la carpeta contenedora.
6. Abajo pulsa **Commit changes**.
7. Ve a **Settings → Pages**.
8. En **Build and deployment**, en *Source* elige **Deploy from a branch**. En *Branch* elige **main** y la carpeta **/ (root)**. Pulsa **Save**.
9. Espera 1 o 2 minutos y recarga la página de Settings → Pages. Arriba aparecerá la dirección de tu web, parecida a:
   `https://TU-USUARIO.github.io/il-vertice-web/`

### Paso importante después de publicar: enlaces para compartir

Para que al compartir el enlace en WhatsApp o redes se vea la imagen y el título:

1. Abre `index.html` en GitHub y pulsa el lápiz ✏️ (Edit).
2. Busca `TU-USUARIO` y `NOMBRE-DEL-REPO` (aparecen en 3 líneas marcadas con ◄◄◄).
3. Reemplázalos por los datos reales de tu dirección web.
4. Pulsa **Commit changes**.

---

## 4. Cómo cambiar cosas (todo se hace desde GitHub, sin programar)

Para editar cualquier archivo: ábrelo en GitHub → pulsa el lápiz ✏️ → cambia el texto → **Commit changes**. En 1 o 2 minutos la web se actualiza.

**Regla de oro:** cambia solo lo que está entre comillas `"..."`. No borres comillas, comas ni llaves. Si dejas un dato vacío (`""`), simplemente no se muestra en la web.

### Cambiar el número de WhatsApp
Archivo `js/config.js`, línea `WHATSAPP_NUMBER`. Formato: código de país + número, sin espacios ni símbolos. Ejemplo: `"51943590093"`.
También actualiza `telefonoVisible` (el texto que se ve en el pie de página).

### Agregar tus redes sociales
Archivo `js/config.js`, sección `redes`. Pega el enlace completo, por ejemplo `"https://www.instagram.com/tu_usuario"`. Las redes vacías no aparecen.

### Completar precios, presentaciones y disponibilidad
Archivo `js/data/products.js`. Dentro de cada producto completa `presentacion`, `precio` y `disponibilidad`. Mientras estén vacíos, la web muestra "Consúltalo por WhatsApp" en el precio y oculta lo demás.

### Agregar un producto nuevo
En `js/data/products.js` hay una plantilla al final. Copia un bloque completo, agrégalo después del último producto (con una coma entre ellos) y cambia los datos. Para ocultar un producto sin borrarlo: `activo: false`.

### Agregar o cambiar servicios
Igual, en `js/data/services.js`.

### Agregar zona de atención u horario
Archivo `js/config.js`: `zonaAtencion` y `horarioAtencion`. Cuando los completes, aparecen en el pie de página.

### Reemplazar o agregar fotos
1. Prepara la foto en formato **WebP** o JPG. Recomendado: productos 800 × 600 px (horizontal 4:3) y servicios 800 × 450 px (16:9), de **menos de 200 KB** cada una, para que la web cargue rápido en el celular. Puedes convertirlas gratis en [squoosh.app](https://squoosh.app).
2. En GitHub entra a la carpeta `assets/img`, pulsa **Add file → Upload files** y sube la foto.
3. Abre `js/data/products.js` (o `services.js`) y escribe la ruta en `imagen`, por ejemplo:
   `imagen: "assets/img/croquetas-pollo.webp",`
4. Completa también `imagenAlt` con una descripción corta de la foto.

Mientras un producto no tenga foto, se muestra un marcador con el sello y el texto "Foto próximamente".

### Cambiar los mensajes de WhatsApp
- Mensaje propio de un producto o servicio: campo `mensaje` en su archivo de datos.
- Mensajes generales: `js/config.js`, sección `mensajes`.

---

## 5. Probar que todo funcione

Después de publicar, abre la web desde tu celular y toca un botón de producto y uno de servicio. Debe abrirse WhatsApp con el mensaje escrito. Si tu WhatsApp Business aún no está activo con ese número, WhatsApp mostrará que el número no está registrado; cuando lo actives, funcionará sin cambiar nada.

---

## 6. Notas técnicas (para quien las necesite)

- Mobile-first, sin dependencias externas ni backend. Las tipografías (Fraunces y DM Sans) están incluidas en el proyecto.
- Los productos y servicios se dibujan en la página a partir de los archivos de `js/data/`. Los buscadores como Google ejecutan JavaScript, por lo que los leen sin problema.
- Si más adelante necesitas carrito de compras, pagos o panel de administración, habrá que migrar a un framework (por ejemplo React) y un backend; la estructura de datos actual facilita esa migración.
