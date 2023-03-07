import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const [restaurant, setRestaurant]  = useState(null);
    const params = useParams();
    const {id} = params
    console.log(params);

    useEffect(() => {
        getRestaurantInfo()
    },[]);

    async function getRestaurantInfo() {
     const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9715987&lng=77.5945627&menuId=" + id);
     const json = await data.json();
     console.log(json);
     setRestaurant(json.data);
    }
    return (!restaurant) ? <Shimmer /> : (
        <div className="menu">
        <div>
            <h1>Restaurant id: {id}</h1>
            <h2>{restaurant.name}</h2>
            <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
            <h2>{restaurant.area}</h2>
            <h2>{restaurant.city}</h2>
            <h2>{restaurant.avgRating} stars</h2>
            <h2>{restaurant.costForTwoMsg} stars</h2>
        </div>
        <div>
            {console.log(restaurant.menu.items)}
            {console.log(Object.values(restaurant.menu.items))}
            <h1>Menu</h1>
            <ul>
                {
                    Object.values(restaurant?.menu?.items).map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
        </div>
    )
}

export default RestaurantMenu;
