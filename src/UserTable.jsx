import { useContext, useEffect } from "react";
import { Usercontext } from "./App";
import { Link } from "react-router-dom";
export default function UserTable() {
  const Context = useContext(Usercontext);
  return (
    <>
      <div className="container">
        <table className="table ">
          <thead className="table-secondary">
            <tr>
              <th>#</th>
              <th>Full name</th>
              <th>Country</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Context.users.length > 0 ? (
                Context.users.map((user, key) => (
                <tr key={key}>
                  <td>{user.id}</td>
                  <td>{user.fullName}</td>
                  <td>{user.country}</td>
                  <td>
                    <Link to={`${user.id}/UpdateUser.jsx`} className="btn btn-primary me-2"> Edite</Link>
                    <Link to={`${user.id}/DeletUser.jsx`} className="btn btn-danger"> Delet </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" align="center">
                  Eroor bro 😐
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
