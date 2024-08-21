import RestaurantCard from "./RestaurantCard"
import {useState, useEffect} from 'react';
import Shimmer from "./Shimmer";
const Body = () => {

    // we will use state variable to update the ui 

    const [listOfRestaurant , setListOfRestaurant] = useState([]);
    
    const [searchText , setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    } , []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667"
        );
        const json = await data.json();
        console.log(json);
        //optional chaining ::
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    //conditional rendering ::
    // if (listOfRestaurant.length === 0) {
    //     return <Shimmer/>
    // }


    return listOfRestaurant.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick={() => {
                        console.log(searchText);
                        const filterRestaurant = listOfRestaurant.filter((res) => {
                        res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0].info.name.toLowerCase().includes(searchText.toLowerCase());
                        });
                        setListOfRestaurant(filterRestaurant);
                    }}>Search</button>
                </div>
                <button className = "filter-btn"
                onClick = {() => {
                    const filterList = listOfRestaurant.filter((res) => res.info.avgRating>4);
                    setListOfRestaurant(filterList);
                }} 
                >
                    Top Rated Resturant</button>
                </div>
            <div className="res-container">
                
             {
                listOfRestaurant.map(restaurant => <RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>)
             }
            
            </div>
        </div>
    )
}

export default Body;