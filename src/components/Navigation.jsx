import React from "react";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  console.log(props);
  const { textDecoration, padding } = props.navProps;
  console.log(textDecoration);
  return (
    <div>
      <Link
        to="/my_profile"
        style={{
          textDecoration,
          color: props.thema ? "blue" : "tomato",
          padding,
        }}
      >
        My profile
      </Link>
      <Link
        to="/my_pet"
        style={{
          textDecoration,
          color: props.thema ? "blue" : "tomato",
          padding,
        }}
      >
        My pet
      </Link>
      <Link
        to="/my_favorite_movie"
        style={{
          textDecoration,
          color: props.thema ? "blue" : "tomato",
          padding,
        }}
      >
        My favorite movie
      </Link>
      <Link
        to="/current_time"
        style={{
          textDecoration,
          color: props.thema ? "blue" : "tomato",
          padding,
        }}
      >
        Current time
      </Link>
    </div>
  );
};

export default Navigation;
