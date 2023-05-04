import { useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Resipe = (props) => {

    const [desible, setDesible] = useState(false)
    const { recipeName, recipeImg, discriptin, Like } = props.resipe

    const hendelClick = () => {
        setDesible(true);
        toast('success you favorite')
    }


    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={recipeImg} alt="Shoes" className="w-[350px] h-[200px] rounded-md" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-[20px] font-bold">{recipeName}</h2>
                    <p>{discriptin}</p>
                    <div className="card-actions flex mt-3">
                        <p className="btn btn-primary"><FaRegThumbsUp className="inline mr-2"></FaRegThumbsUp>{Like}</p>
                        {/* <button onClick={hendelClick} className={desible ? "btn btn-disabled" : 'btn btn-primary'}>favorite</button> */}
                        <button onClick={hendelClick} disabled={desible} className="btn btn-primary">favorite</button>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Resipe;