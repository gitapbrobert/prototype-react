import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a class="navbar-brand " href="#">Pics</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only"></span></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">lorem ipsum</a></li>
              <li><a class="dropdown-item" href="#">lorem ipsum</a></li>
              <li><a class="dropdown-item" href="#">lorem ipsum</a></li>
            </ul>

            {/* <a class="nav-link" href="#">Features</a> */}
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">lorem ipsum</a>
          </li>
        </ul>
        <span class="navbar-text float-right">
          Lorem Ipsum
        </span>
      </div>
    </nav>

  );
};

export default Header;