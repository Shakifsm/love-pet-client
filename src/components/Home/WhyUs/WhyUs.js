import React from 'react';
import why1 from "../../../images/why us 1.png"
import why2 from "../../../images/why us 2.png"
import why3 from "../../../images/why us 3.png"
import WhyUsDetail from '../WhyUsDetail/WhyUsDetail';

const whyUsData = [
    {
        name : 'In-Home Consult',
        img : why1
    },
    {
        name : 'Book Service 24/7',
        img : why2
    },
    {
        name : 'In-Home Consult',
        img : why1
    },
    {
        name : 'Experienced, Pro Staff',
        img : why3
    },
]

const WhyUs = () => {
    return (
        <section id="about-us" style={{backgroundColor:'#EBF8E6'}} className="service-container mt-5 pt-5 pb-5">
            <div className="text-center">
                <h2><b><span style={{ color: '#F78264' }}>Why</span> Us?</b></h2>
            </div>
            <div className="d-flex justify-content-center mt-5 mb-5 pt-3 pb-3">
                <div className="row w-10 container-fluid">
                    {
                        whyUsData.map(whyUs => <WhyUsDetail whyUs={whyUs}></WhyUsDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default WhyUs;