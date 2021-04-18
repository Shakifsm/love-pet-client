import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardPayment from './SimpleCardPayment';

const stripePromise = loadStripe('pk_test_51IhWyIAR1PNw1NfeGzM7aq2K5GPqsHImWiNoWCcDQ9kAxu08Nxzt1vR9kTo2XSk2RlK5sIu1bOqo4BHihPzxl3D100Sdkkptwx');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardPayment></SimpleCardPayment>
        </Elements>
    );
};

export default ProcessPayment;