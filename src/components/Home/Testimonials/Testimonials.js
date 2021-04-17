import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import TestimonialDetail from '../TestimonialDetail/TestimonialDetail';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className=" mt-5 pt-2">
            <div className="text-center">
                <h2><b>Let's Hear <span style={{ color: '#F78264' }}>From Our Clients</span></b></h2>
            </div>
            <div className="d-flex  justify-content-center mt-5 pt-5 pb-5 mb-5">
                <div className="row w-10 container-fluid">
                    {
                        reviews.map(review => <TestimonialDetail review={review}></TestimonialDetail>)
                    }
                </div>
            </div>

        </section>
    );
};

export default Testimonials;