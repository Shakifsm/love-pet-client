import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripHorizontal } from '@fortawesome/free-solid-svg-icons'
import "./BusinessInfo.css"

const BusinessInfo = () => {
    return (
        <section className="row w-100  business">
            <div className="col-md-5 pl-5 pt-5 pr-3 pb-5">
                <FontAwesomeIcon className="business-icons" icon={faGripHorizontal} /> <span>535 West Huntington Drive Monrovia, CA 91016</span>
            </div>
            <div className="col-md-4 p-5">
                <FontAwesomeIcon className="business-icons" icon={faGripHorizontal} /> <span>(970) 416-0232 | (970) 415-0233
</span>
            </div>
            <div className="col-md-3 p-5">
                <FontAwesomeIcon className="business-icons" icon={faGripHorizontal} /> <span>nfo@LovePet.com</span>
            </div>
        </section>
    );
};

export default BusinessInfo;