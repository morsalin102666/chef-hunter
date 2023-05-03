import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {

    const {loginAccount} = useContext(AuthContext)

    const loginPage = (event) => {
        event.preventDefault()
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;

        loginAccount(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch(errro => {console.log(errro.message)})
    }
    
    const googleLogin = () => {
        console.log('amr')
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
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className=" mt-5">
                                <button onClick={googleLogin} className="w-[100%] rounded btn btn-outline hover:bg-primary mb-3"><FaGoogle className="mr-5 text-[25px]"></FaGoogle> Sign in with Google</button>
                                <button className="w-[100%] rounded btn btn-outline hover:bg-primary"><FaGithub className="mr-5 text-[25px]"></FaGithub> Sign in with Github</button>
                            </div>
                            <Link className="mt-5 text-center hover:underline" to={'/signUp'}><p >New user to create a account <span className="font-bold text-blue-900">Sign up</span></p></Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;