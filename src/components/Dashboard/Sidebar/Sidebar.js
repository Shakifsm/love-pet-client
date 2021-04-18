import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripHorizontal, faHome, faCalendar, faCommentAlt, faUserPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import "./Sidebar.css"

const Sidebar = () => {
    
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 p-5" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <div>
                    <li>
                        <Link to="/addService" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addReview" className="text-white">
                            <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/allAppointmets" className="text-white">
                            <FontAwesomeIcon icon={faCalendar} /> <span>Appointments</span>
                        </Link>
                    </li>
                </div>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;

