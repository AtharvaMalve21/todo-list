import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { TodoContextProvider } from "./context/TodoContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <TodoContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TodoContextProvider>
);
