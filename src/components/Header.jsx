import React from 'react';
import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link to={"/"}>
          <a className="navbar-brand" href="#">Pics</a>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <Link to={"/"}>
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </Link>
              </li> */}
              <li className="nav-item">
                <Link to={"/salesplan"}>
                  <a className="nav-link" href="#">Plan de Negocios</a>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to={"/addsalesplan"}>
                  <a className="nav-link" href="#">Agregar Plan de Negocio</a>
                </Link>
              </li> */}
              <li className="nav-item">
                <Link to={"/orders"}>
                  <a className="nav-link" href="#">Pedidos</a>
                </Link>
              </li>


            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Header;