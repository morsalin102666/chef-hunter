import { FaRegThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazy-load';

const ShowAllChef = ({ chef }) => {

    const { id, name, image, experience, recipeNumber, Likes, chefAbout } = chef

    return (
        <div className="container mx-auto mb-10">
            <div className="card lg:card-side bg-base-200 shadow-xl">
                <LazyLoad><img src={image} alt="Movie" className="w-[4000px] h-[422px] rounded-md" /></LazyLoad>
                <div className="card-body">
                    <h2 className="card-title text-[30px] font-bold mb-3">{name}</h2>
                    <p className="text-[17px]">{chefAbout}</p>
                    <div className="flex ml-3 mt-5 font-bold">
                        <p className="text-[11px] lg:text-[18px]"><FaRegThumbsUp className="inline mr-2"></FaRegThumbsUp>{Likes}</p>
                        <p className="text-[11px] lg:text-[18px]">Recip Number : {recipeNumber}</p>
                        <p className="text-[11px] lg:text-[18px]">Experience : <span>{experience}</span></p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/chefDetail/${id}`} className="btn btn-primary w-full mt-5 font-bold text-lg">View Detail</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowAllChef;