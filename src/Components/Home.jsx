import React from "react";
import NatureVideo from "../assets/video/main.mp4";
import PalceRouter from "../Components/PlaceRoute";
import Hero from "../Pages/Hero";
import Banner from "./Banner";
import banner from "../assets/cover-women.jpg";
import banner2 from "../assets/travel-cover2.jpg";
import Service from "./Service";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <section section className="overflow-hidden">
      <div className="h-[700px] w-full  relative  mt-20">
          <div>
            <video
              loop
              muted
              autoPlay
              className="absolute z-[-1] top-0 right-0 h-[700px] w-full object-cover rounded-b-md"
            >
              <source src={NatureVideo} />
            </video>

          <Hero />
        </div>
      </div>
      <main>
        <PalceRouter />
        <Banner img={banner} />
        <Service />
        <Banner img={banner2} />
        <Testimonial />
      </main>
    </section>
  );
};

export default Home;
