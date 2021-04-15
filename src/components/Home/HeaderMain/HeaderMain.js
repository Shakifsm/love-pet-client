import React from 'react';
import "./HeaderMain.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

const HeaderMain = () => {
    return (
        <section>
            <div className="row w-100">
                <div className="col-md-12 hero">
                    <h3 className="hero-sub-title">Grooming</h3>
                    <h1 className="hero-title">Pets Care</h1>
                    <p className="text-secondary">URGENT PET CARE IS CONVENIENTLY <br />LOCATED TO PROVIDE YOUR PET !</p>
                    <button className="appoinment-btn">
                        <FontAwesomeIcon className="mr-2" icon={faCalendar} />
                    MAKE AN APPOINMENT
                </button>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;