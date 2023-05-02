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