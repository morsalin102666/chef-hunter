import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const { loginAccount, signinGoogle, signinGithub, loading } = useContext(AuthContext)
    const [error, setError] = useState('')
    const location = useLocation()
    const navigete = useNavigate()

    if (loading) {
        return <div className="text-center py-[250px]"> <p className="text-[25px] font-bold">Loading.....</p> <progress className="progress w-56"></progress></div>
    }



    let from = location.state?.from?.pathname || "/";

    // =================== sign in with email and password ==================
    const loginPage = (event) => {
        event.preventDefault()
        const frome = event.target;
        const email = frome.email.value;
        const password = frome.password.value;

        setError('')

        if (password.length < 6) {
            setError('please mustbe 6 carector password')
        }

        loginAccount(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                navigete(from, { replace: true })
                toast('success your login')
                frome.reset()
            })
            .catch(errro => { setError(errro.message) })
    }

    // =================== sign in with googel ==================
    const googleLogin = () => {
        signinGithub()
            .then(result => {
                const user = result.user
                console.log(user)
                navigete(from, { replace: true })
                toast('success your login')
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    // =================== sign in with github ==================
    const githubLogin = () => {
        signinGoogle()
            .then(result => {
                const user = result.user
                console.log(user)
                navigete(from, { replace: true })
                toast('success your login')
            })
            .catch(error => {
                console.log(error.message)
            })
    }



    return (
        <div>
            <div className="hero bg-base-200">
                <div className="py-20">
                    <div className="card w-[370px] lg:w-[700px] shadow-2xl bg-base-100">
                        <h1 className="text-center pt-8 text-3xl font-bold">Login Form</h1>
                        <form onSubmit={loginPage} className="card-body">
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <p className="mt-5 ml-3">{error}</p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className=" mt-5">
                                <button onClick={googleLogin} className="w-[100%] rounded btn btn-outline hover:bg-primary mb-3"><FaGoogle className="mr-5 text-[25px]"></FaGoogle> Sign in with Google</button>
                                <button onClick={githubLogin} className="w-[100%] rounded btn btn-outline hover:bg-primary"><FaGithub className="mr-5 text-[25px]"></FaGithub> Sign in with Github</button>
                            </div>
                            <Link className="mt-5 text-center hover:underline" to={'/signUp'}><p >New user to create a account <span className="font-bold text-blue-900">Sign up</span></p></Link>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;