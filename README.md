## 🧑‍💻 Saransh's React Learning Project: Employee Directory

This application demonstrates fundamental React concepts by fetching and displaying employee directory data from a public API (`jsonplaceholder.typicode.com/users`). It serves as a working portfolio piece showcasing proficiency in modern React hooks and component-based architecture.

### ✨ Features

*   **Data Fetching:** Uses `useEffect` and `useState` to fetch real employee data from an external API.
*   **Interactive Search:** Implements client-side filtering of the employee list based on search input.
*   **Component Separation:** Breaks down the UI into manageable, reusable components (`Employees`, `LearningSummary`, `RenderEmployess`).
*   **Dynamic Rendering:** Maps through API data to render a detailed table of employee records.

### 💡 What I Learned in This Project

This project was an excellent opportunity to solidify understanding of several core React and JavaScript concepts:

*   **`useState` and `useEffect` Hooks:** Mastering the use of `useState` for managing component state (like the list of employees and search term) and `useEffect` for performing side effects, specifically the API data fetching.
*   **Component Splitting (Composition):** Breaking the main `App` component into smaller, focused components (`Employees`, `LearningSummary`, `RenderEmployess`) to improve modularity and readability.
*   **Props and Data Flow:** Understanding how parent components pass data (`props`) down to child components (e.g., passing the filtered employee list to `<RenderEmployess>`).
*   **State Management:** Implementing local state management for the search term and the fetched employee data.
*   **Lifecycle Management:** Utilizing the `useEffect` cleanup phase (implicitly) and managing data fetching side effects.
*   **Array Manipulation:** Effectively using JavaScript array methods like `Array.filter()` for the search logic and `Array.map()` for rendering list items and table rows.
*   **Layout:** Implementing basic responsive layout using CSS Flexbox (`.content-wrapper`, `.component-box`).

### 🔨 Getting Started

1.  **Prerequisites:** Requires Node.js and npm.
2.  **Run:** Execute `npm install` and then `npm start` to run the application in your browser.

*Note: This project demonstrates the capability to consume REST APIs and render dynamic, structured data using React.*"