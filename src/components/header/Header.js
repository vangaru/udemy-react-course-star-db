import React from "react";
import './Header.css';

const Header = () => {
    return (
        <nav className="header navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <h2 className="text-white">Star DB</h2>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="text-white"><i className="fas fa-align-justify"/></span>
                </button>

                <div className="mx-5 collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item p-3">
                            <a className="nav-link active" href="#">
                                <h4>Home</h4>
                            </a>
                        </li>
                        <li className="nav-item p-3">
                            <a className="nav-link" href="#">
                                <h4>People</h4>
                            </a>
                        </li>
                        <li className="nav-item p-3">
                            <a className="nav-link" href="#">
                                <h4>Planets</h4>
                            </a>
                        </li>
                        <li className="nav-item p-3">
                            <a className="nav-link" href="#">
                                <h4>Starships</h4>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;