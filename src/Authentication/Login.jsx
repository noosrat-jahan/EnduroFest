import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { toast, ToastContainer } from 'react-toastify';

import login from "../assets/authentication-74.png"

const Login = () => {

    const { setUser, LoginUser, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const NewUser = { email, password }
        console.log(NewUser);

        LoginUser(email, password)
            .then((result) => {
                const user = result.user
                setUser(user)
                console.log(user);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Sign In Successful",
                    showConfirmButton: false,
                    timer: 3500
                });
                navigate(location?.state ? location.state : "/")
            })
            .catch(err => {
                console.log('Error:', err.message);
                if (err.message === "Firebase: Error (auth/invalid-credential).") {
                    toast.error("Invalid Email or Password", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,                        
                    });
                }
            })
    }

    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user
                console.log(user);
                setUser(user)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Sign Up Successful",
                    showConfirmButton: false,
                    timer: 3500
                });
                navigate(location?.state ? location.state : "/")
            })
            .catch(err => {
                console.log('Error:', err.message);
                
            })
    }
    return (
        <div className='flex flex-col-reverse lg:flex-row justify-center items-center gap-3 w-11/12 mx-auto'>
            <img src={login} alt="" className='lg:w-1/3' />
            <div className="card bg-base-100 w-full font-poppins mx-auto max-w-md py-4 px-10 my-6 shrink-0 shadow-2xl">
                <h1 className='text-2xl text-center font-semibold text-[#68b5fd]'>Sign In</h1>
                <form onSubmit={handleLogin} className="card-body gap-1 p-0">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Your Email" className="input input-bordered h-10" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Password" className="input input-bordered h-10" required />
                        <label className="label flex justify-end">
                            <a href="#" className="label-text-alt link link-hover mt-2  text-[#68b5fd] font-semibold">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-1">
                        <button className="rounded-lg bg-[#68b5fd] text-lg h-10">Login</button>
                    </div>
                    <div className="divider divider-neutral">OR</div>
                    <div className="*:w-full space-y-2">
                        <button onClick={handleGoogleLogin} className="btn btn-outline text-[#22177A]"><span className='text-lg'><FcGoogle /></span> Continue with Google</button>
                    </div>

                    <p className='mt-2 pb-1 text-center'> Don't Have an Account?
                        <Link to="/register" className='text-[#68b5fd] ml-3 font-bold'>Sign Up</Link> </p>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;