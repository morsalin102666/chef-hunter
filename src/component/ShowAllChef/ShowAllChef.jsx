import { FaRegThumbsUp } from "react-icons/fa";

const ShowAllChef = (props) => {
    const { id, name, image, experience, recipeNumber, Likes, chefAbout
} = props.chef
return (
    <div className="container mx-auto mb-10">
        {/* <h1>{id}</h1> */}
        <div className="card card-side bg-base-200 shadow-xl">
            <img src={image} alt="Movie" className="w-[500px] rounded-md" />
            <div className="card-body">
                <h2 className="card-title text-[30px] font-bold mb-3">{name}</h2>
                <p className="text-[17px]">{chefAbout}</p>
                <div className="flex ml-3 mt-5 font-bold">
                    <p><FaRegThumbsUp className="inline mr-2"></FaRegThumbsUp>{Likes}</p>
                    <p>Recip Number : {recipeNumber}</p>
                    <p>Experience : <span>{experience}</span></p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary w-full mt-5 font-bold text-lg">Show Detail</button>
                </div>
            </div>
        </div>
    </div>
);
};

export default ShowAllChef;