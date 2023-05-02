import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="py-20">
                    <div className="card w-[370px] lg:w-[700px] shadow-2xl bg-base-100">
                        <h1 className="text-center pt-8 text-3xl font-bold">Sign Up Form</h1>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User name</span>
                                </label>
                                <input type="text" required name="userName" placeholder="email" className="input input-bordered" />
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
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                            <Link className="mt-5 text-center hover:underline" to={'/Login'}><p >Alrady have a account to <span className="font-bold text-blue-900">Login</span></p></Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;