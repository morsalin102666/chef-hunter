import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Active from "../Active/Active";

const Navebar = () => {

    const { user, logOut } = useContext(AuthContext)
    const logOurAccount = () => {
        logOut()
            .then(result => { console.log(result) })
            .catch(error => console.log(error))
    }
    const menuItem = <>
        <li><Active to={'/'}>Home</Active></li>
        <li><Active to={'about'}>About</Active></li>
        <li><Active to={'blog'}>Blog</Active></li>
        <li><Active to={'signUp'}>Sign Up</Active></li>
        <li><Active to={'login'}>Login</Active></li>
    </>

    return (
        <div className="bg-slate-800">
            <div className="navbar bg-slate-800 container mx-auto py-4 text-[20px] text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2  bg-slate-800 shado rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl font-bold">Chef Exprieince</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        <div className="dropdown dropdown-end">
                            {
                                user && <div><label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user ? user.photoURL : ''} />
                                    </div>
                                </label>
                                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-[300px] bg-slate-800 text-[25px]">
                                        {
                                            user && <li><p className="text-white">{user ? user.displayName : ''}</p></li>
                                        }
                                        {
                                            user && <li><p className="text-white">{user ? user.email : ''}</p></li>
                                        }
                                        {
                                            user && <li onClick={logOurAccount}><p>Logout</p></li>
                                        }

                                    </ul></div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navebar;