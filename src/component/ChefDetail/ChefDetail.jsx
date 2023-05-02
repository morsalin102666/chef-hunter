import { FaRegThumbsUp } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Resipe from "../Resipe/Resipe";

const ChefDetail = () => {

    const chef = useLoaderData()
    const { name, image, experience, recipeNumber, Likes, chefAbout } = chef

    return (
        <div className="container mx-auto my-10">
            <div className="card card-side bg-base-200 shadow-xl">
                <img src={image} alt="Movie" className="w-[500px] rounded-md" />
                <div className="card-body">
                    <h2 className="card-title text-[30px] font-bold mb-3">{name}</h2>
                    <p className="text-[17px]">{chefAbout}</p>
                    <div className="flex ml-3 mt-5 font-bold">
                        <p className="btn btn-primary mr-3"><FaRegThumbsUp className="inline mr-2"></FaRegThumbsUp>{Likes}</p>
                        <p className="btn btn-primary mr-3">Recip Number : {recipeNumber}</p>
                        <p className="btn btn-primary ">Experience : <span>{experience}</span></p>
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-4 mt-20 gap-10">
                {
                    chef.Recipes.map(r => <Resipe
                        key = {r.id}
                        resipe = {r}
                    ></Resipe>)
                }
            </div>
        </div>
    );
};

export default ChefDetail;