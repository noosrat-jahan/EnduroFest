import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';


import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { format } from 'date-fns';


import "../index.css";
import DatePicker from 'react-datepicker';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import MyApplicationRow from './MyApplicationRow';


const MyApplications = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    // const LoadedApplications = useLoaderData()

    // const [AllApplications, setAllApplications] = useState(LoadedApplications)
    const [AllApplications, setAllApplications] = useState([])

    // const myApplications = AllApplications.filter(myApplication => myApplication.applicantEmail === user?.email)

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/my-applications?email=${user?.email}`, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                setAllApplications(res.data)
            })
            .catch(err => { console.log('error', err); })

    }, [user?.email])


    const [searchedApplication, setSearchedApplication] = useState([])

    const handleSearch = (e) => {
        e.preventDefault()
        const title = e.target.Search.value
        console.log(title);

        axios.get(`${import.meta.env.VITE_API_URL}/my-applicationsbysearch?title=${title}`)
            .then(res => {
                console.log(res.data);
                setSearchedApplication(res.data)
            })
    }


    return (
        <div>

            <Helmet>
                <title>MyApplication - EnduroFest</title>
            </Helmet>

            {/* component used from mamba UI  */}
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                {
                    AllApplications.length < 1 && <h1 className='text-center font-bold text-red-500 text-2xl mb-3'>You have zero application now.</h1>
                }
                <div className='flex justify-between items-center w-full mb-5'>
                    <h2 className="mb-4 text-2xl dark:text-white font-semibold leading-tight">My Applications List</h2>
                    <fieldset className=" space-y-1 text-gray-100">
                        <form onSubmit={handleSearch}>
                            <label htmlFor="Search" className="hidden ">Search</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <button type="submit" title="search" className="p-2 focus:outline-none focus:ring">
                                        <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 text-gray-100">
                                            <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                        </svg>
                                    </button>
                                </span>
                                <input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-800 text-gray-100 focus:bg-gray-900 focus:border-violet-400" />
                            </div>
                        </form>
                    </fieldset>
                </div>
                <div className="overflow-x-auto bg-gray-50">
                    <table className="min-w-full text-sm">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="dark:bg-gray-800 dark:text-gray-100">
                            <tr className="text-center">
                                <th className="p-3">SL.No.</th>
                                <th className="p-3">Marathon Title</th>
                                <th className="p-3">First Name</th>
                                <th className="p-3">Last Name</th>
                                <th className="p-3">Contact Number</th>
                                <th className="p-3 ">Address</th>
                                <th className="p-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                searchedApplication.length > 0
                                    ?
                                    searchedApplication?.map((myApplication, index) => <MyApplicationRow key={myApplication._id} index={index} myApplication={myApplication}></MyApplicationRow>)
                                    :
                                    AllApplications?.map((myApplication, index) => <MyApplicationRow key={myApplication._id} index={index} myApplication={myApplication}></MyApplicationRow>)

                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyApplications;

