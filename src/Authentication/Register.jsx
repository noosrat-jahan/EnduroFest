import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Register = () => {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className='px-3'>
            <div className="card bg-base-100 w-full  mx-auto max-w-md shrink-0 shadow-xl">
                <h1 className='text-3xl font-semibold text-[#217276]'>Sign Up</h1>
                <form className="card-body p-0">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input type="text" placeholder="Your Photo" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                         type={showPassword ? "text" : "password"} 
                         placeholder="Password" className="input input-bordered " required />
                        <span onClick={()=>{setShowPassword(!showPassword)}} className='absolute right-4 top-[52px]'>
                            {
                                showPassword ? <IoMdEye /> : <IoMdEyeOff />
                            }
                        </span>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-accent text-lg">Register</button>
                    </div>
                    <div className="divider divider-neutral">OR</div>
                    <div className="*:w-full space-y-2">
                        <button className="btn btn-outline text-[#22177A]"><span className='text-xl'><FcGoogle /></span> Continue with Google</button>
                    </div>

                    <p className='mt-4 text-center'> Already Have an Account?
                        <Link to="/login" className='text-[#26949a] ml-3 font-bold'>Login</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Register;