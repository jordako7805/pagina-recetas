# Instrucciones para Generar APK desde PWA usando PWABuilder.com

## Paso 1: Acceder a PWABuilder
1. Ve al sitio web: https://www.pwabuilder.com/
2. En el campo de entrada, pega la URL de tu PWA: https://jordako7805.github.io/pagina-recetas/

## Paso 2: Analizar la PWA
1. Haz clic en "Start" o "Analyze" para que PWABuilder analice tu sitio.
2. Espera a que complete el análisis. Debería detectar el manifest.json y service worker.

## Paso 3: Generar Paquetes
1. Una vez analizado, ve a la sección "Package for stores" o "Build my PWA".
2. Selecciona "Android" como plataforma.
3. Configura las opciones:
   - **App name:** De la Cesta a tu Mesa
   - **Package ID:** com.jordako.recetas (o similar)
   - **Version:** 1.0.0
   - **Icon:** Usa el logo existente o sube uno nuevo (192x192 recomendado)
   - **Description:** Blog de recetas deliciosas
   - **Permissions:** INTERNET (ya incluido en manifest)

## Paso 4: Descargar APK
1. Haz clic en "Generate" o "Download".
2. Espera a que genere el APK (puede tomar unos minutos).
3. Descarga el archivo .apk generado.

## Paso 5: Instalar y Probar APK
1. Transfiere el APK a un dispositivo Android.
2. Habilita "Instalación de apps desconocidas" en Configuración > Seguridad.
3. Instala el APK tocando en él.
4. Abre la app y verifica que funcione como la PWA.

## Notas Importantes
- Asegúrate de que tu PWA esté funcionando correctamente antes de generar el APK.
- Si hay errores en el análisis, revisa el manifest.json y sw.js.
- Para publicar en Google Play, necesitarás una cuenta de desarrollador y firmar el APK.
- Alternativa: Usa Buildozer (ya configurado en buildozer.spec) instalando Android SDK y ejecutando `buildozer android debug`.

## Recursos Adicionales
- Documentación PWABuilder: https://docs.pwabuilder.com/
- Guía completa de hospedaje: guia_hospedaje.pdf
