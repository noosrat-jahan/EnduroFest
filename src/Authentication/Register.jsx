import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { toast, ToastContainer } from 'react-toastify';


import login from "../assets/authentication-74.png"

const Register = () => {

    const { createNewUser, setUser, googleSignIn } = useContext(AuthContext)

    const [showPassword, setShowPassword] = useState(false)
    const [errormessage, setErrormessage] = useState("")

    const navigate = useNavigate()
    const location = useLocation()

    const handleRegister = e => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value
        const NewUser = { name, email, photo, password }
        console.log(NewUser);


        if(password.length < 6){
            setErrormessage("⚠️ Password Should be at least 6 character long")
            return
        }

        const passwordRegEx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if(!passwordRegEx.test(password)){
            setErrormessage("⚠️ password should contain at least one uppercase letter, one lowercase letter, one digit and one special character.")
            return
        }

        createNewUser(email, password)
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
        <div className='px-3 flex flex-col-reverse lg:flex-row justify-center items-start gap-3 w-11/12 mx-auto'>
            <img src={login} alt="" className='w-1/3 lg:mt-14' />
            <div className="card bg-base-100 w-full px-10 py-6 my-10 font-poppins mx-auto max-w-md shrink-0 shadow-xl">
                <h1 className='text-3xl font-semibold text-center text-[#68b5fd]'>Sign Up</h1>
                {
                    errormessage && <p className='text-red-600 my-4 text-center'>{errormessage}</p>
                }
                <form onSubmit={handleRegister} className="card-body p-0">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input type="text" name='photo' placeholder="Your Photo" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name='password'
                            placeholder="Password" className="input input-bordered " required />
                        <span onClick={() => { setShowPassword(!showPassword) }} className='absolute right-4 top-[52px]'>
                            {
                                showPassword ? <IoMdEye /> : <IoMdEyeOff />
                            }
                        </span>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#68b5fd] text-lg">Register</button>
                    </div>
                    <div className="divider divider-neutral">OR</div>
                    <div className="*:w-full flex justify-center space-y-2">
                        <button onClick={handleGoogleLogin} className="btn btn-outline text-[#22177A] flex  items-center md:text-lg text-xs"><span className='md:text-xl text-sm'><FcGoogle /></span> Continue with Google</button>
                    </div>

                    <p className='mt-4 text-center'> Already Have an Account?
                        <Link to="/login" className='text-[#68b5fd] ml-3 font-bold'>Login</Link> </p>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;