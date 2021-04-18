import React from 'react';
import AppoinmentForm from '../AppoinmentForm/AppoinmentForm';
import "./BookingCard.css"

const BookingCard = ({book, date}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-3 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{book.subject}</h5>
                    <h6>{book.visitingHour}</h6>
                    <p>{book.totalSpace} SPACES AVAILABLE</p>
                    <h4>{book.cost}</h4>
                    <button onClick={openModal} className="book-btn text-uppercase">Book Appointment</button>
                    <AppoinmentForm date={date} appoinmentOn = {book.subject} modalIsOpen={modalIsOpen} closeModal={closeModal}></AppoinmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;