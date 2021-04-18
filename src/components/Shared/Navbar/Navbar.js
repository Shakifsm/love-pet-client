import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from "../../../images/logo.png"

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div classNameName="logo">
                    <Link to="/home"><img src={logo} alt="" /></Link>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link mr-5 active">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link mr-5">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/appoinment" className="nav-link mr-5">Services</Link>
                        </li>
                        {
                            loggedInUser.isLoggedIn ? <h5 classNameName="pt-1">{loggedInUser.userName}</h5> :
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link mr-5">Login</Link>
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;