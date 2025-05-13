import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a className="navbar-brand " href="#">Pics</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a className="dropdown-item" href="#">lorem ipsum</a></li>
              <li><a className="dropdown-item" href="#">lorem ipsum</a></li>
              <li><a className="dropdown-item" href="#">lorem ipsum</a></li>
            </ul>

            {/* <a className="nav-link" href="#">Features</a> */}
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">lorem ipsum</a>
          </li>
        </ul>
        <span className="navbar-text float-right">
          Lorem Ipsum
        </span>
      </div>
    </nav>

  );
};

export default Header;