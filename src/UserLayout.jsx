import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import UserTable from "./UserTable";
import AddUser from "./AddUser";
import UpdateUser from "./UpdateUser";
import DeletUser from "./DeletUser";

export default function UserLayout() {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 py-2 mb-2">
          <ul className="navbar-nav justify-content-center">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">User List</Link>
            </li>
            <li className="nav-item">
              <Link to={"/AddUser.jsx"} className="nav-link">Add User</Link>
            </li>
            <li className="nav-item">
              <Link to={"/UpdateUser.jsx"} className="nav-link">Update User</Link>
            </li>
          </ul>
        </nav>

        <Routes>
            <Route index element={<UserTable/>} />
            <Route path={"/AddUser.jsx"} element={<AddUser/>}/>
            <Route path={":id/UpdateUser.jsx"} element={<UpdateUser/>}/>
            <Route path={":id/DeletUser.jsx"} element={<DeletUser/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
