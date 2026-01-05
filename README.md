# explorate-psicologia

## Contribuir — formato y hooks

- Este repositorio aplica `tabs` con `tabWidth = 2` y usa Prettier + ESLint.
- Para mantener consistencia instala en VS Code las extensiones `Prettier - Code formatter` y `ESLint` y recarga la ventana.
- Hooks de commit están activos (Husky + lint-staged). Antes de commitear los archivos staged se formatearán con Prettier y se intentará arreglar problemas con ESLint.

Comandos útiles:

```powershell
npm install
npm run format       # formatea todos los ficheros con Prettier
npm run lint         # ejecuta ESLint
npm run prepare      # (si necesitas reinstalar los hooks localmente)
```

Si quieres omitir el pre-commit temporalmente: `git commit --no-verify`, pero no es recomendado.
