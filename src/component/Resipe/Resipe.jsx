import { useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa";


const Resipe = (props) => {

    const [desible, setDesible] = useState(false)
    const { recipeName, recipeImg, discriptin, Like } = props.resipe

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={recipeImg} alt="Shoes" className="w-[350px] h-[200px] rounded-md" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-[20px] font-bold">{recipeName}</h2>
                    <p>{discriptin}</p>
                    <div className="card-actions flex mt-3">
                        <p className="btn btn-primary"><FaRegThumbsUp className="inline mr-2"></FaRegThumbsUp>{Like}</p>
                        <button onClick={() => setDesible(!desible)} className={desible ? "btn btn-disabled" : 'btn btn-primary'}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resipe;