/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import ShowAllChef from "../ShowAllChef/ShowAllChef";
import FootBrand from "../FoodBrand/FootBrand";
import FoodSection from "../FoodSection/FoodSection";

const Home = () => {

    const [chefAll, setChefAll] = useState([])
    const [loading, setLoading] = useState(true)

    


    useEffect(() => {
        fetch(`https://chef-recipe-hunting-sarver-morsalin102666.vercel.app/allChef`)
            .then(res => res.json())
            .then(data => {
                setChefAll(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <div className="text-center py-10"><progress className="progress w-56"></progress></div>
    }

    return (
        <div>
            <Header></Header>
            <div className="">
                <h1 className="text-center text-[35px] font-bold">Top 10 Chefs In The World</h1>
                <p className="text-center text-[20px] mb-16">Michelin Star Chef, Vikas Khanna, Recognized Among Top 10 Global Chefs</p>
                {
                    chefAll.map(chef => <ShowAllChef
                        key={chef.id}
                        chef={chef}
                    ></ShowAllChef>)
                }
            </div>
            <FootBrand></FootBrand>
            <FoodSection></FoodSection>
        </div>
    );
};

export default Home;