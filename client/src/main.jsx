import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
// import { ProductProvider } from "./context/ProductContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
// import { UserProvider } from "./context/UserContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        {/* <UserProvider> */}
          {/* <ProductProvider> */}
            <App />
          {/* </ProductProvider> */}
        {/* </UserProvider> */}
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
