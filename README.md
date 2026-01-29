# 🌐 DelRio Internet - Sitio Web

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.0.7-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.1-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

**Sitio web corporativo de DelRio Internet, proveedor de servicios de Internet por fibra óptica y tecnología inalámbrica en Mendoza, Argentina.**

[Demo en Vivo](https://delriointernet.com.ar) · [Reportar Bug](https://github.com/tu-repo/issues) · [Solicitar Feature](https://github.com/tu-repo/issues)

</div>

---

## 📋 Tabla de Contenidos

- [Acerca del Proyecto](#-acerca-del-proyecto)
- [Características Principales](#-características-principales)
- [Tecnologías Utilizadas](#️-tecnologías-utilizadas)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Comenzando](#-comenzando)
  - [Prerrequisitos](#prerrequisitos)
  - [Instalación](#instalación)
  - [Variables de Entorno](#variables-de-entorno)
- [Scripts Disponibles](#-scripts-disponibles)
- [Páginas y Rutas](#-páginas-y-rutas)
- [Componentes Principales](#-componentes-principales)
- [SEO y Optimización](#-seo-y-optimización)
- [Deploy](#-deploy)
- [Estructura de Archivos](#-estructura-de-archivos)
- [Contribución](#-contribución)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

---

## 🎯 Acerca del Proyecto

El sitio web de **DelRio Internet** es una plataforma moderna y profesional diseñada para presentar los servicios de conectividad de alta velocidad que la empresa ofrece en Mendoza, Argentina. El sitio está optimizado para conversión, SEO y experiencia de usuario.

### ¿Qué es DelRio Internet?

DelRio Internet es un proveedor de servicios de Internet (ISP) que ofrece:

- 🏠 **Planes Hogar**: Internet de alta velocidad para uso residencial
- 🏢 **Planes Empresariales**: Soluciones corporativas con IP fija y soporte prioritario
- 🌐 **Tecnología de Punta**: Fibra óptica y enlaces inalámbricos
- 📞 **Soporte Local**: Atención personalizada y técnicos en la zona

---

## ✨ Características Principales

### 🎨 Diseño y UX

- ✅ Diseño moderno y responsive (mobile-first)
- ✅ Animaciones fluidas y transiciones suaves
- ✅ Interfaz intuitiva con navegación clara
- ✅ Componentes accesibles (WCAG AA)
- ✅ Modo optimizado para diferentes dispositivos

### 🚀 Rendimiento

- ✅ Optimización de imágenes con Next.js Image
- ✅ Lazy loading automático
- ✅ Code splitting por rutas
- ✅ Server-Side Rendering (SSR)
- ✅ Static Site Generation (SSG)
- ✅ Edge Runtime para máxima velocidad

### 🔍 SEO

- ✅ Meta tags dinámicos por página
- ✅ Sitemap XML generado automáticamente
- ✅ Robots.txt configurado
- ✅ Open Graph y Twitter Cards
- ✅ Schema.org markup
- ✅ URLs canónicas
- ✅ Estructura semántica HTML5

### 📊 Analytics

- ✅ Vercel Analytics integrado
- ✅ Speed Insights de Vercel
- ✅ Métricas de Core Web Vitals

### 💬 Comunicación

- ✅ Integración directa con WhatsApp Business
- ✅ Formulario de contacto funcional
- ✅ Enlaces a redes sociales
- ✅ Información de contacto actualizada

---

## 🛠️ Tecnologías Utilizadas

### Core

- **[Next.js 16](https://nextjs.org/)** - Framework de React con App Router
- **[React 19](https://react.dev/)** - Biblioteca de interfaz de usuario
- **[TypeScript 5](https://www.typescriptlang.org/)** - Tipado estático

### Estilos

- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework de CSS utility-first
- **[tw-animate-css](https://www.npmjs.com/package/tw-animate-css)** - Animaciones predefinidas
- **[class-variance-authority](https://cva.style/docs)** - Manejo de variantes de componentes

### UI Components

- **[Shadcn UI](https://ui.shadcn.com/)** - Componentes primitivos accesibles
  - Dialog (modales)
  - Dropdown Menu
  - Hover Card
  - Label
  - Select
  - Separator
- **[Lucide React](https://lucide.dev/)** - Iconos modernos
- **[Embla Carousel](https://www.embla-carousel.com/)** - Carruseles y sliders

### Utilidades

- **[react-hot-toast](https://react-hot-toast.com/)** - Notificaciones toast
- **[clsx](https://github.com/lukeed/clsx)** - Utilidad para className condicionales
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Fusión de clases Tailwind

### Analytics y Monitoreo

- **[@vercel/analytics](https://vercel.com/analytics)** - Analytics de Vercel
- **[@vercel/speed-insights](https://vercel.com/docs/speed-insights)** - Métricas de rendimiento

### SEO

- **[next-sitemap](https://github.com/iamvishnusankar/next-sitemap)** - Generación de sitemap

### DevTools

- **[ESLint](https://eslint.org/)** - Linter de código
- **[Prettier](https://prettier.io/)** - Formateador de código
- **[PostCSS](https://postcss.org/)** - Procesador de CSS

---

## 📁 Estructura del Proyecto

```
DelRio-Frontend/
├── public/                      # Archivos estáticos
│   ├── robots.txt              # Configuración de robots
│   ├── sitemap.xml             # Mapa del sitio
│   ├── bg.webp                 # Imagen de fondo
│   ├── carrousel/              # Imágenes del carrusel
│   └── logos-empresas/         # Logos de clientes
│
├── src/
│   ├── app/                    # App Router de Next.js
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Página de inicio
│   │   ├── globals.css         # Estilos globales
│   │   ├── loading.tsx         # Componente de carga
│   │   ├── contacto/           # Página de contacto
│   │   ├── empresas/           # Página de planes empresariales
│   │   └── hogar/              # Página de planes hogar
│   │
│   ├── components/             # Componentes reutilizables
│   │   ├── layout/             # Componentes de layout
│   │   │   ├── Navbar.tsx      # Barra de navegación
│   │   │   └── Footer.tsx      # Pie de página
│   │   ├── mainpage/           # Componentes de la página principal
│   │   │   ├── HeroImage.tsx
│   │   │   ├── PricingCardHogar.tsx
│   │   │   └── EmpresasCarousel.tsx
│   │   ├── contactpage/        # Componentes de contacto
│   │   │   ├── ContactForm.tsx
│   │   │   └── ContactImage.tsx
│   │   ├── ui/                 # Componentes UI base (Radix)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   └── ...
│   │   └── FijoCopy.tsx        # Componente de botón WhatsApp fijo
│   │
│   ├── lib/                    # Utilidades y configuraciones
│   │   ├── seo.ts              # Funciones SEO
│   │   ├── contacto.ts         # Datos de contacto
│   │   └── utils.ts            # Utilidades generales
│   │
│   └── global.d.ts             # Declaraciones de tipos globales
│
├── components.json             # Configuración de shadcn/ui
├── next.config.ts              # Configuración de Next.js
├── tsconfig.json               # Configuración de TypeScript
├── tailwind.config.ts          # Configuración de Tailwind CSS
├── postcss.config.mjs          # Configuración de PostCSS
├── eslint.config.mjs           # Configuración de ESLint
├── next-sitemap.config.js      # Configuración de sitemap
├── package.json                # Dependencias del proyecto
└── pnpm-lock.yaml              # Lockfile de pnpm
```

---

## 🚀 Comenzando

### Prerrequisitos

Asegúrate de tener instalado:

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0 (recomendado) o npm/yarn

```bash
# Verificar versiones
node --version
pnpm --version
```

### Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/tu-usuario/delrio-frontend.git
cd delrio-frontend
```

2. **Instalar dependencias**

```bash
pnpm install
```

3. **Ejecutar el servidor de desarrollo**

```bash
pnpm dev
```

4. **Abrir en el navegador**

Navega a [http://localhost:3000](http://localhost:3000)

### Variables de Entorno

El proyecto no requiere variables de entorno para funcionar en modo desarrollo, pero puedes crear un archivo `.env.local` para configuraciones personalizadas.


## 📜 Scripts Disponibles

```bash
# Desarrollo
pnpm dev          # Inicia el servidor de desarrollo en http://localhost:3000

# Producción
pnpm build        # Crea una build optimizada para producción
pnpm start        # Inicia el servidor de producción

# Linting y Formateo
pnpm lint         # Ejecuta ESLint para encontrar problemas
pnpm format       # Formatea el código con Prettier (si está configurado)

# Sitemap
pnpm postbuild    # Genera el sitemap automáticamente después del build
```

---

## 🗺️ Páginas y Rutas

| Ruta        | Descripción             | Componente Principal    |
| ----------- | ----------------------- | ----------------------- |
| `/`         | Página de inicio        | `app/page.tsx`          |
| `/hogar`    | Planes para hogares     | `app/hogar/page.tsx`    |
| `/empresas` | Planes empresariales    | `app/empresas/page.tsx` |
| `/contacto` | Información de contacto | `app/contacto/page.tsx` |

### Secciones de la Página Principal

- **Hero**: Presentación principal con CTA
- **Planes Hogar**: Cards con planes residenciales
- **Beneficios**: Ventajas del servicio
- **Empresas**: Introducción a soluciones corporativas
- **Clientes**: Carrusel de logos de clientes
- **Contacto**: Botones de WhatsApp y enlaces

---

## 🧩 Componentes Principales

### Layout Components

#### `Navbar.tsx`

Barra de navegación responsive con:

- Logo de DelRio
- Menú de navegación
- Botón CTA de contacto
- Menú hamburguesa en móviles

#### `Footer.tsx`

Pie de página con:

- Información de contacto
- Enlaces rápidos
- Redes sociales
- Derechos de autor

### Main Page Components

#### `HeroImage.tsx`

Componente hero con:

- Título principal
- Descripción del servicio
- Call-to-action buttons
- Imagen de fondo optimizada

#### `PricingCardHogar.tsx`

Tarjetas de precios con:

- Planes de Internet hogar
- Velocidades y precios
- Características incluidas
- Botones de WhatsApp

#### `EmpresasCarousel.tsx`

Carrusel automático con:

- Logos de empresas clientes
- Autoplay
- Responsive design

### Contact Components

#### `ContactForm.tsx`

Formulario de contacto con:

- Validación de campos
- Envío de datos
- Estados de carga
- Notificaciones toast

#### `FijoCopy.tsx`

Botón flotante de WhatsApp que:

- Se muestra en todas las páginas
- Enlace directo a WhatsApp Business
- Animación de entrada

---

## 🔍 SEO y Optimización

### Meta Tags

Cada página incluye:

- Título único y descriptivo
- Meta description optimizada
- Keywords relevantes
- Canonical URLs
- Open Graph tags
- Twitter Cards

### Ejemplo de SEO en página:

```typescript
export const metadata = generateMetadata({
  title: "Internet por Fibra Óptica | DelRio Internet",
  description: "Conectividad de alta velocidad en Mendoza...",
  url: "https://delriointernet.com.ar",
  keywords: ["internet mendoza", "fibra óptica", ...],
  alternates: {
    canonical: "https://delriointernet.com.ar",
  },
  robots: {
    index: true,
    follow: true,
  },
});
```

### Sitemap

El sitemap se genera automáticamente con `next-sitemap`:

```javascript
// next-sitemap.config.js
module.exports = {
  siteUrl: "https://delriointernet.com.ar",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
};
```

### Optimización de Imágenes

Todas las imágenes usan el componente `next/image`:

- Lazy loading automático
- Optimización de formato (WebP)
- Responsive images
- Placeholder blur

## 🎨 Personalización

### Colores

Los colores principales se configuran en `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      'delrio-dark': '#0a0f1e',
      'delrio-blue': '#1e40af',
      // Agrega más colores personalizados
    }
  }
}
```

### Fuentes

La fuente principal es **Montserrat**, cargada desde Google Fonts:

```typescript
// app/layout.tsx
const getMonserrat = Montserrat({
  variable: "--font-monserrat",
  subsets: ["latin"],
});
```

### Datos de Contacto

Centralizado en `src/lib/contacto.ts`:

```typescript
export const contactos = {
  comercial: {
    nombre: "Comercial",
    numero: "+54 261 5861188",
    whatsapp: "https://wa.me/542615861188",
  },
  // ...
};
```

---

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Si deseas contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guidelines

- Usa TypeScript para todo el código nuevo
- Sigue las convenciones de ESLint
- Escribe código responsive (mobile-first)
- Optimiza las imágenes antes de subirlas
- Documenta componentes complejos

---

## 📝 Licencia

Este proyecto es propiedad de **DelRio Internet**. Todos los derechos reservados.

---

## 📧 Contacto

**DelRio Internet**

- 🌐 Sitio Web: [delriointernet.com.ar](https://delriointernet.com.ar)
- 📞 Comercial: +54 261 5861188
- 📧 Email: administracion@delriointernet.com.ar
- 📍 Dirección: Quintana 1180, M5507 Perdriel, Mendoza
- ⏰ Horario: Lunes a Viernes 8:30-18:00 | Sábados 9:00-13:00

### Redes Sociales

- WhatsApp: [Contactar](https://wa.me/542615861188)
- Google Maps: [Ver ubicación](https://maps.app.goo.gl/zyJBfKs266V1ZdqZ9)

---

## 🙏 Agradecimientos

- [Next.js](https://nextjs.org/) por el increíble framework
- [Vercel](https://vercel.com) por el hosting y analytics
- [Tailwind CSS](https://tailwindcss.com/) por el sistema de diseño
- [Shadcn UI]([https://www.radix-ui.com/](https://ui.shadcn.com/)) por los componentes accesibles
- [Lucide](https://lucide.dev/) por los iconos

---

<div align="center">

**Hecho con ❤️ por el equipo de DelRio Internet**

[⬆ Volver arriba](#-delrio-internet---sitio-web-corporativo)

</div>
