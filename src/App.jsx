import Cabecalho from "./components/Cabecalho";

import Home from "./pages/Home";
import Samba from "./pages/Samba";
import Rock from "./pages/Rock";

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
