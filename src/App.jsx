import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produto from "./assets/componentes/produto/produto";
import ListagemProdutos from "./assets/Componentes/ListagemProdutos/ListagemProdutos";

function App(){
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListagemProdutos/>}></Route>
          <Route path="/produto/:titulo" element={<Produto/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App