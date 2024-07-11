"use client";
import BCard from "../../components/Blog/Card";
import { useState } from "react";

export const blogs = [
  {
    title:
      "Creating an Effective Content Calendar to Stay on Top of Your Projects",
    feature: "PRODUCTIVITY",
    description:
      "3D scanning apps have become increasingly popular in recent years, thanks to the advancements in smartphone technology. These apps allow",
    src: "/image.jpg",
    Bdate: "December 5, 2023",
  },
  {
    title: "Time Management Techniques Every Digital Creator Should Know",
    feature: "UX",
    description:
      "On the journey where pixels transform into palpable wonders, there exists a mesmerizing process called photogrammetry, where the mundane is",
    src: "/image1.jpg",
    Bdate: "December 5, 2023",
  },
  {
    title:
      "The Power of Visual Feedback: Using Design to Improve Communication",
    feature: "PRODUCTIVITY",
    description:
      "Effective communication is more crucial than ever. Whether you’re an individual seeking to convey a message or a business aiming",
    src: "/image2.jpg",
    Bdate: "December 5, 2023",
  },
  {
    title:
      "Creating an Effective Content Calendar to Stay on Top of Your Projects",
    feature: "CREATIVITY",
    description:
      "In digital marketing and content creation, staying organized is key to success. Without a clear plan and schedule in place,",
    src: "/image3.jpg",
    Bdate: "December 5, 2023",
  },
  {
    title: "Time Management Techniques Every Digital Creator Should Know",
    description:
      "Time management is a critical skill for digital creators, who often find themselves juggling multiple tasks and projects simultaneously. In",
    src: "/image4.jpg",
    Bdate: "December 5, 2023",
  },
];

const ITEMS_PER_PAGE = 4;

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the blogs for the current page
  const indexOfLastBlog = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstBlog = indexOfLastBlog - ITEMS_PER_PAGE;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <p className="items-center justify-center hidden z-10 lg:flex text-[3.5rem] font-bold">
        The Niimblr Corner
      </p>
      <p className="mx-9 lg:hidden text-[3.5rem] font-bold">
        The Niimblr <span className="mx-20">Corner</span>
      </p>
      <p className="items-center text-3xl font-light justify-center flex">
        - Insights for Digital Creators -
      </p>
      <div className="mx-[4rem]">
        <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-3 mx-[3rem]">
          {currentBlogs.map(
            ({ title, feature, description, src, Bdate }, index) => (
              <BCard
                key={`${title}-${index}`} // Use title and index as key to ensure uniqueness
                description={description}
                title={title}
                feature={feature}
                curr={src}
                Bdate={Bdate}
              />
            )
          )}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === index + 1
                ? "bg-[#143fce] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
