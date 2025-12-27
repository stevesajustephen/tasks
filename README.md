# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

## Challenge - Task Application

### Setup

- Create the following in './starter/10-tasks':
  - `Form.tsx` (with a basic return)
  - `List.tsx` (with a basic return)
  - `types.ts`
    - Export a type named 'Task' with the following properties:
      - `id: string`
      - `description: string`
      - `isCompleted: boolean`
- In `index.tsx`, import 'Task' type and set up a state value of type 'Task[]'.
- Also, import and render 'Form' and 'List' in `index.tsx`.

### Form

- Create a form with a single input.
- Set up a controlled input.
- Set up a form submit handler and ensure it checks for empty values.

### Add Task

- In `index.tsx`, create an 'addTask' function that adds a new task to the list.
- Pass 'addTask' as a prop to 'Form'.
- In 'Form', set up the correct type and invoke 'addTask' if the input has a value.

### Toggle Task

- In `index.tsx`, create a 'toggleTask' function that toggles 'isCompleted'.
- Pass the function and list as props to 'List'.
- In `List.tsx`:
  - Set up the correct type for props.
  - Render the list.
  - Set up a checkbox in each item and add an 'onChange' handler.
  - Invoke the 'toggleTask' functionality.

### Local Storage

- Incorporate LocalStorage into the application.

## 10 - Tasks

- create Form, List components
