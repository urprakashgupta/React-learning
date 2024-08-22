import { useEffect } from "react";
const RestaurantMenu = () => {
    useEffect(() => {
        fetchMenue();
    },[]);

    const fetchMenue = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667"
        );
        const json = await data.json();
        console.log(json);

    }
    return (
        <div className="menu">
            <h1>Name of Restaurant</h1>
            <h1>Menu</h1>
            <ul>
                <li>Birayani</li>
                <li>tanduri</li>
                <li>chicken kwab</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;