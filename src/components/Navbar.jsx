import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary my_navBar">
            <div className="container">
                <NavLink className="navbar-brand my_NavName" to="/">Favour Ekengwu</NavLink>
                <button className="navbar-toggler border border-0 me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-4 ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                        <li className="nav-item me-3">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item me-3">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item me-3">
                            <NavLink className="nav-link" to="/shop">Shop</NavLink>
                        </li>
                        <li className="nav-item me-3">
                            <NavLink className="nav-link" to="/games">Games</NavLink>
                        </li>
                        <li className="nav-item me-3 nav-button border border-2 rounded ms-2 navbar_button">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  );
}

export default Navbar;