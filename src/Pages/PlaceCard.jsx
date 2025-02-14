import { ImLocation } from "react-icons/im";
import React from "react";

const PlaceCard = ({ img, title, description, location, price, type }) => {
  return (
    <>
      <div className="shadow-lg transition-all duration-500 hover:shadow-2xl cursor-pointer">
        <div className=" overflow-hidden">
          <img
            src={img}
            alt={title}
            className="mx-auto h-[220px] w-full object-cover  transition-all duration-500 hover:skew-x-2 hover:scale-110"
          />
        </div>

        <div className="p-4">
          <h1 className="font-bold">{title}</h1>
          <div className="flex items-center gap-2">
            <ImLocation />
            <h2>{location}</h2>
          </div>{" "}
          <p className="line-clamp-1">{description}</p>
          <div className="flex justify-between items-center border-t-2 y-3 mt-3">
            <div className="opacity-50">
              <p>{type}</p>
            </div>
            <div className=" sm:text-2xl text-xl  font-bold">{price}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceCard;
