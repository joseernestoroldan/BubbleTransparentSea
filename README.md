
# Bubble Transparent Sea 🐠

Una landing page inmersiva con temática oceánica para una empresa ficticia de excursiones submarinas. Construida con **Next.js 15**, **React 19**, **TypeScript** y **Tailwind CSS**, presenta burbujas animadas flotantes, un sidebar interactivo y un diseño visual pulido que evoca la profundidad del mar.

---

## ✨ Características

- **Fondo oceánico a pantalla completa** — Imagen de fondo (`bg.webp`) con overlay semitransparente.
- **Burbujas animadas** — 5 burbujas que flotan infinitamente desde la parte inferior con delays escalonados (CSS keyframes).
- **Sidebar deslizable** — Panel de navegación lateral derecho con animación suave, accesible mediante botón hamburguesa o atajo de teclado (`Ctrl/Cmd + B`).
- **Diseño responsive** — El sidebar se adapta a dispositivos móviles usando un `Sheet` de Radix UI.
- **Efectos visuales** — Sombras en texto, brillos en botones, transiciones suaves y gradientes.
- **Storybook** — Catálogo de componentes para desarrollo y documentación visual.

---

## 🛠 Stack Tecnológico

| Tecnología | Versión | Propósito |
|---|---|---|
| [Next.js](https://nextjs.org/) | 15.1.6 | Framework React con App Router y Turbopack |
| [React](https://react.dev/) | 19.0.0 | Librería de interfaz de usuario |
| [TypeScript](https://www.typescriptlang.org/) | ^5 | Tipado estático |
| [Tailwind CSS](https://tailwindcss.com/) | ^3.4.1 | CSS utility-first |
| [shadcn/ui](https://ui.shadcn.com/) | — | Componentes reutilizables (sidebar, sheet, tooltip, button) |
| [Radix UI](https://www.radix-ui.com/) | — | Primitivas de UI headless y accesibles |
| [Lucide React](https://lucide.dev/) | ^0.474.0 | Íconos de menú |
| [React Icons](https://react-icons.github.io/react-icons/) | ^5.4.0 | Íconos de redes sociales y acciones |
| [Storybook](https://storybook.js.org/) | ^8.5.1 | Desarrollo y documentación de componentes |
| [PostCSS](https://postcss.org/) | ^8 | Procesamiento de CSS |

---

## 🧱 Estructura del Proyecto

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx              # Página /about
│   ├── components/
│   │   ├── ActionButtons/        # Botones de compartir y ayuda
│   │   ├── AppSidebar/           # Panel lateral con navegación
│   │   ├── Bubble/               # Burbuja individual animada
│   │   ├── Bubbles/              # Contenedor de burbujas
│   │   ├── Button/               # Botón CTA personalizado
│   │   ├── Header/               # Título principal
│   │   ├── IconWrapper/          # Contenedor de íconos con opacidad
│   │   ├── Logo/                 # Logotipo del sitio
│   │   ├── Navbar/               # Barra de navegación superior
│   │   ├── SidebarNav/           # Menú vertical del sidebar
│   │   ├── SidebarSection/       # Sección agrupada del sidebar
│   │   ├── SidebarWrapper/       # Provider del sidebar (cliente)
│   │   ├── Social/               # Íconos de redes sociales
│   │   ├── SubHeader/            # Subtítulo
│   │   ├── TriggerSidebar/       # Botón de apertura/cierre
│   │   └── ui/                   # Componentes base de shadcn/ui
│   ├── globals.css               # Estilos globales y animaciones
│   ├── layout.tsx                # Layout raíz
│   └── page.tsx                  # Página principal (hero + burbujas)
├── hooks/
│   └── use-mobile.tsx            # Hook para detectar viewport móvil
├── lib/
│   └── utils.ts                  # Función cn() (clsx + tailwind-merge)
├── public/
│   ├── bg.webp                   # Imagen de fondo oceánico
│   ├── bubble.png                # Sprite de burbuja
│   └── logo.png                  # Logotipo
└── stories/                      # Storybook stories
```

---

## 🚀 Comenzar

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir http://localhost:3000
```

### Storybook

```bash
npm run storybook
```

---

## 🧠 ¿Cómo funciona?

### Layout global (`app/layout.tsx`)
El layout raíz carga las fuentes **Geist Sans** y **Geist Mono** de Vercel, establece el fondo oceánico con overlay oscuro, y envuelve todo en el `SidebarWrapper` que gestiona el estado del sidebar mediante React Context.

### Página principal (`app/page.tsx`)
Una hero section centrada vertical y horizontalmente que muestra:
- **Header** — Título en cursiva, negrita, blanca con sombra de texto.
- **SubHeader** — Subtítulo "Where the ocean's secrets come to light."
- **Botones CTA** — "Take a tour" y "Sign Up" con borde blanco que se invierten al hacer hover.
- **Burbujas animadas** — 5 elementos posicionados absolutamente en la parte inferior que ascienden con una animación CSS infinita de 7 segundos, con delays escalonados.

### Sidebar
Sistema completo de navegación lateral que incluye:
- **Desktop** — Panel deslizante animado con fondo degradado (cyan a azul marino).
- **Mobile** — Se convierte en un `Sheet` (dialog overlay) usando Radix UI.
- **Atajo de teclado** — `Ctrl/Cmd + B` para abrir/cerrar.
- **Menú** — 7 rutas: Home, About Us, Available Tours, Subscription Plans, Blog, FAQ, Contact.
- **Persistencia** — El estado del sidebar se guarda en cookies.

### Animación de burbujas
Definida en `globals.css` con `@keyframes bubble`:
1. Inicia invisible y abajo (opacity 0, translateY 0).
2. Hacia el 50% se vuelve visible (opacity 1).
3. Al 100% asciende 80vh y se desvanece.
4. Cada burbuja tiene tamaño y delay distintos para un efecto orgánico.

---

## 📄 Licencia

Este proyecto es de uso libre con fines educativos y de demostración.
