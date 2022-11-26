import React from "react";
import { Header } from "./componentes/Header";
import { ProductosListas } from "./componentes/Productos/index";
import 'boxicons';
import { BrowserRouter as Router } from "react-router-dom";
import { Paginas } from "./componentes/Paginas";
import { Dataprovider } from "./context/Dataprovider";


function App() {
  return (
    <Dataprovider>
    <div className="App">
      <Router>
      <Header />

      <Paginas />
      </Router>
    </div>
    </Dataprovider>
  );
}

export default App;
