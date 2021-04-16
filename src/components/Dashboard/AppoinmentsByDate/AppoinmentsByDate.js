import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppoinmentsByDate = ({appoinments}) => {
    return (
        <div>
            <h2>Appoinments : {appoinments.length}</h2>
            {
                appoinments.length ?
                 <AppointmentShortList appoinments={appoinments} ></AppointmentShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }
        </div>
    );
};

export default AppoinmentsByDate;