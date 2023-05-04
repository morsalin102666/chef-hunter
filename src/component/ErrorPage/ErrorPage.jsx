import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-18.png" className="lg:w-[100%] lg:h-[100vh] absolute" alt="" />
            <Link to={'/'} className="btn btn-primary px-10 relative mt-[200px] lg:mt-[555px] ml-[100px] lg:ml-[830px]">Go to home</Link>
        </div>
    );
};

export default ErrorPage;