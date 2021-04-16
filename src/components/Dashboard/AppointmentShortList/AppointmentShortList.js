import React from 'react';

const AppointmentShortList = ({appoinments}) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">Service</th>
                </tr>
            </thead>
            <tbody>
                {
                  appoinments.map((appointment, index) => 
                        
                    <tr>
                        <td>{appointment.name}</td>
                        <td>{appointment.phone}</td>
                        <td>{appointment.email}</td>
                        <td>{appointment.service}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AppointmentShortList;