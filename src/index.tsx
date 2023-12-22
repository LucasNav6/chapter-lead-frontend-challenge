import App from "@Routes/App.routes";
import React from "react";
import {createRoot} from "react-dom/client";
import "./scss/global.scss";

const root = document.getElementById("root");
const rootInstance = createRoot(root);
rootInstance.render(<App />);
