import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="card bg-base-100 w-full mx-auto max-w-md shrink-0 shadow-2xl">
                <h1 className='text-3xl font-semibold text-[#217276]'>Sign In</h1>
                <form className="card-body p-0">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered" required />
                        <label className="label flex justify-end">
                            <a href="#" className="label-text-alt link link-hover mt-2  text-[#26949a] font-bold">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-accent text-lg">Login</button>
                    </div>
                    <div className="divider divider-neutral">OR</div>
                    <div className="*:w-full space-y-2">
                        <button className="btn btn-outline text-[#22177A]"><span className='text-xl'><FcGoogle /></span> Continue with Google</button>
                    </div>

                    <p className='mt-4 text-center'> Don't Have an Account?
                        <Link to="/register" className='text-[#26949a] ml-3 font-bold'>Sign Up</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Login;