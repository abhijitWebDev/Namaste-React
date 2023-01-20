import React, { useState } from 'react';
import { resturantList } from "../Constants";
import ResturantCard from "./ResturantCard";

const Body = () => {
    const[restaurants, setRestaurants] = useState(resturantList);
    const[searchText, setSearchText] = useState("");

   function filterData(searchText, restaurants) {
    const data = restaurants.filter((restaurant) => restaurant.data.name.includes(searchText))
    return data;
   }

    
    return (
        <React.Fragment>
            <div className="searchContainer">
                <input type="text" className="search" placeholder="search" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                <button className="search-btn" onClick={() => {
                  const data = filterData(searchText, restaurants);
                  setRestaurants(data);
                }}>Search</button>
            </div>
            <div className="restaurant-list">
        {
          
          restaurants.map((restaurant => {
            return <ResturantCard {...restaurant.data} key={restaurant.data.id}/>
          }))
        }
      </div>
        </React.Fragment>
      
      
    )
  }

  export default Body;