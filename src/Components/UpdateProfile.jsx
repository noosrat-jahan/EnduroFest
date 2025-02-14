import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {

    const {updateUserProfile} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleUpdateProfile = e =>{
        e.preventDefault()

        const form = e.target 
        const name = form.name.value 
        const photo = form.photo.value 
       
        updateUserProfile({displayName: name, photoURL: photo})
        .then(()=>{
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Profile has been updated successfully",
                showConfirmButton: false,
                timer: 2000
              });
            
            navigate('/')
        })
        .catch(err=>{
            console.log('Error:', err.message);
        })
    }

    return (
        <div>
            <div className="card bg-base-100 dark:bg-slate-800 mx-auto p-10 my-10 w-full max-w-md shrink-0 shadow-xl">
                <form onSubmit={handleUpdateProfile} className="card-body p-0 space-y-3 ">
                    <h1 className='text-2xl text-center font-bold text-purple-900 dark:text-gray-200'>Update Profile Information</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold dark:text-gray-200">UserName</span>
                        </label>
                        <input type="text" name='name' placeholder="Profile Name" className="input input-bordered dark:bg-slate-600 dark:text-white" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold dark:text-gray-200">PhotoURL</span>
                        </label>
                        <input type="text" name='photo' placeholder="Profile Photo" className="input input-bordered dark:bg-slate-600 dark:text-white" required />
                       
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-purple-800 dark:bg-blue-900 text-white text-lg">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;