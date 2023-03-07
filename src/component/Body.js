import React, { useState, useEffect } from 'react';
import ResturantCard from "./ResturantCard";
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

const Body = () => {
    const[allRestaurants, setAllRestaurants] = useState([]);
    const[filterRestaurants, setFilterRestaurants] = useState([]);
    const[searchText, setSearchText] = useState("");

   useEffect(() => {
      getRestaurants();
    },[]);

    async function getRestaurants() {
      // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING")
      const json = await data.json();
      console.log(json);
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

   function filterData(searchText, restaurants) {
    const data = restaurants.filter((restaurant) => restaurant.data.name.toLowerCase().includes(searchText.toLowerCase()))
    return data;
   }


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
            return <Link to={"/restaurant/"+restaurant.data.id}  key={restaurant.data.id}>
              <ResturantCard {...restaurant.data}/>
            </Link>
          }))
        }
      </div>
        </React.Fragment>
      
      
    )
  }

  export default Body;