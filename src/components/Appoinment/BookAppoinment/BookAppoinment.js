import React from 'react';
import BookingCard from '../BookingCard/BookingCard';


const bookingData = [
    {
        id : 1,
        subject : 'Surgery',
        visitingHour : "8:00 AM - 9:00 PM",
        space : 10
    },
    {
        id : 2,
        subject : '24 Hour Care',
        visitingHour : "8:00 AM - 9:00 PM",
        space : 20
    },
    {
        id : 3,
        subject : 'Vaccinations',
        visitingHour : "8:00 AM - 9:00 PM",
        space : 15
    },
    {
        id : 4,
        subject : 'Laser Therapy',
        visitingHour : "8:00 AM - 9:00 PM",
        space : 25
    }
]
const BookAppoinment = ({date}) => {
    return (
        <section>
            <h2 className="text-center">Available Appoinments on {date.toDateString()}</h2>
            <div className="row w-100">
                {
                    bookingData.map(book =><BookingCard key={book.id} book={book} date={date}></BookingCard> )
                }
            </div>
        </section>
    );
};

export default BookAppoinment;