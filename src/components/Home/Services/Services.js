import React from 'react';
import surgery from "../../../images/service 1.jpg";
import care from "../../../images/service 2.jpg";
import vaccinations from "../../../images/service 3.jpg";
import laser from "../../../images/service 4.jpg";
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Surgery',
        img: surgery
    },
    {
        name: '24 Hour Care',
        img: care
    },
    {
        name: 'Vaccinations',
        img: vaccinations
    },
    {
        name: 'Laser Therapy',
        img: laser
    }
]

const Services = () => {
    return (
        <section className="service-container mt-5 pt-2">
            <div className="text-center">
                <h2><b>Our <span style={{ color: '#F78264' }}>Services</span></b></h2>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <div className="row w-10 container-fluid">
                    {
                        serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>

    );
};

export default Services;