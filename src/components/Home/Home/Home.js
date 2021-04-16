import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <WhyUs></WhyUs>
            <FeaturedService></FeaturedService>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;