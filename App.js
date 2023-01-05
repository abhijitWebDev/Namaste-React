import React from "react";
import  ReactDOM  from "react-dom/client";
// const heading = document.createElement("h1");
// heading.innerHTML="Namaste Javascript";
// const root = document.getElementById("root");
// root.appendChild(heading);

const Heading1 = React.createElement(
  'h1',
  {
    key: 'Heading1',
  },
  'Heading1'
);
const Heading2 = React.createElement(
  'h1',
  {
    key: 'Heading2',
  },
  'Heading2'
);

const container = React.createElement("div", {id:"container"},[Heading1, Heading2] );


console.log(container);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);


