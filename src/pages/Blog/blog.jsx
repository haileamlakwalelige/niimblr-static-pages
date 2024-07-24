import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BCard from "../../components/Blog/Card";


const ITEMS_PER_PAGE = 4;

export default function Blog() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://192.168.100.40:8000/api/v1/blogs")
      .then((response) => {
        // Correctly access the data array from the response
        setData(response.data.data); // Assuming the API returns { data: [...] }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  console.log("data", data);


  // Check if data is loaded before trying to map over it
  if (!data) return <div>Loading...</div>;

  console.log("data", data);

  const [currentPage, setCurrentPage] = useState(1);
  // Initialize useHistory for navigation

  const indexOfLastBlog = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstBlog = indexOfLastBlog - ITEMS_PER_PAGE;
  // const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <p className="items-center justify-center hidden z-10 lg:flex text-[3.5rem] no-scrollbar font-bold">
        The Niimblr Corner
      </p>
      <p className="mx-9 lg:hidden text-[3.5rem] font-bold">
        The Niimblr <span className="mx-20">Corner</span>
      </p>
      <p className="items-center text-3xl font-light justify-center flex">
        - Insights for Digital Creators -
      </p>
      <div className="lg:mx-[4rem]">
        <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:mx-[3rem]">
          {data.map(({ blog }) => (
            <BCard
              key={blog.id}
             blog={blog}
              onReadMore={() => handleReadMore(blog.id)}
              readMore={<Link to={`/blog/${blog.id}`}>Read More</Link>}
            />
          ))}
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
