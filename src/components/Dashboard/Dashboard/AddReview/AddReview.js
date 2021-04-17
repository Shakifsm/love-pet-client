import axios from 'axios';
import React, { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const AddReview = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const [imageURL, setImageURL] = useState(null)

    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '0233cc6f820bf3b7e422a932b34aaf8e')
        imageData.append('image', event.target.files[0])


        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    const onSubmit = data => {
        const eventData = {
            name: data.name,
            email: data.email,
            review : data.review,
            imageURL: imageURL
        }
        const url = 'http://localhost:5000/addAReview'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('serverside responce', res))
    }

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5>Add a Review</h5>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group">
                        <input className="form-control" name="name" placeholder="Your name" {...register("name")} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" name="email" placeholder="Email" {...register("email")} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" name="review" placeholder="Enter your review" {...register("review")} />
                    </div>
                    <div className="form-group">
                        <input type="file" className="form-control" onChange={handleImageUpload} />
                    </div>
                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddReview;