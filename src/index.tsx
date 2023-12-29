import MainNavigation from "@Routes/MainNavigation.routes";
import React from "react";
import {createRoot} from "react-dom/client";

// Importing the global styles
import "@Styles/global.scss";

// Get the root element of the app to render
// If the root element is not found, throw an error
const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element not found");

// Creating a React root instance and rendering the main App component
const rootInstance = createRoot(rootEl);
rootInstance.render(<MainNavigation />);
