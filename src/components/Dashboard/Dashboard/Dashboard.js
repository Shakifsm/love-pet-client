import React from 'react';
import AppoinmentsByDate from '../AppoinmentsByDate/AppoinmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const containerStyle = {
    heigt: '100%',
    backgroundColor: '#F4FDFB'
}

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appoinments, setAppoinments] = useState([])
    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect(() => {
        fetch('http://localhost:5000/appoinmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date : selectedDate, email : loggedInUser.email})
        })
            .then(res => res.json())
            .then(data => setAppoinments(data))
    }, [selectedDate])
    return (
        <section>
            <div style={containerStyle} className="row w-100">
                <div  className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 col-sm-12 col-12 p-5">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-5 col-sm-12 col-12 p-5">
                    <AppoinmentsByDate appoinments={appoinments}></AppoinmentsByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;