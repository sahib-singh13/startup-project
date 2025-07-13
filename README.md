# Startup - Business Management Dashboard (Front-End)

This repository contains the complete front-end for a modern, responsive business management application. It was designed to demonstrate a complete user journey from a public landing page through a simulated login to a feature-rich, protected dashboard environment.

**Live Demo:** [**startup-project-seven.vercel.app**](https://startup-project-seven.vercel.app/)

## Development Approach & Decisions

My approach was to build a scalable and maintainable single-page application (SPA) that mirrors the architecture of a real-world product, focusing on a clean codebase and a seamless user experience.

Here are some of the key decisions I made:

1.  **Component-Driven Development with React:** I chose React to build the user interface. Its component-based architecture was essential for creating a modular and reusable codebase. For example, the main `Layout` component wraps all protected pages, ensuring a consistent sidebar and header without duplicating code. Similarly, the multi-tabbed `SettingsPage` is composed of smaller, independent components for each tab (`Profile`, `Security`, etc.), making the code easier to manage and debug.

2.  **Utility-First Styling with Tailwind CSS:** Instead of writing traditional CSS or using a pre-built component library like Material-UI, I opted for Tailwind CSS. This utility-first framework allowed for rapid prototyping and the creation of a fully custom design that precisely matches the provided screenshots. It also made implementing the responsive design for mobile and desktop views incredibly efficient, using simple breakpoint prefixes (e.g., `md:grid-cols-2`) directly in the HTML.

3.  **Client-Side Routing for a Seamless SPA Experience:** To handle navigation, I used `react-router-dom`. This was a crucial decision to create a fast, single-page application feel where page transitions happen instantly without a full-page refresh. I implemented a `ProtectedLayout` component that acts as a gatekeeper, checking the user's authentication status before rendering any protected content, which is a standard pattern in modern web apps.

4.  **Simulated Authentication for a Full User Flow:** Since this is a front-end-only project, I needed a way to demonstrate the entire user flow, including login and protected pages. I made the decision to use the browser's `localStorage` to simulate an authenticated session. When a user "logs in," an `isAuthenticated` flag is set in `localStorage`. The `ProtectedLayout` checks for this flag on every navigation. This approach effectively mimics how a real application would protect its routes based on a session token, allowing the demonstration of a complete, end-to-end user experience without a backend.

5.  **Accessibility and Modern Practices:** I used tools like Headless UI for components like Toggles (Switches) and dropdowns. This library provides unstyled, fully accessible UI components, which I could then easily style with Tailwind CSS. This ensures that the application is not only beautiful but also accessible to users with disabilities.

## Tools & Technologies Used

-   **Framework**: [React](https://reactjs.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Routing**: [React Router DOM](https://reactrouter.com/)
-   **Charting**: [Recharts](https://recharts.org/)
-   **UI Components**: [Headless UI](https://headlessui.com/)
-   **Icons**: [Heroicons](https://heroicons.com/)
-   **Build Tool**: [Create React App](https://create-react-app.dev/)
-   **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have [Node.js](https://nodejs.org/en/) (version 14 or later) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

3.  **Run the development server:**
    ```sh
    npm start
    ```
    This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

In the project directory, you can run:

-   `npm start`: Runs the app in development mode.
-   `npm run build`: Builds the app for production to the `build` folder.
-   `npm test`: Launches the test runner in interactive watch mode.