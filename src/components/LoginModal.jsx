import React from 'react';
import AuthForm from './ui/AuthForm';

const LoginModal = ({ toggleModal }) => {

    return (
        <>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box card rounded-none bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
                    </form>
                    <form method="card-body">
                        <h1 className='text-center text-3xl text-black font-extrabold my-4'>Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter Your Password" className="input input-bordered text-black" required />
                            <label className="label my-4">
                                <div className='flex items-center gap-2 text-[#FF6A1A] text-sm'>
                                    <input type="checkbox" className="checkbox" />
                                    <p> Remember me</p>
                                </div>
                                <a href="#" className="label-text-alt link link-hover underline">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <button className="btn bg-[#FF6A1A] text-white text-lg">Login</button>
                        </div>
                    </form>
                    <AuthForm />
                    <div className='flex justify-center items-center gap-2 text-black font-bold mt-4'>
                        <p className='border-[1px] w-full'></p>
                        <span>Or</span>
                        <p className='border-[1px] w-full'></p>
                    </div>
                    <p className='font-bold text-center text-black my-4'>Do not have an account? <button className='text-[#FF6A1A]' onClick={toggleModal}>Sign up</button></p>
                </div>
            </dialog>
        </>
    );
};

export default LoginModal;