import { Link } from "react-router-dom";

const Navebar = () => {
    return (
        <div className="bg-slate-500">
            <div className="navbar bg-slate-500 container mx-auto py-4 text-[20px] text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'about'}>About</Link></li>
                            <li><Link to={'blog'}>Blog</Link></li>
                            <li><Link to={'signUp'}>Sign In</Link></li>
                            <li><Link to={'login'}>Login</Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl font-bold">Chef Exprieince</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'about'}>About</Link></li>
                        <li><Link to={'blog'}>Blog</Link></li>
                        <li><Link to={'signUp'}>Sign In</Link></li>
                        <li><Link to={'login'}>Login</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-slate-500 text-[25px]">
                                <li><p>Name</p></li>
                                <li><p>Email</p></li>
                                <li><p>Logout</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navebar;