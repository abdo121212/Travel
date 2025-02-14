import React from "react";
import box from "../assets/travelbox.png";
import { MdOutlineLocalHotel } from "react-icons/md";

const Service = () => {
  return (
    <div className="bg-[#f3f4f6] py-20">
      <div className="container mx-auto">
        <div className="sm:flex md:flex-row items-center justify-between gap-5 p-4  py-10">
          <img
            data-aos="zoom-in"
            src={box}
            alt="box"
            className="max-w-[450px] h-[350px] w-full drop-shadow-[5px_5px_12px_rgba(0,0,0,.7)] mx-auto object-cover"
          />

          <div className=" space-y-1">
            <h1
              data-aos="fade-left"
              data-aos-delay="200"
              className="font-bold text-3xl sm:text-4xl"
            >
              Explore all corners of the world with us
            </h1>
            <p
              data-aos="fade-right"
              data-aos-delay="400"
              className="text-gray-600 leading-8 tracking-wide "
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Veritatis doloremque in mollitia dicta deleniti molestiae itaque
              nostrum
            </p>
            <div className="space-y-4 grid grid-cols-2 ">
              <div
                data-aos="fade-left"
                data-aos-delay="600"
                className="flex items-center gap-4"
              >
                <MdOutlineLocalHotel className="w-12 h-12 text-4xl shadow-sm p-4 rounded-full bg-violet-100" />
                <p>Fight</p>
              </div>

              <div
                data-aos="fade-right"
                data-aos-delay="600"
                className="flex items-center gap-4"
              >
                <MdOutlineLocalHotel className="w-12 h-12 text-4xl shadow-sm p-4 rounded-full bg-orange-100" />
                <p>Hotel</p>
              </div>

              <div
                data-aos="fade-right"
                data-aos-delay="600"
                className="flex items-center gap-4"
              >
                <MdOutlineLocalHotel className="w-12 h-12 text-4xl shadow-sm p-4 rounded-full bg-green-100" />
                <p>Wi-Fi</p>
              </div>

              <div
                data-aos="fade-left"
                data-aos-delay="600"
                className="flex items-center gap-4"
              >
                <MdOutlineLocalHotel className="w-12 h-12 text-4xl shadow-sm p-4 rounded-full bg-yellow-100" />
                <p>Foods</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
