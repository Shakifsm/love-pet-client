import React from 'react';

const WhyUsDetail = ({whyUs}) => {
    return (
        <div className="col-md-3 text-center">
            <img src={whyUs.img} alt=""className="mb-5"/>
            <h5 className="mb-3">{whyUs.name}</h5>
            <p>Synergistically lorem networks</p>
        </div>
    );
};

export default WhyUsDetail;