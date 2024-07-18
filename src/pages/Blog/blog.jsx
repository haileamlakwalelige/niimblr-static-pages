import { useState } from "react";
import { Link } from "react-router-dom";
import BCard from "../../components/Blog/Card";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";

export const blogs = [
  {
    id: 1,
    title:
      "Creating an Effective Content Calendar to Stay on Top of Your Projects",
    feature: "PRODUCTIVITY",
    description:
      '<p>With content creation demand booming nowadays, standing out in the competitive landscape is quite challenging for media production agencies. Media producers face significant challenges keeping up with the rapid pace of social media trends and the constant evolution of emerging technologies. However, mastering this complex environment is absolutely crucial for many brands to achieve success. Don’t you agree?</p><p>Competition has changed the definition of success for media producers–be it a film producer, ads producer, graphics producer, or anyone involved in the production of media.&nbsp;</p><p>Success now requires producing high-quality, engaging content by making use of data and feedback, fast. It’s a comprehensive process that requires building trust through professional execution and transparency.&nbsp;</p><p>As a media producer, you can overcome challenges by enhancing workflow efficiency, and staying updated with industry trends.</p><p>It’s time to transform these challenges into opportunities for growth in the ever-evolving world of digital technologies. Let’s learn about the abundance of roles that media producers handle, the challenges they face, and how a video feedback software can help them deal with whatever comes on their way to success.</p><p>&nbsp;<figure data-trix-attachment="{&quot;contentType&quot;:&quot;image&quot;,&quot;height&quot;:605,&quot;url&quot;:&quot;https://niimblr.com/wp-content/uploads/2024/06/Blog_VideoFeedback_01.png&quot;,&quot;width&quot;:1210}" data-trix-content-type="image" class="attachment attachment--preview"><img src="https://niimblr.com/wp-content/uploads/2024/06/Blog_VideoFeedback_01.png" width="1210" height="605"><figcaption class="attachment__caption"></figcaption></figure><br>&nbsp;</p><h2>Role of A Media Producer</h2><p>Media producers are professionals who are responsible for overseeing everything–from initial planning to <a href="https://www.nfi.edu/post-production/">post-production tasks</a>. While working on multiple assignments, they ensure that each project stays on schedule, within budget, and meets the creative vision.&nbsp;</p><p>They are basically the glue between project creation and project delivery. The behind-the-scenes maestros who arrange every tiny task to bring your favorite shows, videos, and digital productions to life, in the best way possible.&nbsp;</p><p>Here’s the breakdown of job duties that these creative individuals handle on a day-to-day basis.&nbsp;</p><h3>Planning and Coordination</h3><p>A media producer plans the entire project from start to finish. This involves everything from setting the budget to scheduling each day. For example, while working on a TV show, the media producers decide when and where each scene will be shot.&nbsp;</p><h3>Creative Direction&nbsp;</h3><p>Shaping the vision of the project is challenging, yet rewarding when done effectively. Media producers work with writers, directors, and designers to ensure that the final product matches the original concept. For music albums, they’ll collaborate with the artist to create the right look and feel.&nbsp;</p><h3>Managing Team&nbsp;</h3><p>Multiple teams are involved in the production of media such as camera crews, sound engineers, editors, and actors. The producers are responsible for managing various teams to ensure everyone knows their role so that everything runs smoothly within the timeline.&nbsp;</p><h3>Budget Management</h3><p>For any project, whether big or small, it’s imperative to keep track of the budget. Media producers ensure that the project doesn’t overspend. For example, if a film has a $1 million budget, the producer will allocate funds for shooting locations, special effects, and post-production chores.&nbsp;</p><h3>Problem Solving</h3><p>It might sound simple, but a media producer or a <a href="https://niimblr.com/blog/understanding-the-creator-economy/">creative professional</a> tackles more than what comes within the scope of the project. Things don’t always go as planned, and producers need to be quick on their feet to solve problems.&nbsp;</p><h3>Post-Production Supervision</h3><p>After the shooting is done, the project enters the post-production zone where various experts are involved in editing, sound mixing, and adding special effects. This is an intense stage and producers oversee all these processes to ensure desired standards are met.&nbsp;</p><h3>Marketing and Distribution</h3><p>Once the production and post-production cycle is complete, next comes marketing and distribution of content. Here, producers need to work with marketing teams to promote their digital work. They also negotiate with various media platforms to ensure the content reaches the target audience successfully.&nbsp;</p><h3>Feedback Analysis</h3><p>Above all, media producers need to collaborate with various teams to gather <a href="https://niimblr.com/blog/enhancing-customer-experience-through-tailored-interactions/">tailored feedback</a> and work comprehensively on every single detail. Feedback is important to ensure that the final product is polished. Whether you’re working on a small film or a large advertising campaign, gathering feedback from the client via a video feedback software is crucial.</p>',
    src: "/image.jpg",
    Bdate: "December 5, 2023",
  },
  {
    id: 2,
    title: "Time Management Techniques Every Digital Creator Should Know",
    feature: "UX",
    description:
      "On the journey where pixels transform into palpable wonders, there exists a mesmerizing process called photogrammetry, where the mundane is",
    src: "/image1.jpg",
    Bdate: "December 5, 2023",
  },
  {
    id: 3,
    title:
      "The Power of Visual Feedback: Using Design to Improve Communication",
    feature: "PRODUCTIVITY",
    description:
      "Effective communication is more crucial than ever.Whether you’re an individual seeking to convey a message or a business aiming to connect with your audience, the power of visual feedback using, design can play a pivotal role.",
    src: "/image2.jpg",
    Bdate: "December 5, 2023",
  },
  {
    id: 4,
    title:
      "Creating an Effective Content Calendar to Stay on Top of Your Projects",
    feature: "CREATIVITY",
    description:
      "In digital marketing and content creation, staying organized is key to success. Without a clear plan and schedule in place,",
    src: "/image3.jpg",
    Bdate: "December 5, 2023",
  },
  {
    id: 5,
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
  // Initialize useHistory for navigation

  const indexOfLastBlog = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstBlog = indexOfLastBlog - ITEMS_PER_PAGE;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

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
          {currentBlogs.map(
            ({ id, title, feature, description, src, Bdate }) => (
              <BCard
                key={id}
                id={id}
                description={description}
                title={title}
                feature={feature}
                curr={src}
                Bdate={Bdate}
                onReadMore={() => handleReadMore(id)}
                readMore={<Link to={`/blog/${id}`}>Read More</Link>}
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
