import { Link } from "react-router-dom";

export default function BCard({ blog, onReadMore}) {
  return (
    <div className="card w-[22rem] rounded-2xl bg-[#212121] transition-all ml-[1rem] mr-[1rem] mb-[2rem] mt-[1rem] relative overflow-hidden">
      <figure className="relative">
        <img
          src={blog.curr}
          className="w-full h-[15rem] object-cover"
          alt="Design"
        />
        <p className="absolute top-0 right-0 bg-[#69727d] text-white px-2 py-1 rounded-bl-2xl m-2">
          {Blob.feature}
        </p>
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-xl py-4 px-6">{blog.title}!</h2>

        <div dangerouslySetInnerHTML={{__html:description}} className="line-clamp-3 text-lg py-2 px-6"></div>
        <Link to={`/blog/${id}`} className="px-6 italic text-xl text-[#4b4949]">
          READ MORE
        </Link>
        <hr className="my-2 bottom-0 flex" />
        <p className="font-semibold py-2 px-6">{blog.Bdate}</p>
      </div>
    </div>
  );
}
