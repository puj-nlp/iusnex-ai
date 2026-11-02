# IUSNEX AI

Inteligencia Artificial para el Derecho, la Justicia y la Sociedad.

Boilerplate de sitio estático: HTML, CSS y JavaScript, sin instalación ni compilación.
El contenido académico se deja como secciones por completar.

## Archivos

| Ruta | Propósito |
| --- | --- |
| `docs/index.html` | Inicio y secciones del sitio |
| `docs/assets/css/styles.css` | Diseño adaptable y colores |
| `docs/assets/js/main.js` | Mejoras opcionales |
| `docs/assets/img/` | Imágenes y favicon provisional |
| `docs/404.html` | Página de error |
| `docs/.nojekyll` | Publicación estática sin procesamiento Jekyll |
| `PUBLICAR.md` | Instrucciones de publicación |

## Editar

Completar las secciones Proyecto, Investigación, Equipo, Alianzas, Resultados,
Recursos y Contacto en `docs/index.html`. Sustituir el favicon provisional si corresponde.
Usar rutas relativas, como `assets/img/foto.jpg`, para mantener compatibilidad con
la ruta de proyecto `/iusnex-ai/`.

## Vista local

Desde la raíz del repositorio:

```bash
python3 -m http.server 8000 --directory docs
```

Abrir http://localhost:8000. Detener con Ctrl+C.

Consulta [PUBLICAR.md](PUBLICAR.md) para habilitar GitHub Pages.

## Estructura de ciencia de datos e IA

| Carpeta | Uso |
| --- | --- |
| `data/{raw,external,interim,processed}/` | Datos originales, externos y transformados; excluidos de Git |
| `notebooks/` | Exploración y experimentos numerados |
| `src/iusnex_ai/` | Código reutilizable: datos, características, modelado y evaluación |
| `configs/` | Configuración reproducible sin secretos |
| `models/` | Artefactos de modelos; excluidos de Git |
| `reports/{figures,metrics}/` | Informes y resultados generados |
| `references/` | Bibliografía y documentación de apoyo |
| `scripts/` | Automatización y tareas auxiliares |
| `tests/` | Pruebas del código que se implemente |
| `docs/` | Sitio público de GitHub Pages |

La estructura queda preparada sin imponer todavía librerías de ML ni un gestor
 de dependencias. Los directorios vacíos se conservan con `.gitkeep`.
Trabajar con Git desde WSL en `/mnt/d/project/javeriana/repos/iusnex-ai`.
