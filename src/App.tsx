import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import { CartProvider } from "./hooks/useCart";

import { Header } from "./components/Header";
import { MainRoutes } from "./routes";

import { GlobalStyle } from "./styles/global";

export function App() {

  return (
    <Router>
      <CartProvider>
        <GlobalStyle />
        <Header />
        <MainRoutes />
        <ToastContainer autoClose={4000} />
      </CartProvider>
    </Router>
  )
}
