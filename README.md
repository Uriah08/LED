# Project Dependencies

## Installation

To install all dependencies, run:

```sh
npm i

## Dependencies
```json
{
  "@hookform/resolvers": "^4.1.0",
  "@radix-ui/react-label": "^2.1.2",
  "@radix-ui/react-popover": "^1.1.6",
  "@radix-ui/react-select": "^2.1.6",
  "@radix-ui/react-slot": "^1.1.2",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "date-fns": "^4.1.0",
  "lucide-react": "^0.475.0",
  "react": "^19.0.0",
  "react-chartjs-2": "^5.3.0",
  "react-day-picker": "^8.10.1",
  "react-dom": "^19.0.0",
  "react-hook-form": "^7.54.2",
  "react-router-dom": "^7.1.5",
  "recharts": "^2.15.1",
  "tailwind-merge": "^3.0.1",
  "tailwindcss-animate": "^1.0.7",
  "zod": "^3.24.2",
  "zustand": "^5.0.3"
}
```

## Dev Dependencies
```json
{
  "@eslint/js": "^9.19.0",
  "@types/react": "^19.0.8",
  "@types/react-dom": "^19.0.3",
  "@vitejs/plugin-react": "^4.3.4",
  "autoprefixer": "^10.4.20",
  "eslint": "^9.19.0",
  "eslint-plugin-react-hooks": "^5.0.0",
  "eslint-plugin-react-refresh": "^0.4.18",
  "globals": "^15.14.0",
  "postcss": "^8.5.2",
  "tailwindcss": "^3.4.17",
  "typescript": "~5.7.2",
  "typescript-eslint": "^8.22.0",
  "vite": "^6.1.0"
}
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
#   L E D 
 
 
