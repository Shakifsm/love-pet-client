import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import ProcessPayment from '../../ProcessPayment/ProcessPayment';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const AppoinmentForm = ({ modalIsOpen, closeModal, appoinmentOn, date }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        data.service = appoinmentOn;
        data.date = date;
        date.created = new Date()

        fetch('https://powerful-hamlet-53653.herokuapp.com/addAppoinment', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    closeModal();
                    alert('appoinment created successfully')
                }
            })
        console.log(data, data.service);



    };

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-center">{appoinmentOn}</h2>
                <p className="text-secondary text-center"><small>On {date.toDateString()}</small></p>
                <div className="row w-100">
                    <div className="col-md-8">
                        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-group">
                                <input className="form-control" name="name" placeholder="Your Name" {...register("name")} />
                            </div>
                            <div className="form-group">
                                <input className="form-control" name="phone" placeholder="Phone Number" {...register("phone")} />
                            </div>
                            <div className="form-group">
                                <input className="form-control" name="email" placeholder="Email" {...register("email")} />
                            </div>
                            <div className="form-group row">
                                <div className="col-md-4">
                                    <select className="form-control" name="pet" {...register("pet")}>
                                        <option disabled={true} value="Not set">Select Pet</option>
                                        <option value="Dog">Dog</option>
                                        <option value="Cat">Cat</option>
                                        <option value="Not set">Other</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <input type="number" className="form-control" name="age" placeholder="Pet's Age" {...register("age")} />
                                </div>
                                <div className="col-md-4">
                                    <input type="number" className="form-control" name="weight" placeholder=" Pet's Weight" {...register("weight")} />
                                </div>
                            </div>
                            <div className="form-group text-right">
                                <button type="submit" className="btn btn-success">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4 pt-5">
                        <h6 className="pb-5">Select Your Payment Method</h6>
                        <ProcessPayment></ProcessPayment>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default AppoinmentForm;