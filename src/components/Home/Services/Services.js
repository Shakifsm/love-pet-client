import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section className="service-container mt-5 pt-2">
            <div className="text-center">
                <h2><b>Our <span style={{ color: '#F78264' }}>Services</span></b></h2>
            </div>
            <div className="d-flex  justify-content-center mt-5 mb-5 pt-3 pb-3">
                <div className="row w-10 container-fluid">
                    {
                        services.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>

    );
};

export default Services;