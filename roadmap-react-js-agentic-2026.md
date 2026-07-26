# Hoja de Ruta 2026: De Principiante a Desarrollador React/JS + Agentic Engineering

**Perfil:** principiante total · **Tiempo disponible:** 2 horas/día (~14 h/semana) · **Meta:** dominar React/JavaScript y construir sistemas con IA (agentes, MCP)

**Duración total estimada:** ~14-16 meses (jul 2026 → oct 2027), en 8 etapas. Con 2h/día es un ritmo sostenible, no una carrera — la constancia importa más que la velocidad.

---

## 1. Elección del stack tecnológico

**Lenguaje principal recomendado: JavaScript → luego TypeScript.**

¿Por qué? Tu objetivo ya es React, y React *es* JavaScript. No tiene sentido rodear el problema aprendiendo Python primero si tu meta final es frontend. JavaScript es también el único lenguaje que corre nativamente en el navegador, lo cual te da feedback visual inmediato (motivador clave para un principiante).

**Alternativas y por qué NO son el punto de partida ideal para vos:**

| Opción | Ventajas | Desventajas para tu caso |
|---|---|---|
| **Python primero** | Sintaxis más simple, popular en IA | Te aleja 2-3 meses de tu meta real (React); tendrías que "traducir" conceptos después |
| **TypeScript desde el día 1** | Menos errores, es lo que usan las empresas | Añade una capa de complejidad (tipos) antes de dominar JS puro — mejor aprenderlo en la Etapa 3 |
| **Vue o Svelte en vez de React** | Curva de aprendizaje más suave | React tiene ~3x más demanda laboral y ecosistema; vos ya elegiste React, es buena decisión |

**Qué stack usan hoy las empresas (2026):**
- **Frontend:** React (dominante) + TypeScript + Vite como bundler + Tailwind CSS para estilos + React Query/TanStack Query para datos remotos + Zustand o Redux Toolkit para estado global.
- **Meta-frameworks:** Next.js (el más usado para producción, SSR/SSG) o Remix.
- **Backend asociado:** Node.js + Express/Fastify, o NestJS en empresas más grandes; también Python (FastAPI) cuando hay componente de IA.
- **Testing:** Vitest/Jest + React Testing Library + Playwright (e2e).
- **IA/Agentic:** SDKs de OpenAI/Anthropic, LangChain/LangGraph, MCP (Model Context Protocol) para conectar agentes con herramientas externas.

Este roadmap te lleva exactamente a ese stack, en orden.

---

## 2. Roadmap completo por etapas

### Etapa 0 — Preparación del entorno (ya casi completa)
- **Objetivo:** tener un entorno de trabajo profesional listo.
- **Temas:** terminal básica, Git instalado, extensiones de editor.
- **Tecnologías:** VSCodium (ya lo usás), Git, Node.js + npm.
- **Proyecto:** configurar un "Hola Mundo" en HTML/JS y subirlo a un repo en GitHub.
- **Errores comunes:** saltarse Git "para después" — te va a perseguir toda la carrera.
- **Tiempo estimado:** 3-5 días.

### Etapa 1 — Fundamentos de programación con JavaScript
- **Objetivo:** pensar como programador: variables, control de flujo, funciones.
- **Temas:**
  - Variables (`let`, `const`), tipos de datos primitivos, coerción de tipos
  - Condicionales (`if/else`, `switch`, operador ternario)
  - Bucles (`for`, `while`, `for...of`, `for...in`)
  - Funciones (declaración, arrow functions, parámetros, retorno, scope, closures)
  - Estructuras de datos: arrays y objetos, métodos de array (`map`, `filter`, `reduce`, `forEach`)
  - Manejo de errores (`try/catch`)
- **Tecnologías:** JavaScript puro (ES6+), consola del navegador, Node.js para ejecutar scripts.
- **Proyecto práctico:** una calculadora de consola + una lista de tareas (To-Do) manipulando solo el DOM con JS vainilla (sin frameworks).
- **Errores comunes:** memorizar sintaxis sin entender *por qué*; saltar directo a React sin dominar `map/filter/reduce` (son la base de todo componente React).
- **Tiempo estimado:** 5-6 semanas (con 2h/día).

### Etapa 2 — JavaScript intermedio + DOM + asincronía
- **Objetivo:** entender cómo interactúa JS con el navegador y con servidores.
- **Temas:**
  - Manipulación del DOM, eventos
  - `this`, prototipos, clases de ES6
  - Programación orientada a objetos: clases, herencia, encapsulamiento, polimorfismo
  - Asincronía: callbacks → Promesas → `async/await`
  - `fetch` API y consumo de APIs REST públicas
  - Módulos ES6 (`import`/`export`)
- **Tecnologías:** JavaScript ES6+, JSON, APIs públicas gratuitas (ej. OpenWeather, PokeAPI)
- **Proyecto práctico:** app del clima o un buscador de Pokémon que consuma una API pública y renderice resultados dinámicamente.
- **Errores comunes:** no entender la diferencia entre síncrono/asíncrono (causa bugs invisibles); abusar de callbacks anidados ("callback hell") en vez de usar `async/await`.
- **Tiempo estimado:** 5 semanas.

### Etapa 3 — Git/GitHub, herramientas y primeros principios de diseño de código
- **Objetivo:** trabajar como un desarrollador profesional, no un estudiante aislado.
- **Temas:**
  - Git: commits, branches, merge, rebase, resolución de conflictos
  - GitHub: pull requests, issues, README profesional
  - Introducción a Clean Code (nombres claros, funciones pequeñas, evitar duplicación)
  - Principios SOLID (introducción conceptual, sin OOP pesado todavía)
- **Tecnologías:** Git, GitHub, Linux básico (terminal, si no lo dominás ya)
- **Proyecto práctico:** refactorizar el To-Do de la Etapa 1 aplicando Clean Code + subir el historial de commits ordenado a GitHub.
- **Errores comunes:** hacer commits gigantes con mensajes como "cambios"; no usar ramas (`branches`) y trabajar todo en `main`.
- **Tiempo estimado:** 2-3 semanas (en paralelo con lo anterior, ya usás VSCodium/Brave así que el entorno no es nuevo para vos).

### Etapa 4 — React: fundamentos
- **Objetivo:** construir interfaces de usuario con componentes.
- **Temas:**
  - JSX, componentes funcionales, props
  - `useState`, `useEffect`, ciclo de vida de componentes
  - Renderizado condicional, listas y `key`
  - Manejo de formularios y eventos en React
  - React Router (navegación entre páginas)
- **Tecnologías:** React 19+, Vite (para crear el proyecto), React Router.
- **Proyecto práctico:** clon simplificado de una app de tareas o carrito de compras con múltiples vistas (esto conecta directo con tu experiencia previa en [[tienda-autos]] y [[car-dealership-website]] — podés migrar la lógica de esos proyectos a React).
- **Errores comunes:** mutar el estado directamente en vez de usar el setter (`setState`); no entender por qué un componente se re-renderiza; usar `useEffect` como un martillo para todo.
- **Tiempo estimado:** 6 semanas.

### Etapa 5 — React intermedio/avanzado + TypeScript
- **Objetivo:** escribir React a nivel profesional, con tipado seguro.
- **Temas:**
  - Hooks avanzados: `useContext`, `useReducer`, `useMemo`, `useCallback`, custom hooks
  - Gestión de estado global: Zustand o Redux Toolkit
  - Consumo de datos con TanStack Query (React Query)
  - Introducción a TypeScript: tipos, interfaces, genéricos aplicados a React
  - Patrones de diseño esenciales en frontend: componentes controlados/no controlados, composición vs herencia, render props, custom hooks como patrón
- **Tecnologías:** React + TypeScript, TanStack Query, Zustand, Tailwind CSS.
- **Proyecto práctico:** app completa tipo dashboard que consuma una API real (ej. tu propio backend de [[tienda-autos]] con Flask, o una API pública) con estado global, loading states y manejo de errores.
- **Errores comunes:** usar `any` en TypeScript para "salir del paso" (anula el propósito de tipar); poner todo el estado en un solo store global sin necesidad.
- **Tiempo estimado:** 7 semanas.

### Etapa 6 — Backend, APIs, bases de datos y Next.js
- **Objetivo:** ser full-stack: construir y consumir tus propias APIs.
- **Temas:**
  - Node.js + Express (o Next.js API routes/Server Actions)
  - APIs REST: verbos HTTP, códigos de estado, diseño de endpoints
  - Bases de datos SQL (PostgreSQL) y NoSQL (MongoDB) — cuándo usar cada una
  - ORMs: Prisma (SQL) o Mongoose (NoSQL)
  - Autenticación básica (ver sección de Seguridad)
  - Introducción a Next.js: SSR, SSG, routing basado en archivos
- **Tecnologías:** Node.js, Express o Next.js, PostgreSQL, Prisma, Docker (para levantar la BD localmente).
- **Proyecto práctico:** app full-stack completa (ej. red social simple, gestor de tareas con usuarios, o evolucionar [[consejo-comunal-cartas]] a una versión web con React + API propia).
- **Errores comunes:** exponer datos sensibles en el frontend; no validar datos en el backend (confiar solo en la validación del cliente); guardar contraseñas en texto plano.
- **Tiempo estimado:** 8 semanas.

### Etapa 7 — Ingeniería de software, testing y arquitectura
- **Objetivo:** escribir software mantenible y escalable, no solo "que funcione".
- **Temas:**
  - Testing: unitario (Vitest/Jest), integración, e2e (Playwright)
  - Refactoring sistemático
  - Arquitectura de software: capas, separación de responsabilidades
  - APIs REST avanzado, introducción a arquitectura basada en eventos
  - Introducción a microservicios y Domain Driven Design (conceptual, para saber cuándo aplicarlos — no son necesarios en proyectos pequeños)
  - CI/CD básico (GitHub Actions)
- **Tecnologías:** Vitest, Playwright, GitHub Actions, Docker.
- **Proyecto práctico:** tomar un proyecto anterior (ej. [[tienda-autos]]) y agregarle suite de tests + pipeline de CI/CD que corra los tests automáticamente en cada push.
- **Errores comunes:** escribir tests después de "que todo funcione" en vez de integrarlos al flujo; sobre-ingeniería (aplicar microservicios a un proyecto de una sola persona).
- **Tiempo estimado:** 6 semanas.

### Etapa 8 — IA, Agentic Engineering y MCP (2026)
- **Objetivo:** construir sistemas donde la IA actúa como agente autónomo integrado a tus apps React/Node.
- **Temas:**
  - Prompt Engineering: estructura de prompts, few-shot, chain-of-thought
  - Fundamentos de LLMs: tokens, context window, temperatura
  - RAG (Retrieval Augmented Generation) y bases de datos vectoriales (Pinecone, pgvector)
  - Model Context Protocol (MCP): arquitectura host/servidor/cliente, cómo un agente descubre y usa herramientas externas
  - AI Agents: el "loop" agente (percibir → decidir → actuar), function calling
  - Multi-Agent Systems: orquestación de varios agentes especializados (frameworks como LangGraph o CrewAI)
  - Integración de agentes con tus propias APIs REST (las que ya sabés construir)
- **Tecnologías:** SDK de Anthropic/OpenAI, MCP SDK (TypeScript o Python), LangGraph, una base de datos vectorial.
- **Proyecto práctico:** un agente que se conecta a tu propia API (por ejemplo, del sistema de [[consejo-comunal-cartas]]) vía un servidor MCP, y puede responder preguntas o ejecutar acciones (crear una solicitud de carta, consultar su estado) usando lenguaje natural desde una interfaz React con chat.
- **Errores comunes:** construir agentes sin manejo de errores (fallan en producción ante la primera respuesta inesperada del LLM); dar demasiada autonomía a un agente sin validación humana en acciones sensibles (borrar datos, enviar dinero, etc.).
- **Tiempo estimado:** 8-10 semanas.

---

## 3. Ingeniería de software — cuándo estudiar cada tema

No se estudian todos desde el principio; el orden importa:

| Tema | Momento recomendado | Por qué |
|---|---|---|
| Clean Code | Etapa 3 (temprano) | Se aplica desde el primer día de código real |
| Git/GitHub | Etapa 0-3 | Herramienta diaria, cuanto antes mejor |
| APIs REST | Etapa 6 | Necesitás conceptos de backend primero |
| Testing | Etapa 7 | Requiere tener proyectos reales para practicar sobre ellos |
| Refactoring | Etapa 7 (pero se practica desde antes) | Es más útil cuando ya tenés "código feo" real para mejorar |
| Arquitectura de software | Etapa 7 | Recién tiene sentido con proyectos de tamaño medio |
| Arquitectura basada en eventos | Etapa 7-8 | Requiere entender APIs y asincronía sólidamente |
| Microservicios | Después de la Etapa 7 (nivel conceptual) | Innecesario en proyectos pequeños; primero dominá el monolito bien hecho |
| DDD | Nivel conceptual en Etapa 7, profundizar después | Es una herramienta para proyectos grandes/complejos |

---

## 4. Herramientas profesionales — ruta de aprendizaje

1. **Git** (Etapa 0-3): comandos básicos → branching → resolución de conflictos → rebase.
2. **GitHub** (Etapa 0-3): repos, README, Issues → Pull Requests → GitHub Actions (Etapa 7).
3. **Linux** (transversal desde Etapa 0): comandos de terminal básicos (`cd`, `ls`, `grep`, `cat`), permisos de archivos, gestión de procesos. Como ya usás un entorno tipo Linux para desarrollo, esto se va reforzando naturalmente.
4. **Docker** (Etapa 6): qué es un contenedor, `Dockerfile` básico, `docker-compose` para levantar tu app + base de datos juntas.
5. **SQL** (Etapa 6): consultas básicas (`SELECT`, `JOIN`, `WHERE`) → diseño de esquemas → índices.
6. **NoSQL** (Etapa 6, después de SQL): modelado de documentos en MongoDB, cuándo preferirlo sobre SQL.
7. **CI/CD** (Etapa 7): GitHub Actions para correr tests y desplegar automáticamente.
8. **Cloud** (Etapa 7-8, recomendado: **Vercel** para frontend/Next.js por su simplicidad, y **AWS o Railway** para backend/bases de datos cuando el proyecto lo requiera). No hace falta certificarse en cloud todavía; con desplegar 2-3 proyectos reales alcanza para el nivel que buscás en 2026.

---

## 5. Seguridad — qué aprender y cuándo

| Concepto | Etapa | Nivel necesario |
|---|---|---|
| Autenticación (login/registro) | Etapa 6 | Implementar con hash de contraseñas (bcrypt) |
| Autorización (roles y permisos) | Etapa 6-7 | Distinguir "quién sos" de "qué podés hacer" |
| JWT | Etapa 6 | Cómo funciona un token, expiración, dónde guardarlo (nunca en localStorage para datos sensibles) |
| OAuth | Etapa 6-7 | Login con Google/GitHub — entender el flujo, usar una librería (no reinventarlo) |
| OWASP Top 10 | Etapa 7 | Conocer las vulnerabilidades más comunes (inyección, XSS, CSRF) para evitarlas por diseño |
| Protección de APIs | Etapa 6-7 | Rate limiting, validación de inputs, CORS bien configurado |
| Gestión de secretos | Etapa 6 | Variables de entorno (`.env`), nunca subir claves a GitHub |
| Buenas prácticas generales | Transversal | Validar siempre en backend, principio de menor privilegio |

Este orden es intencional: no tiene sentido estudiar OAuth antes de saber qué es una API o un servidor.

---

## 6. Recursos gratuitos por etapa (priorizando 2026)

**Etapas 1-2 (JS fundamentos):**
- Curso: *JavaScript.info* (documentación interactiva, gratuita, muy completa)
- YouTube español: canal de **midudev** (JavaScript/React, muy actualizado a 2026), **Fazt** (fundamentos)
- Documentación oficial: [MDN Web Docs](https://developer.mozilla.org/es/) — la referencia definitiva

**Etapa 3 (Git/GitHub):**
- *Pro Git* (libro gratuito oficial, en español)
- YouTube: "Git y GitHub desde cero" de freeCodeCamp Español

**Etapas 4-5 (React + TypeScript):**
- Documentación oficial: [react.dev](https://react.dev) (tiene guía interactiva, la mejor fuente)
- Curso gratuito: **Scrimba – Learn React**, y el **Full Stack Open** de la Universidad de Helsinki (disponible en español, gratuito, muy actualizado y orientado a proyectos reales)
- YouTube español: **midudev**, **Fazt**, canal de **EDteam** (tienen contenido React 2026 con enfoque en IA aplicada al desarrollo)
- Curso Google (gratuito, en español): "Aprende React" de Google Developers

**Etapa 6 (Backend/APIs/BD):**
- Documentación oficial de Express, Prisma y PostgreSQL
- freeCodeCamp: certificación de "APIs y Microservicios" (gratis, en español)

**Etapa 7 (Testing/Arquitectura):**
- Documentación oficial de Vitest y Playwright
- Repos open source para estudiar: proyectos pequeños y medianos en GitHub con buena cobertura de tests (buscar por topic `good-first-issue` para practicar contribuciones reales)

**Etapa 8 (IA/Agentic/MCP):**
- Documentación oficial de Anthropic (Model Context Protocol) — es la fuente primaria y más actualizada
- Coursera (gratuito con "audit"): especialización de Vanderbilt University "AI Agents with Model Context Protocol" (Python/TypeScript + MCP)
- Proyectos open source para estudiar: servidores MCP de ejemplo en el repositorio oficial de Anthropic en GitHub

**Proyectos open source generales para estudiar código real:** buscar en GitHub repos "beginner friendly" con la etiqueta `good-first-issue`, y leer el código fuente de librerías pequeñas que ya usás (por ejemplo, un hook de una librería de React) para acostumbrarte a leer código de otros.

---

## 7. Plan semanal (2 horas/día)

Formato base para cada semana de estudio "activa" (ajustalo según la etapa):

| Día | Actividad (2h) |
|---|---|
| **Lunes** | Teoría nueva: leer documentación/ver video del concepto de la semana (45 min) + ejercicios cortos de práctica (75 min) |
| **Martes** | Práctica aplicada: ejercicios tipo Codewars/reto propio sobre lo visto el lunes |
| **Miércoles** | Avance en el proyecto práctico de la etapa (construir, no solo mirar tutoriales) |
| **Jueves** | Avance en el proyecto + debugging activo (leer errores, buscar en documentación oficial antes que en IA) |
| **Viernes** | Repaso: releer/repasar lo aprendido en la semana + resolver dudas pendientes |
| **Sábado** | Sesión larga de proyecto (si hay más tiempo disponible) o repaso de una etapa anterior |
| **Domingo** | Descanso o lectura ligera (blog, video corto) — sin presión de producir código |

**Regla de repaso:** cada 3 semanas, dedicá una sesión completa (los sábados funcionan bien) a repasar y refactorizar un proyecto de 2-3 semanas atrás. Vas a notar cuánto mejoraste, y es la mejor forma de fijar conceptos a largo plazo.

**Regla de oro:** 70% del tiempo construyendo, 30% consumiendo teoría. Con solo 2h/día, ver tutoriales pasivamente sin escribir código es la forma más rápida de estancarte.

---

## 8. Resultado esperado por etapa

| Al terminar... | Deberías poder... | Proyecto de portfolio |
|---|---|---|
| Etapa 1-2 | Escribir lógica de programación completa en JS, consumir APIs | To-do list + app del clima con datos reales |
| Etapa 3 | Trabajar con control de versiones como un profesional | Repo con historial de commits limpio y README profesional |
| Etapa 4 | Construir interfaces interactivas con componentes | App multi-vista con React Router |
| Etapa 5 | Escribir React tipado, con estado global y datos remotos | Dashboard con TypeScript + TanStack Query |
| Etapa 6 | Construir un producto full-stack completo, con su propia base de datos | App full-stack con autenticación real (ej. versión web de [[consejo-comunal-cartas]]) |
| Etapa 7 | Entregar software mantenible, testeado y con CI/CD | Cualquier proyecto anterior, "endurecido" con tests + pipeline automático |
| Etapa 8 | Construir agentes de IA que actúan sobre tus propias apps | Agente conectado vía MCP a una API propia, con interfaz de chat en React |

Al final de esta hoja de ruta (~14-16 meses) vas a tener un portfolio de 5-7 proyectos reales, progresivamente más complejos, que demuestran no solo que sabés React/JS, sino que entendés el ciclo completo: frontend, backend, testing, seguridad básica, y estás al día con lo que en 2026 se considera de punta (Agentic Engineering/MCP) — algo que muchos desarrolladores con años de experiencia todavía no dominan.
