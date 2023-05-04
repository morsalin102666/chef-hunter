import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const [error, setError] = useState('')
    const { createNewAccount, updateUserProfile } = useContext(AuthContext)

    const signUpPage = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const userName = form.userName.value;
        const photoUrl = form.photoUrl.value;
        console.log(userName, photoUrl)

        setError('')

        if (password.length < 6) {
            setError('please mustbe 6 carector password')
        }

        const handleUpdateUserProfile = (name, photoURL) => {
            const profile = {
                displayName: name,
                photoURL: photoURL
            }
            updateUserProfile(profile)
                .then(result => {
                    console.log(result.user);
                })
                .catch(err => {
                    console.log(err);

                })
        }

        createNewAccount(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                handleUpdateUserProfile(userName, photoUrl)
                form.reset()
                toast('success your sign up')
            })
            .catch(error => { console.log(error.message) })
    }

    return (
        <div>
            <div className="hero bg-base-200">
                <div className="py-20">
                    <div className="card w-[370px] lg:w-[700px] shadow-2xl bg-base-100">
                        <h1 className="text-center pt-8 text-3xl font-bold">Sign Up Form</h1>
                        <form onSubmit={signUpPage} className="card-body">
                            <div className="flex justify-between">
                                <div className="form-control w-[48%]">
                                    <label className="label">
                                        <span className="label-text">User name</span>
                                    </label>
                                    <input type="text" required name="userName" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control w-[47%]">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="url" required name="photoUrl" placeholder="Photo Url" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" required name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" required name="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <p className="mt-5 ml-3">{error}</p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                            <Link className="mt-5 text-center hover:underline" to={'/Login'}><p >Alrady have a account to <span className="font-bold text-blue-900">Login</span></p></Link>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SignUp;