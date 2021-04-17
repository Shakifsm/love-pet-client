import React from 'react';
import "./HeaderMain.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const HeaderMain = () => {
    return (
        <section>
            <div className="row w-100 hero">
                <div className="col-md-12">
                    <h3 className="hero-sub-title">Grooming</h3>
                    <h1 className="hero-title">Pets Care</h1>
                    <p className="text-secondary">URGENT PET CARE IS CONVENIENTLY <br />LOCATED TO PROVIDE YOUR PET !</p>
                    <Link to="/appoinment">
                        <button className="appoinment-btn">
                            <FontAwesomeIcon className="mr-2" icon={faCalendar} />
                            MAKE AN APPOINMENT
                </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;