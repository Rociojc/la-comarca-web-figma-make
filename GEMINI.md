# Project Overview

This is a **Hotel App Prototype** for a fictional lodging named **"La Comarca"**. The application is a single-page web app built with **React**, **Vite**, and **TypeScript**. It's styled using **Tailwind CSS** and incorporates a variety of UI components from the **Radix UI** library. The overall theme is inspired by "The Lord of the Rings," with references to Hobbits, Elves, and the like.

The application features:

- A home page with a hero section and featured experiences.
- A section to browse different rooms ("Aposentos").
- A detailed view for each room.
- An "About" section describing the location ("Monguí, Boyacá") and its sustainable practices.
- A booking form.
- Both desktop and mobile navigation.

The main application logic is contained in `src/App.tsx`, which manages routing between different screens/views. The application state is managed within this component.

## Rules

- Do not commit under any circumstances without my prior authorization.

## Building and Running

To get the application running locally, follow these steps:

1.  **Install Dependencies:**

    ```bash
    npm i
    ```

2.  **Run the Development Server:**

    ```bash
    npm run dev
    ```

    This will start the Vite development server, and you can view the application at `http://localhost:3000`.

3.  **Build for Production:**
    ```bash
    npm run build
    ```
    This will create a production-ready build in the `build` directory.

## Development Conventions

### Component Structure

- Components are located in `src/components`.
- UI-specific components (like buttons, cards, etc.) are in `src/components/ui`.
- Screen components are in `src/components/screens`.
- The main application component is `src/App.tsx`.

### Styling

- **Tailwind CSS** is used for styling. Utility classes are applied directly in the JSX.
- `clsx` and `tailwind-merge` are used for conditional and merged class names.
- Global styles are defined in `src/components/ui/GlobalStyles.tsx`.

### Routing

- The application uses a simple state-based routing system controlled by the `activeTab` state in `App.tsx`.
- The `renderContent` function in `App.tsx` acts as a router, rendering different components based on the `activeTab` state.

### Data

- Room data is currently hardcoded in `src/data/rooms.ts`.

### Naming Conventions

- Components are named in PascalCase (e.g., `RoomCard.tsx`).
- Props interfaces are named with a `Props` suffix (e.g., `RoomCardProps`).

### Assets

- Images and other assets are stored in the `src/assets` directory.
- Some images are referenced using a Figma asset URL, which is resolved to a local path in `vite.config.ts`.
