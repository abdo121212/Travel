import React from "react";
import { Link } from "react-router-dom";

const BlogsCard = ({
  image,
  title,
  location,
  date,
  description,
  type,
  price,
  author,
  id,
}) => {
  return (
    <Link
      to={`/blogs/${id}`}
      state={{
        image,
        title,
        location,
        date,
        description,
        type,
        price,
        author,
        id,
      }}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <div className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:text-white cursor-pointer">
        <div className="overflow-hidden space-y-3">
          <img
            src={image}
            alt="Blogs"
            className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
          />
          <div className="flex items-center justify-between mt-5 opacity-50">
            <p>{date}</p>
            <p>{author}</p>
          </div>

          <h3 className=" font-bold">{title}</h3>
          <p className="line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogsCard;
