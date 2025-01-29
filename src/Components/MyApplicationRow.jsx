import * as Dialog from "@radix-ui/react-dialog";
import "../index.css";
import React, { useContext } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MyApplicationRow = ({ myApplication, index }) => {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    
    // console.log({myApplication});

    const handleUpdateApplication = (e, id) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const applicationUpdateInfo = Object.fromEntries(formData.entries())
        console.log(applicationUpdateInfo, id);

        axios.put(`${import.meta.env.VITE_API_URL}/all-applications/${id}`, applicationUpdateInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        text: "Your Registration Information has been Updated Successfully",
                        showConfirmButton: false,
                        timer: 4000
                    });
                    navigate('/dashboard/my-apply-list')
                }
            })

    }


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "btn btn-success",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${import.meta.env.VITE_API_URL}/all-applications/${id}`)
                    .then(res => {
                        console.log(res.data);

                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            // const remainingApplications = AllApplications.filter(Application => Application._id !== id)
                            // setAllApplications(remainingApplications)
                        }
                    })
            }
        });
    }

    return (
        <>
            <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                <td className="p-3">
                    <p>{index + 1}</p>
                </td>
                <td className="p-3">
                    <p>{myApplication?.title}</p>
                </td>
                <td className="p-3">
                    <p>{myApplication?.first_name}</p>
                </td>
                <td className="p-3">
                    <p>{myApplication?.last_name}</p>
                </td>
                <td className="p-3">
                    <p>{myApplication?.contact_number}</p>
                </td>
                <td className="p-3">
                    <p>{myApplication?.address}</p>
                </td>

                <td className="p-3 text-center flex ">
                    <span className="px-3 py-1 font-bold rounded-md text-purple-900 dark:bg-violet-600 dark:text-gray-50">

                        {/* radixUI modal */}
                        <Dialog.Root>
                            <Dialog.Trigger asChild>
                                <button ><FaRegEdit /></button>
                            </Dialog.Trigger>
                            <Dialog.Portal>
                                <Dialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />
                                <Dialog.Content className="fixed left-1/2 top-1/2  w-[90vw] lg:max-w-[500px] h-4/5 -translate-x-1/2 -translate-y-1/2 rounded-md overflow-y-scroll bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
                                    <Dialog.Title className="m-0 text-xl text-center text-cyan-700  font-bold text-mauve12">
                                        Update Event Information
                                    </Dialog.Title>


                                    <form
                                        onSubmit={(e) => { handleUpdateApplication(e, myApplication?._id) }}
                                        className="card-body p-0">

                                        {/* user email  */}
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-semibold text-lg"> Email</span>
                                            </label>
                                            <input type="email" name='email'  readOnly className="input input-bordered" required />
                                        </div>


                                        {/* first name  */}
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-semibold text-lg">First Name</span>
                                            </label>
                                            <input type="text" name='first_name'  className="input input-bordered" required />
                                        </div>

                                        {/* last name  */}
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-semibold text-lg">Last Name</span>
                                            </label>
                                            <input type="text" name='last_name'  className="input input-bordered" required />
                                        </div>


                                        {/* contact number  */}
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-semibold text-lg">Contact Number</span>
                                            </label>
                                            <input type="text" name='contact_number'  className="input input-bordered" required />
                                        </div>


                                        {/* applicant location  */}
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-semibold text-lg">Address</span>
                                            </label>
                                            <input type="text" name='address'  className="input input-bordered" required />
                                        </div>



                                        {/* submit button  */}
                                        <div className="form-control mt-6">
                                            <button className="btn bg-cyan-600 text-lg font-semibold text-white">Update</button>
                                        </div>
                                    </form>

                                    <div className="mt-[25px] flex justify-end">
                                        <Dialog.Close asChild>
                                            <button className="inline-flex h-[35px] items-center justify-center rounded bg-green4 px-[15px] font-medium leading-none text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 focus:outline-none">
                                                Close
                                            </button>
                                        </Dialog.Close>
                                    </div>

                                </Dialog.Content>
                            </Dialog.Portal>
                        </Dialog.Root>

                    </span>

                    <span className="px-3 py-1 font-semibold rounded-md text-red-600 dark:bg-violet-600 dark:text-gray-50">
                        <button onClick={() => { handleDelete(myApplication._id) }}><MdDelete /></button>
                    </span>
                </td>
            </tr>
        </>
    );
};

export default MyApplicationRow;