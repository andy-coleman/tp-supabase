# TP1 - Juego de Números con Supabase

Este proyecto es una aplicación web desarrollada con React y Supabase que implementa un juego de adivinanza de números con autenticación de usuarios.

## 📸 Capturas de Pantalla

![Juego de Números](https://raw.githubusercontent.com/andy-coleman/tp-supabase/main/docs/images/game-screenshot.png)
*Interfaz principal del juego*

## Características

- 🔐 Autenticación de usuarios (registro e inicio de sesión)
- 🎮 Juego de adivinanza de números
- 💡 Sistema de pistas para guiar al jugador
- 📊 Historial de intentos
- 🎯 Contador de intentos
- 🎨 Interfaz moderna y responsiva

## Tecnologías Utilizadas

- React
- TypeScript
- Vite
- Supabase (Autenticación)
- CSS Moderno

## Requisitos Previos

- Node.js (versión 18 o superior)
- npm o yarn
- Cuenta en Supabase

## Configuración

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/tp1-supabase.git
cd tp1-supabase
```

2. Instala las dependencias:
```bash
npm install
```

3. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
```
VITE_SUPABASE_URL=tu_url_de_supabase
VITE_SUPABASE_ANON_KEY=tu_clave_anonima_de_supabase
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## Cómo Jugar

1. Regístrate o inicia sesión en la aplicación
2. Ingresa un número entre 1 y 100
3. Recibe pistas sobre si tu número es muy alto o muy bajo
4. Intenta adivinar el número en la menor cantidad de intentos posible
5. ¡Gana cuando adivines el número correcto!

## Estructura del Proyecto

```
tp1-supabase/
├── src/
│   ├── components/
│   │   ├── Auth.tsx
│   │   └── NumberGame.tsx
│   ├── lib/
│   │   └── supabaseClient.ts
│   ├── App.tsx
│   └── App.css
├── public/
├── .env
└── package.json
```

## Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.

## Licencia

Este proyecto está bajo la Licencia MIT.
