import axios from 'axios';
import React, { useContext, useState } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import { Helmet } from 'react-helmet';


const AddMarathon = () => {

    const [regStartDate, setRegStartDate] = useState(new Date());
    const [regEndDate, setRegEndDate] = useState(new Date());
    const [eventStartDate, setEventStartDate] = useState(new Date());

    const { user } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleAddMarathon = e => {
        e.preventDefault()

        const formData = new FormData(e.target)
        formData.set("regStartDate", regStartDate)
        formData.set("regEndDate", regEndDate)
        formData.set("eventStartDate", eventStartDate)
        formData.set("CreatedAt:", new Date().toLocaleString('en-US'))
        formData.set("TotalRegistrationCount", 0)

        const MarathonsInfo = Object.fromEntries(formData.entries());
        console.log(MarathonsInfo);

        // axios post method
        axios.post(`${import.meta.env.VITE_API_URL}/all-marathons`, MarathonsInfo)
            .then(res => {
                console.log("Data: ", res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Congrates!",
                        text: "New Marathon Event is Added Successfully",
                        showConfirmButton: false,
                        timer: 3000
                    });
                    navigate('/my-marathon-list')
                }
            })
            .catch(err => {
                console.log("Error: ", err);
            })
    }

    return (
        <div>

            <Helmet>
                <title>AddMarathon - EnduroFest</title>
            </Helmet>

            <div className="card bg-base-100 w-full mx-auto  border border-gray-200 shadow-md p-6 ">
                {/* form heading */}
                <h1 className='font-bold text-3xl text-cyan-700 font-roboto text-center'>Create A Marathon Event</h1>

                {/* form element  */}
                <form onSubmit={handleAddMarathon} className="card-body p-0">

                    {/* user email  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg"> Email</span>
                        </label>
                        <input type="email" name='email' defaultValue={user?.email} readOnly className="input input-bordered" required />
                    </div>


                    {/* title  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Marathon Title</span>
                        </label>
                        <input type="text" name='title' placeholder="Enter Marathon Title" className="input input-bordered" required />
                    </div>

                    {/* image url  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg"> Marathon Image</span>
                        </label>
                        <input type="text" name='image' placeholder="Enter Marathon Image Url" className="input input-bordered" required />
                    </div>


                    <div className=' lg:flex gap-5'>
                        {/* start reg date  */}
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Start Registration Date</span>
                            </label>
                            <DatePicker
                                className='input input-bordered w-full'
                                selected={regStartDate}
                                onChange={(date) => setRegStartDate(date)}
                                required
                            />
                        </div>

                        {/* end reg date  */}
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">End Registration Date</span>
                            </label>
                            <DatePicker
                                className='input input-bordered w-full'
                                selected={regEndDate}
                                onChange={(date) => setRegEndDate(date)}
                                required
                            />
                        </div>
                    </div>


                    <div className=' lg:flex gap-5'>

                        {/* marathon strat date  */}
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Marathon Start Date</span>
                            </label>
                            <DatePicker
                                className='input input-bordered w-full'
                                selected={eventStartDate}
                                onChange={(date) => setEventStartDate(date)}
                                required
                            />
                        </div>

                        {/* running distance  */}
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Running distance
                                </span>
                            </label>
                            <select name='distance' class="w-full input appearance-auto border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent">
                                <option value="25k">25k</option>
                                <option value="10k">10k</option>
                                <option value="3k">3k</option>
                            </select>
                        </div>
                    </div>


                    {/* event location  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Location</span>
                        </label>
                        <input type="text" name='location' placeholder="Enter Event Location" className="input input-bordered" required />
                    </div>


                    {/* event description  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Description</span>
                        </label>
                        <textarea name='description' className="textarea textarea-bordered" placeholder="Add a description about this marathon event..."></textarea>
                    </div>

                    {/* event full details  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Details</span>
                        </label>
                        <textarea name='details' className="textarea textarea-bordered" placeholder="Add Details..."></textarea>
                    </div>

                    {/* submit button  */}
                    <div className="form-control mt-6">
                        <button className="btn bg-cyan-600 text-lg font-semibold text-white">Add Event</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMarathon;