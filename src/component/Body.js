import React, { useState, useEffect } from 'react';
import { resturantList } from "../Constants";
import ResturantCard from "./ResturantCard";
import Shimmer from './Shimmer';

const Body = () => {
    const[allRestaurants, setAllRestaurants] = useState([]);
    const[filterRestaurants, setFilterRestaurants] = useState([]);
    const[searchText, setSearchText] = useState("");

   useEffect(() => {
      getRestaurants();
    },[]);

    async function getRestaurants() {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json);
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

   function filterData(searchText, restaurants) {
    const data = restaurants.filter((restaurant) => restaurant.data.name.toLowerCase().includes(searchText.toLowerCase()))
    return data;
   }

   console.log("render");

   if(!allRestaurants) return null;
   if(!filterRestaurants?.length === 0) return <h1>No resturant matches your filter</h1> 

    
    return (allRestaurants.length === 0 ) ? <Shimmer /> : (
        <React.Fragment>
            <div className="searchContainer">
                <input type="text" className="search" placeholder="search" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                <button className="search-btn" onClick={() => {
                  const data = filterData(searchText, allRestaurants);
                  setFilterRestaurants(data);
                }}>Search</button>
            </div>
            <div className="restaurant-list">
        {
          
          filterRestaurants.map((restaurant => {
            return <ResturantCard {...restaurant.data} key={restaurant.data.id}/>
          }))
        }
      </div>
        </React.Fragment>
      
      
    )
  }

  export default Body;