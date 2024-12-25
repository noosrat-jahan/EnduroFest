import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import DatePicker from 'react-datepicker';
import { useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const MarathonRegister = () => {
    console.log(new Date().toLocaleString('en-US'));

    
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const Marathondetails = useLoaderData()

    const handleRegisterMarathon = e => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const applicationDetails = Object.fromEntries(formData.entries())
        console.log(applicationDetails);

        axios.post('http://localhost:5000/all-applications', applicationDetails)
            .then(res => {
                console.log('Data:', res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Congratulations",
                        text: "Application for marathon is successful",
                        showConfirmButton: false,
                        timer: 3000
                    });
                    navigate('/dashboard/my-apply-list')
                }
            })
            .catch(err => {
                console.log("Error: ", err);
            })
    }

    return (
        <div>
            {/* form heading */}
            <h1 className='font-bold text-2xl text-cyan-700 font-roboto mt-5 text-center uppercase'>Marathon Registration For</h1>
            <h1 className='font-bold text-2xl text-black font-roboto text-center uppercase'>{Marathondetails.title}</h1>

            <div className="card bg-base-200 w-10/12 my-6 mx-auto  border border-gray-200 shadow-md p-6 ">


                {/* form element  */}
                <form onSubmit={handleRegisterMarathon} className="card-body p-10 ">

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
                        <input type="text" name='title' defaultValue={Marathondetails.title} readOnly className="input input-bordered" required />
                    </div>


                    {/* Marathon Start date  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Marathon Start Date</span>
                        </label>
                        <input type="text" name='event-date' defaultValue={Marathondetails.eventStartDate} readOnly className="input input-bordered" required />
                    </div>

                    {/* First Name  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">First Name</span>
                        </label>
                        <input type="text" name='first-name' placeholder="First Name" className="input input-bordered" required />
                    </div>

                    {/* Last  Name  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Last  Name</span>
                        </label>
                        <input type="text" name='last-name' placeholder="Last Name" className="input input-bordered" required />
                    </div>


                    {/* Contact Number  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Contact Number</span>
                        </label>
                        <input type="text" name='contact-number' placeholder="Contact Number" className="input input-bordered" required />
                    </div>


                    {/* Address  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Address</span>
                        </label>
                        <input type="text" name='address' placeholder="Address" className="input input-bordered" required />
                    </div>


                    {/* submit button  */}
                    <div className="form-control mt-6">
                        <button className="btn bg-cyan-600 text-lg font-semibold text-white">Apply</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MarathonRegister;