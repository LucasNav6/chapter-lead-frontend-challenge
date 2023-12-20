import App from "@Pages/App";
import React from "react";
import {createRoot} from "react-dom/client";

const root = document.getElementById("root");
const rootInstance = createRoot(root);
rootInstance.render(<App />);
