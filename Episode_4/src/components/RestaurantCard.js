import { RES_LOGO } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        name , cuisines , areaName , costForTwo , avgRating , cloudinaryImageId
    } = resData?.info;

    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" 
            alt="res-logo"
            src= { RES_LOGO+ cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{areaName}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} Stars</h4>

        </div>
    )
}

export default RestaurantCard;