import React from "react";

const Banner = ({ img }) => {
  const bgImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <section className="">
      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        className="w-full h-[400px]"
        style={bgImage}
      ></div>
    </section>
  );
};

export default Banner;
