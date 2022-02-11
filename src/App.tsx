import { BrowserRouter as Router } from "react-router-dom";

import { CartProvider } from "./hooks/useCart";

import { Header } from "./components/Header";
import { MainRoutes } from "./routes";

import { GlobalStyle } from "./styles/global";

export function App() {

  return (
    <CartProvider>
      <Router>
        <Header />
        <MainRoutes />
      </Router>
      <GlobalStyle />
    </CartProvider>
  )
}
