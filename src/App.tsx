import { BrowserRouter as Router } from "react-router-dom";

import { Header } from "./components/Header";
import { MainRoutes } from "./routes";

import { GlobalStyle } from "./styles/global";

export function App() {

  return (
    <>
      <Router>
        <Header />
        <MainRoutes />
      </Router>
      <GlobalStyle />
    </>
  )
}
