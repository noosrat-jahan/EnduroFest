import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import DatePicker from 'react-datepicker';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';


const MarathonRegister = () => {
    // console.log(new Date().toLocaleString('en-US'));


    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const Marathondetails = useLoaderData()
    const {id} = useParams()
    // console.log(id);
    // console.log(parseInt(Marathondetails.TotalRegistrationCount) + 1);

    const handleRegisterMarathon = e => {
        e.preventDefault()

        const formData = new FormData(e.target)
        formData.set("TotalRegistrationCount", Marathondetails.TotalRegistrationCount)
        const applicationDetails = Object.fromEntries(formData.entries())
        console.log(applicationDetails);

        axios.post(`${import.meta.env.VITE_API_URL}/all-applications`, applicationDetails)
            .then(res => {
                console.log('Data:', res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Congratulations",
                        text: "Application for marathon is successful",
                        showConfirmButton: false,
                        timer: 4000
                    });

                    axios.patch(`${import.meta.env.VITE_API_URL}/all-marathons/${id}`, applicationDetails)
            .then(res => {
                console.log('Data:', res.data);
                navigate('/dashboard/my-apply-list')
            })
                    

                }
            })
            .catch(err => {
                console.log("Error: ", err);
            })


        
            
    }

    return (
        <div>

            <Helmet>
                <title>Register Marathon - EnduroFest</title>
            </Helmet>

            {/* form heading */}
            <h1 className='font-bold lg:text-2xl text-cyan-700 font-roboto mt-5 text-center uppercase'>Marathon Registration For</h1>
            <h1 className='font-bold text-2xl text-black font-roboto text-center uppercase'>{Marathondetails.title}</h1>

            <div className="card bg-base-200 w-10/12 my-6 mx-auto  border border-gray-200 shadow-md lg:p-6 ">


                {/* form element  */}
                <form onSubmit={handleRegisterMarathon} className="card-body p-2 lg:p-10 ">

                    {/* user email  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg"> Email</span>
                        </label>
                        <input type="email" name='applicantEmail' defaultValue={user?.email} readOnly className="input input-bordered" required />
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
                        <input type="text" name='first_name' placeholder="First Name" className="input input-bordered" required />
                    </div>

                    {/* Last  Name  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Last  Name</span>
                        </label>
                        <input type="text" name='last_name' placeholder="Last Name" className="input input-bordered" required />
                    </div>


                    {/* Contact Number  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Contact Number</span>
                        </label>
                        <input type="text" name='contact_number' placeholder="Contact Number" className="input input-bordered" required />
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



// [
//     { id: 2, name: "Item B", date: "2022-01-01" },
//     { id: 1, name: "Item A", date: "2023-12-25" },
//     { id: 3, name: "Item C", date: "2024-05-15" },
//   ]
//   const parseDate = (str) => {
//     const [day, month, year] = str.split("-");
//     return new Date(year, month - 1, day); // Month is 0-indexed
//   };
  
//   data.sort((a, b) => parseDate(a.date) - parseDate(b.date));