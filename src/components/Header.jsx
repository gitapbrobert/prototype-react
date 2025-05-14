import React from 'react';
import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <Link to={"/"}>
          <a className="navbar-brand " href="#">Pics</a>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to={"/"}>
                <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
              </Link>
            </li>
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="#">lorem ipsum</a></li>
                <li><a className="dropdown-item" href="#">lorem ipsum</a></li>
                <li><a className="dropdown-item" href="#">lorem ipsum</a></li>
              </ul>
            </li>
            */}
            <Link to={"/salesplan"}>
              <li className="nav-item">
                <a className="nav-link" href="#">Sale Planers</a>
              </li>
            </Link>

            <Link to={"/orders"}>
              <li className="nav-item">
                <a className="nav-link" href="#">Orders</a>
              </li>
            </Link>
            
          </ul>
          {/* <span className="navbar-text float-right">
            Lorem Ipsum
          </span> */}
        </div>
      </nav>

      <Outlet />
    </>

    

  );
};

export default Header;