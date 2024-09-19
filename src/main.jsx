// react dom
import { createRoot } from "react-dom/client";

// css
import "./index.css";
import 'animate.css';
import "../src/fonts.css";
import "../src/css/mui.css";

// components
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
