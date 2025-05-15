import React from 'react';
import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-xl navbar-dark bg-dark px-4">
        <div class="container-fluid">
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
        </div>
      </nav>


      

      <nav class="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
        <div class="container-fluid">
          <Link to={"/"}>
            <a className="navbar-brand " href="#">Pics</a>
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to={"/"}>
                  <a class="nav-link " aria-current="/" href="#">Home</a>
                </Link>
              </li>
              <Link to={"/salesplan"}>
                <li className="nav-item">
                  <span className="nav-link " aria-current="/salesplan" href="#">Sale Planers</span>
                </li>
              </Link>

              <Link to={"/orders"}>
                <li className="nav-item">
                  <a className="nav-link " aria-current="/orders"  href="#">Orders</a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>


      

<nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sale Planers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Orders</a>
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