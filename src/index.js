import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastroUser from "./components/user/CadastroUser";
import CadastroProduto from "./components/produto/CadastroProduto";
import ListUser from "./components/user/ListUser";
import UpdateUser from "./components/user/UpdateUserPage";
import ListProduto from "./components/produto/ListarProdutos";
import UpdateProduto from "./components/produto/AtualizarProduto";

import ListVendas from "./components/vendas/ListarVendas";
import CadastroVenda from "./components/vendas/Vendas";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        {/* Rotas de usuário */}
        <Route path="/cadastroUser" element={<CadastroUser />}></Route>
        <Route path="/listUser" element={<ListUser />}></Route>
        <Route path="/update_user/:id" element={<UpdateUser />}></Route>

        {/* Rotas de produto */}
        <Route path="/cadastroProduto" element={<CadastroProduto />}></Route>
        <Route path="/listProduto" element={<ListProduto />}></Route>
        <Route path="/update_Produto/:id" element={<UpdateProduto />}></Route>

        <Route path="/cadastroVenda" element={<CadastroVenda />}></Route>
        <Route path="/listarVenda" element={<ListVendas />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
