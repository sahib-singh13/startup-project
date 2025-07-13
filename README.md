# Startup - Business Management Dashboard (Front-End)

This is a complete, responsive front-end for a business management dashboard application. It includes a public-facing landing page, a simulated authentication flow (login/sign-up), and a protected dashboard area with sections for managing employees, tasks, and user settings. The entire application is built with modern web technologies, focusing on a clean user interface and a great user experience.

**Live Demo:** [**startup-project-seven.vercel.app**](https://startup-project-seven.vercel.app/)

## Key Features

-   **Responsive Design**: The entire application is fully responsive, providing an optimal viewing experience on desktops, tablets, and mobile devices.
-   **Multi-Page Navigation**: Utilizes `react-router-dom` to provide seamless navigation between all pages.
-   **Simulated Authentication**: A front-end-only authentication flow using `localStorage` to persist the user's session. Unauthenticated users are redirected from protected routes.
-   **Interactive Dashboard**: A central dashboard page with summary statistics and an activity trend chart (using `recharts`).
-   **Employee Management Interface**: A page to view a list of employees with search and filter functionality. Includes linked pages for adding/editing employee information.
-   **Task Management Interface**: A comprehensive page to view, filter, and manage tasks, complete with priority and status badges.
-   **Multi-Tab Settings Page**: A detailed settings area with four distinct tabs for managing:
    -   **Profile Information**: Update user details and profile photo.
    -   **Notifications**: Toggle preferences for email, push, and other notifications.
    -   **Security**: Change password, manage two-factor authentication, and view active sessions.
    -   **System**: Configure system-wide preferences like theme, language, and data management.
-   **Modern UI Components**: Built with Tailwind CSS for utility-first styling and Headless UI for accessible, unstyled components like toggles and dropdowns.

## Tech Stack

-   **Framework**: [React](https://reactjs.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Routing**: [React Router DOM](https://reactrouter.com/)
-   **Charting**: [Recharts](https://recharts.org/)
-   **UI Components**: [Headless UI](https://headlessui.com/)
-   **Icons**: [Heroicons](https://heroicons.com/)
-   **Deployment**: [Vercel](https://vercel.com/)

## Project Structure

The project follows a standard React application structure, organized for scalability and maintainability.

src
|-- /assets/ # Static assets like images and illustrations
|-- /components/ # Reusable components (Layout, Navbar, etc.)
|-- /pages/ # Top-level page components
| |-- /settings/ # Sub-components for the multi-tab settings page
| |-- DashboardPage.js
| |-- EmployeesPage.js
| |-- LandingPage.js
| |-- LoginPage.js
| |-- SettingsPage.js
| |-- SignUpPage.js
| |-- TasksPage.js
| -- ... |-- App.js # Main application component with routing logic |-- index.css # Global CSS and Tailwind directives-- index.js # Application entry point


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
    This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

## Available Scripts

In the project directory, you can run:

-   `npm start`: Runs the app in development mode.
-   `npm run build`: Builds the app for production to the `build` folder.
-   `npm test`: Launches the test runner in interactive watch mode.
-   `npm run eject`: Removes the single dependency (`react-scripts`) and copies all configuration files into your project. **Note: this is a one-way operation.**

## Functionality & User Flow

1.  **Public Access**: Users initially land on the **Landing Page**. From here, they can navigate to the **Login** or **Sign-up** pages.
2.  **Simulated Login**: On the Login or Sign-up page, clicking any of the primary action buttons (e.g., "Login", "Sign up", "Continue with Google") simulates a successful authentication. It sets a flag (`isAuthenticated`) in the browser's `localStorage` and redirects the user to the `/dashboard`. No actual user data is created or validated.
3.  **Protected Area**: Once "authenticated," the user can access all the protected pages (`/dashboard`, `/employees`, `/tasks`, `/settings`). These pages are rendered within a main `Layout` component that includes the shared sidebar and header.
4.  **Protected Routing**: If a non-authenticated user tries to access a protected URL directly, the router will automatically redirect them to the `/login` page.
5.  **Logout**: The user can click the "Logout" button in the sidebar. This clears the authentication flag from `localStorage` and redirects them back to the `/login` page.