# Portafolio Nicolás Buitrago

Portafolio profesional construido con React, Vite, TypeScript, Node.js y Express. Está enfocado en perfil QA Automation, pruebas de software, gestión de defectos, UAT, bases de datos y metodologías ágiles.

## Tecnologías

- React 19
- TypeScript
- Vite
- CSS moderno con glassmorphism
- Motion para animaciones
- Lucide React para iconos
- Express para servir la app en producción

## Ejecutar en local

```bash
npm install
npm run dev
```

Abrir:

```bash
http://localhost:5173
```

## Construir producción

```bash
npm run build
npm start
```

## Despliegue en Render

1. Sube este proyecto a un repositorio nuevo en GitHub.
2. Entra a Render.
3. Crea un `New Web Service`.
4. Conecta el repositorio.
5. Usa esta configuración:

```bash
Environment: Node
Build Command: npm install && npm run build
Start Command: npm start
```

6. Agrega variable de entorno opcional:

```bash
NODE_ENV=production
```

7. Publica el servicio.

## Personalización recomendada

Antes de publicar, revisa estos datos en `src/main.tsx`:

- Enlace de GitHub.
- Número de celular, si no quieres mostrarlo públicamente.
- Proyectos destacados.
- Experiencia profesional.
- Tecnologías que quieras priorizar.
