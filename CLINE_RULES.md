# Cline Code Assist Rules

## Naming Conventions

- Always use camelCase for variable, function, and method names.
- Use PascalCase for class names, interface names, and TypeScript types.
- Prefer kebab-case for file names when creating new components or modules.

## Variable Declarations

- Always use const and let for variable declarations; avoid var.

## Functions

- Prefer arrow functions (=>) over traditional function declarations, especially for callbacks and class methods.
- Break down complex functions into smaller, single-responsibility functions.

## Strings

- Use template literals (`) for string concatenation when including variables.

## Error Handling

- Implement robust error handling using try...catch blocks for asynchronous operations and potential failures.

## Documentation

- Ensure all functions and methods have clear and concise JSDoc comments describing their purpose, parameters, and return values.

## TypeScript

- Include type annotations for all function parameters and return values in TypeScript.
- Avoid `any` type in TypeScript unless absolutely necessary and with a clear justification.
- Always use JSX for rendering UI elements, except when it's meant to be a TypeScript file, then you use TSX.

## Code Style

- Use destructuring for objects and arrays to improve readability.
- Keep lines under 120 characters.
- Ensure there's a blank line between logical blocks of code.
- Prioritize readability and maintainability over overly clever or terse code.

## React

- Use functional components with React Hooks over class components for new components.
- Destructure props at the beginning of the functional component.
- Avoid prop drilling; suggest using Redux Toolkit for global state.
- Use `useState` for component-level state.
- Use `useEffect` for side effects, ensuring proper dependency arrays.
- When iterating over lists, always provide a unique `key` prop.
- Extract reusable UI logic into custom hooks.
- For styling, prefer CSS Modules or a CSS-in-JS library (e.g., Styled Components, Emotion) over inline styles.
- Organize React components into logical folders (e.g., components, pages, hooks).

## Backend (Express.js)

- Follow RESTful API principles for designing new endpoints (e.g., /users, /users/:id).
- Use async/await for handling asynchronous operations in Express.js routes and controllers.
- Implement proper middleware for authentication, authorization, and error handling.
- Validate all incoming request data (body, params, query) using a schema validation library (e.g., Joi, Zod, express-validator).
- Separate concerns into distinct files: routes, controllers, models, services, and middleware.
- Handle errors by sending appropriate HTTP status codes and clear error messages to the client.
- Use environment variables for sensitive data (e.g., database connection strings, API keys) using a library like dotenv.
- Log important events and errors to a logging system (e.g., Winston, Morgan).
- Avoid synchronous file I/O operations in production code.

## Database (MongoDB/Mongoose)

- When interacting with MongoDB, use Mongoose for schema definition and ODM capabilities.
- Define clear Mongoose schemas with proper data types, validations, and default values.
- Create indexes on frequently queried fields to improve database performance.
- Avoid deeply nested documents; prefer referencing related documents when possible to flatten the schema.
- Use aggregation pipelines for complex data transformations and reporting.
- Perform necessary data sanitization before saving data to the database.

## General

- Promote modularity and reusability across the stack (e.g., shared utility functions, types).
- Ensure consistent error messaging and handling between the frontend and backend.
- When suggesting new features, consider how they impact all layers of the MERN stack.
- Prioritize security by implementing proper authentication, authorization, and input validation.
- For new features, suggest writing unit and integration tests.
