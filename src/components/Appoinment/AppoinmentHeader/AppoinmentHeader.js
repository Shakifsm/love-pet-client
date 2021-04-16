import React from 'react';
import img from "../../../images/veterinarian-check-ing-puppy-s-health.jpg"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppoinmentHeader = ({handleDateChange}) => {
    
    return (
        <main style={{ height: '600px', backgroundColor: '#EBF8E6' }} className="row w-100 d-flex align-items-center">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h1 style={{ color: '#3A4256' }}>Appoinment</h1>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
            <div className="col-md-6 col-sm-6 col-12">
                <img src={img} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default AppoinmentHeader;