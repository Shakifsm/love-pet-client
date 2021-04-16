import React from 'react';
import AppoinmentsByDate from '../AppoinmentsByDate/AppoinmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import { useEffect } from 'react';

const containerStyle = {
    heigt: '100%',
    backgroundColor: '#F4FDFB'
}

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appoinments, setAppoinments] = useState([])
    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect(() => {
        fetch('http://localhost:5000/appoinmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date : selectedDate})
        })
            .then(res => res.json())
            .then(data => setAppoinments(data))
    }, [selectedDate])
    return (
        <div>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-4">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-6">
                    <AppoinmentsByDate appoinments={appoinments}></AppoinmentsByDate>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;