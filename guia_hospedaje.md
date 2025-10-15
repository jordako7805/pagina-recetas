# Guía Completa para Hospedar, Acceder y Convertir la Página Web de Recetas en Aplicación

## Introducción
Esta guía proporciona los pasos detallados para hospedar tu página web estática de recetas ("De la Cesta a tu Mesa") en un servidor público, hacerla accesible desde cualquier navegador web y dispositivo móvil, generar un código QR para un acceso rápido, y convertirla en una aplicación móvil basada en la página. La página es estática (HTML, CSS, imágenes y PDFs), lo que facilita el proceso.

**Nota:** Asegúrate de que la página sea responsive (adaptable a móviles), como lo es actualmente según el CSS proporcionado. Si no lo es, ajusta el CSS para dispositivos móviles.

## Requisitos Previos
- **Cuenta en un servicio de hosting gratuito:** Recomendado GitHub Pages (requiere cuenta en GitHub).
- **Repositorio Git:** Para subir los archivos al hosting.
- **Herramientas para QR:** Sitio web como qr-code-generator.com o herramienta online gratuita.
- **Para la aplicación móvil:**
  - Conocimientos básicos de HTML/CSS/JS.
  - Herramientas como PWA (Progressive Web App) o frameworks como Cordova/PhoneGap para apps híbridas.
- **Software adicional:**
  - Git instalado (descárgalo de git-scm.com).
  - Un editor de texto (como VS Code).
  - Para generar el PDF de esta guía: Pandoc instalado (opcional, para convertir este Markdown a PDF).

## Paso 1: Preparar la Página para Hosting
1. **Verificar rutas relativas:** Asegúrate de que todas las rutas a imágenes, CSS y PDFs sean relativas (ej. `img/logo/logo.png` en lugar de rutas absolutas). En tu proyecto, ya están correctas.
2. **Optimizar imágenes:** Comprime las imágenes en `img/` para reducir el tamaño (usa herramientas online como tinypng.com).
3. **Probar localmente:** Abre `index.html` en un navegador para verificar que todo funcione.
4. **Crear un repositorio Git:**
   - Ve a github.com y crea una nueva cuenta si no tienes.
   - Crea un nuevo repositorio público llamado `pagina-recetas` (o similar).
   - Instala Git en tu PC si no lo tienes.
   - En la terminal (cmd.exe), navega a la carpeta del proyecto: `cd "c:/Users/jordi/Desktop/DE LA CESTA A TU MESA/pagina_estatica - copia"`
   - Inicializa Git: `git init`
   - Agrega archivos: `git add .`
   - Commit: `git commit -m "Initial commit"`
   - Conecta al repositorio: `git remote add origin https://github.com/tuusuario/pagina-recetas.git`
   - Sube: `git push -u origin main`

## Paso 2: Hospedar la Página en GitHub Pages
GitHub Pages es gratuito y perfecto para páginas estáticas.
1. Ve a tu repositorio en GitHub.
2. Haz clic en "Settings" > "Pages".
3. En "Source", selecciona "Deploy from a branch" y elige la rama `main` (o `master`).
4. Haz clic en "Save".
5. Espera unos minutos; GitHub generará una URL como `https://tuusuario.github.io/pagina-recetas/`.
6. Accede a la URL desde cualquier navegador o móvil para verificar.
7. **Nota:** Si cambias archivos, haz commit y push, y la página se actualizará automáticamente.

**Alternativas de hosting:**
- **Netlify:** Sube el proyecto arrastrando la carpeta; URL gratuita.
- **Vercel:** Similar a Netlify.
- **000webhost o InfinityFree:** Para hosting con dominio gratuito.

## Paso 3: Generar un Código QR para Acceder a la Página
Una vez hospedada, genera un QR que apunte a la URL.
1. Ve a un generador de QR gratuito como qr-code-generator.com o goqr.me.
2. Ingresa la URL de tu página (ej. `https://tuusuario.github.io/pagina-recetas/`).
3. Descarga el QR como imagen PNG.
4. Comparte el QR: Imprímelo, envíalo por email, o publícalo en redes sociales.
5. Escanea el QR con la cámara de un móvil para acceder directamente.

## Paso 4: Crear una Aplicación Móvil Basada en la Página
Para convertir la página en una app móvil, usa Progressive Web App (PWA), que es la opción más simple y no requiere tiendas de apps.

### Opción 1: Convertir a PWA (Recomendado)
Las PWAs se instalan como apps en móviles y funcionan offline parcialmente.
1. **Crear un archivo manifest.json:**
   - Crea un archivo `manifest.json` en la raíz del proyecto con este contenido:
     ```json
     {
       "name": "De la Cesta a tu Mesa",
       "short_name": "Recetas",
       "description": "Blog de recetas deliciosas",
       "start_url": "/",
       "display": "standalone",
       "background_color": "#ffffff",
       "theme_color": "#4CAF50",
       "icons": [
         {
           "src": "img/logo/logo canal.png",
           "sizes": "192x192",
           "type": "image/png"
         }
       ]
     }
     ```
2. **Agregar service worker (opcional para offline):**
   - Crea `sw.js` con código básico para cachear archivos (busca "PWA service worker example").
3. **Actualizar index.html:**
   - Agrega en `<head>`: `<link rel="manifest" href="manifest.json">`
   - Agrega en `<head>`: `<meta name="theme-color" content="#4CAF50">`
4. **Subir cambios a GitHub:** Commit y push.
5. **Instalar en móvil:**
   - Accede a la URL desde un navegador móvil (Chrome/Safari).
   - En Chrome: Menú > "Agregar a pantalla de inicio".
   - En Safari: Compartir > "Agregar a pantalla de inicio".
   - La app aparecerá como icono en el móvil.

### Opción 2: Convertir a App Híbrida con Cordova (Más Avanzado)
Requiere Node.js instalado.
1. Instala Cordova: `npm install -g cordova`
2. Crea un proyecto: `cordova create miapp com.ejemplo.miapp "Mi App Recetas"`
3. Copia tus archivos HTML/CSS/JS a `miapp/www/`.
4. Agrega plataformas: `cordova platform add android` y/o `ios`.
5. Construye: `cordova build android`
6. Prueba en emulador o dispositivo: `cordova run android`
7. Para publicar: Firma la app y súbela a Google Play/App Store (requiere cuentas de desarrollador).

## Conclusión
Siguiendo estos pasos, tu página será accesible globalmente, con QR para fácil acceso, y como app en móviles. Si encuentras problemas, verifica rutas y compatibilidad. Para actualizaciones, edita localmente y sube a GitHub.

**Recursos adicionales:**
- Documentación GitHub Pages: docs.github.com
- PWAs: developers.google.com/web/progressive-web-apps
- Cordova: cordova.apache.org

Fecha de creación: [Inserta fecha]
