import { useLoaderData } from "react-router-dom";

const ChefDetail = () => {
    const chef = useLoaderData()
    console.log(chef)
    return (
        <div>
            <h1>hi chef babu</h1>
        </div>
    );
};

export default ChefDetail;