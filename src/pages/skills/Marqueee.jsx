import React from "react";
import Marquee from "react-fast-marquee";

const Marqueee = ({images}) => 
{
  console.log(images)
  return(
  <Marquee>
    {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          style={{ margin: "0 10px" }}
          className="p-1 bg-white rounded-full"
        />
      ))}
  </Marquee>)
};

export default Marqueee;