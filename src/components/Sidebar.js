import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  if(!isMenuOpen) return null;

  return (
    <div className="p-5 w-48 shadow-lg ">
      <h1 className="font-bold">Subscription</h1>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li>YouTube Music</li>
      </ul>
      <h1 className="font-bold">You</h1>
      <ul>
        <li>Movies</li>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
      </ul>

      <h1 className="font-bold">Explore </h1>
      <ul>
        <li>Trending</li>
        <li>Music</li>
        <li>shopping</li>
        <li>Gaming</li>
      </ul>
    </div>
  );
};

export default Sidebar;
