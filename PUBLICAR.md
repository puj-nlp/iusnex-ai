# Publicar el sitio

El sitio estático vive en `docs/`. El workflow `.github/workflows/pages.yml`
publica únicamente esa carpeta cuando se actualiza `main`.

En GitHub, abrir **Settings → Pages → Build and deployment** y seleccionar
**GitHub Actions** como fuente. Ejecutar el workflow **Deploy GitHub Pages**
si no se ejecuta automáticamente.

URL esperada: https://puj-nlp.github.io/iusnex-ai/

Desde WSL, en la raíz del repositorio:

```bash
git add docs .github/workflows/pages.yml
git commit -m "Update project website"
git push origin main
```

Revisar la ejecución en la pestaña Actions. Las carpetas de datos, código,
modelos y configuración de la raíz no forman parte del sitio publicado.
El contenido de `docs/` sí es público: incluir solo material aprobado para difusión.
