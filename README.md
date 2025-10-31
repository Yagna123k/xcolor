
# XColor - Experience Color Blindness

An interactive and beautifully designed web application that allows users to see how people with various color vision deficiencies perceive the world. Pick any color and instantly see it simulated across different types of color blindness.

---

### ✨ Core Features

*   **🎨 Intuitive Color Picker**: Select any color with a user-friendly color picker or by entering a precise hex code.
*   **👁️ Real-Time Simulation**: Instantly view simulations for 7 different types of color vision deficiencies.
*   **💎 Clean & Modern UI**: A minimalist, professional interface built with Tailwind CSS, focusing on clarity and user experience.
*   **📱 Fully Responsive**: A seamless experience across all devices, from mobile phones to widescreen desktops.
*   **♿ Accessibility in Mind**: Text color on color backgrounds dynamically adjusts for high contrast and readability.
*   **🚀 Fast & Efficient**: Built with Vite and React for a lightning-fast development and user experience.

### 👓 Supported Simulations

XColor simulates the following color vision deficiencies:

*   **Protanopia**: Red-blindness
*   **Deuteranopia**: Green-blindness
*   **Tritanopia**: Blue-blindness
*   **Protanomaly**: Reduced sensitivity to red light
*   **Deuteranomaly**: Reduced sensitivity to green light
*   **Tritanomaly**: Reduced sensitivity to blue light
*   **Achromatopsia**: Complete color blindness (monochromacy)

### 🛠️ Tech Stack

This project is built with a modern frontend stack:

*   **Framework**: [React](https://reactjs.org/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)

### 📂 Project Structure

The codebase is organized to be clean, scalable, and maintainable.

```
/src
├── components/         # Reusable React components
│   ├── ColorBox.tsx
│   ├── ColorPicker.tsx
│   └── SimulationGrid.tsx
│
├── services/           # Core application logic
│   └── colorSimulation.ts # Functions for hex/rgb conversion & simulation
│
├── types/              # TypeScript type definitions
│   └── types.ts
│
├── App.tsx             # Main application component and layout
└── index.tsx           # Application entry point
```

### 🚀 Getting Started

To run this project locally, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Yagna123k/xcolor.git
    cd xcolor
    ```
 
2.  **Install dependencies:**
    This project uses `npm`.
    ```bash
    npm install
    ```

3.  **Run the development server:**
    This will start the Vite development server, typically on `http://localhost:5173`.
    ```bash
    npm run dev
    ```

4.  **Open your browser** and navigate to the local URL to see the application in action!

### 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
