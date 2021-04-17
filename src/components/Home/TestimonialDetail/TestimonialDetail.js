import React from 'react';
import "./TestimonialDetail.css"

const TestimonialDetail = ({review}) => {
    
    return (
        <div className="col-md-4">
            <div className="row w-100">
                <div className="col-md-6">
                    <img className="img-fluid rounded-circle review-style" src={review.imageURL} alt=""/>
                </div>
                <div className="col-md-6">
                    <h4>{review.name}</h4>
                    <p>{review.review}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialDetail;