import React from 'react';
import "./ServiceDetail.css"

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-3 text-center">
            <img src={service.imageURL} alt=""className="mb-5 service-style"/>
            <h5 className="mb-3">{service.serviceName}</h5>
            <p>Our veterinarians can perform orthopedic and soft tissue surgeries your pet may require.</p>
        </div>
    );
};

export default ServiceDetail;