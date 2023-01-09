import React from "react";
import  ReactDOM  from "react-dom/client";


/**
     Header
        - Logo(Title)
        - Nav Items(Right Side)
        - Cart
     Body 
        - Search bar
        - RestrauntList
          - RestaurantCard (many cards)
              - Image
              - Name
              - Rating
              - Cusines
     Footer
      - links
      - Copyright
    
    */


// What is JSX
const Title = () => (
    <h1 id="title" key="h2">
      Namaste React
   </h1>
   );

const HeaderComponent = () => {
  return (
    <div>
      <Title />
      <h2>Namaste React functional component</h2>
      <h2>This is a h2 tag</h2>
    </div>
  );
};


console.log(container);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);


