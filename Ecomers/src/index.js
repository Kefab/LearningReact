import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

import { Login } from "./views/Login/index";
import { HomePage } from "./views/HomePage/index";
import { CreatUser } from "./views/CreateUser/index";
import { Userstable } from "./views/Admin/UsersTable";
import { BrandTable } from "./views/Admin/BrandTable";
import { CategoryTable } from "./views/Admin/CategoryTable";
import { PayMethodTable } from "./views/Admin/PayMethodTable";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/createUser" element={<CreatUser />}></Route>
        <Route path="/UserTable" element={<Userstable />}></Route>
        <Route path="/BrandTable" element={<BrandTable />}></Route>
        <Route path="/CategoryTable" element={<CategoryTable />}></Route>
        <Route path="/PayMethodTable" element={<PayMethodTable />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
