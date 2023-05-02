import { useEffect, useState } from "react";
import Header from "../Header/Header";
import ShowAllChef from "../ShowAllChef/ShowAllChef";

const Home = () => {
    const [chefAll, setChefAll] = useState([])

    useEffect( () => {
        fetch(`http://localhost:5000/allChef`)
        .then(res => res.json())
        .then(data => setChefAll(data))
    }, [])

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
        </div>
    );
};

export default Home;