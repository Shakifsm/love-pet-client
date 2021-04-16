import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from "../../../images/logo.png"

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="logo">
                    <Link to="/home"><img src={logo} alt="" /></Link>
                </div>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link mr-5 active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-5" href="/dashboard">Dashboard</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-5" href="#">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-5" href="/appoinment">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-5" href="#">Contact Us</a>
                        </li>
                        {
                            loggedInUser.isLoggedIn ? <h5 className="pt-1">{loggedInUser.userName}</h5> :
                                <li class="nav-item">
                                    <a class="nav-link mr-5" href="/login">Login</a>
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;