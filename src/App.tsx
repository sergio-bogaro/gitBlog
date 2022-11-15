import { IssuesProvider } from "./contexts/IssuesContext";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <BrowserRouter>
      <IssuesProvider>
        <Router></Router>
        <GlobalStyle />
      </IssuesProvider>
    </BrowserRouter>
  );
}
