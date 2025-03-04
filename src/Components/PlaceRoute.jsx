import React from "react";

import Img1 from "../assets/places/boat.jpg";
import Img2 from "../assets/places/tajmahal.jpg";
import Img3 from "../assets/places/water.jpg";
import Img4 from "../assets/places/place4.jpg";
import Img5 from "../assets/places/place5.jpg";
import Img6 from "../assets/places/place6.jpg";
import PlaceCard from "../Pages/PlaceCard";

const PlacesData = [
  {
    img: Img1,
    title: "Boat",
    location: "USA",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Underwater",
    location: "US",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6200,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Sydney",
    location: "USA",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Los Angeles",
    location: "United states",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Los Vegas",
    location: "California",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6200,
    type: "Cultural Relax",
  },
];

const PlaceRoute = () => {
  return (
    <>
      <div className="bg-gray-100 pt-28">
        <div className="container lg:px-10 mx-auto max-sm:px-2">
          <h1
            data-aos="fade-left"
            data-aos-delay="400"
            className="my-8 border-l-8 border-primary/50 font-bold text-3xl py-2 pl-2"
          >
            Best Place To Visit
          </h1>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {PlacesData.map((item, index) => (
              <PlaceCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceRoute;
