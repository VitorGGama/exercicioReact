import Cabecalho from "./components/Cabecalho";

import Home from "./pages/Home.jsx";
import Samba from "./pages/Samba.jsx";
import Rock from "./pages/Rock.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />

        <Routes>
          <Route Component={Home} exact path="/" />
          <Route Component={Samba} path="/samba" />
          <Route Component={Rock} path="/rock" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
