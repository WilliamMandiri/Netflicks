import React from "react";
import "/my-app/src/App.css";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
            <div class="container">
                <a href="#" class="navbar-brand">NETFLICKS</a>
                <div class="collapse navbar-collapse" id="navmenu">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">ABOUT US</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">WATCH LATER</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">NEW MOVIE</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;