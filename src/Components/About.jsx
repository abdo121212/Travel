import React from "react";

const About = () => {
  return (
    <div>
      <div className=" pt-28">
        <div className="container lg:px-10 mx-auto max-sm:px-2">
          <h1 className="my-8 border-l-8 border-primary/50 font-bold text-3xl py-2 pl-2">
            About Us
          </h1>

          <div className="space-y-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              ab facilis dicta dolores est quisquam qui doloribus necessitatibus
              molestias esse saepe sit, deserunt numquam possimus non. Repellat
              ab recusandae sint ad, et explicabo saepe. Corporis ratione
              debitis quibusdam vitae, praesentium adipisci eius veniam earum
              dolorum sint totam omnis cupiditate tenetur eveniet aliquam. Quam
              perferendis, ratione consectetur itaque at quaerat ipsam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              ab facilis dicta dolores est quisquam qui doloribus necessitatibus
              molestias esse saepe sit, deserunt numquam possimus non. Repellat
              ab recusandae sint ad, et explicabo saepe. Corporis ratione
              debitis quibusdam vitae, praesentium adipisci eius veniam earum
              dolorum sint totam omnis cupiditate tenetur eveniet aliquam. Quam
              perferendis, ratione consectetur itaque at quaerat ipsam?
            </p>
          </div>

          <div className="max-w-[1000px] mx-auto">
            <h1 className="my-8 border-l-8 border-primary/50 font-bold text-3xl py-2 pl-2">
              Location to visit
            </h1>

            <div className="rounded-xl ">
              <iframe
                title="egypt"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15719.259986137526!2d30.848578784517148!3d29.311358242259782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1459792fa8bf0013%3A0xa698b3d528236f63!2z2KfZhNmB2YrZiNmF2Iwg2YLYs9mFINin2YTZgdmK2YjZhdiMINij2YjZhCDYp9mE2YHZitmI2YXYjCDZhdit2KfZgdi42Kkg2KfZhNmB2YrZiNmF!5e0!3m2!1sar!2seg!4v1739421219060!5m2!1sar!2seg"
                width="100%"
                height="360"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                style={{ borderRadius: "20px" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
