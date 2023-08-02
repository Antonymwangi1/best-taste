import React from "react";
import { FaStar } from "react-icons/fa";

const DefaultRating = ({ rating }) => {
  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <>
          <FaStar
            key={index}
            className="star"
            color={index < rating ? "#FF2F30" : "#e4e5e9"}
            size={20}
          />
        </>
      ))}
    </div>
  );
};

export default DefaultRating;