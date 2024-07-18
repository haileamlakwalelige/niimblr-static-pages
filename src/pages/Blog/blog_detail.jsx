import { useParams, useNavigate } from "react-router-dom";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

export default function BlogDetail() {
  let { id } = useParams();
  const navigate = useNavigate();

  // Retrieve blog post details based on id (you can fetch from a backend or use static data)
  const blogs = [
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
        "Time management is a critical skill for digital creators, who often find themselves juggling multiple tasks and projects simultaneously.In this digital age, where distractions abound, mastering time management is essential for maintaining productivity and achieving success.",

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

  // Find the blog post that matches the id
  const blogIndex = blogs.findIndex((blog) => blog.id === parseInt(id));
  const blog = blogs[blogIndex];

  // If blog is not found, display a message
  if (!blog) {
    return <div>Blog post not found</div>;
  }
  const handleNext = () => {
    if (blogIndex < blogs.length - 1) {
      navigate(`/blog/${blogs[blogIndex + 1].id}`);
    }
  };

  const handlePrevious = () => {
    if (blogIndex > 0) {
      navigate(`/blog/${blogs[blogIndex - 1].id}`);
    }
  };

  return (
    <div className="bg-[#121212] py-2 lg:px-40 px-5 lg:mx-[5rem] mx-2">
      <div className="flex justify-between">
        <div
          className="flex items-center cursor-pointer"
          onClick={handlePrevious}
        >
          <GrFormPrevious size={50} className="font-bold" />
          <p>PREVIOUS</p>
        </div>
        <div className="flex items-center cursor-pointer" onClick={handleNext}>
          <p>NEXT</p>
          <GrFormNext size={50} className="font-bold" />
        </div>
      </div>
      <p className="flex justify-center items-center lg:text-[3rem] text-[2.5rem] font-semibold lg:mx-[13rem] ml-10 pt-0 leading-tight">
        {blog.title}
      </p>
      {/* <p className="pt-[1rem] text-xl my-10  mx-5">{blog.description}</p> */}

      <div dangerouslySetInnerHTML={{__html: blog.description}} ></div>
      <div className="flex justify-center items-center mb-4">
        <img src={blog.src} className="max-w-full h-auto" alt={blog.title} />
      </div>
      {blog.src == "/image1.jpg" && (
        <div className="pt-[1rem] text-xl my-10  mx-5">
          <p className="mb-10 ">This blog post explores: </p>
          <li className="mb-3 mx-10">
            Why time management is important for digital creators
          </li>
          <li className="mb-10 mx-10">
            Examples of proven time management techniques and strategies{" "}
          </li>
          <p className="text-[2rem]">
            Conclusion
            <br />
            <br />
            <span className="text-xl">
              Time management is a cornerstone of success for digital creators.
              By understanding the importance of time management, implementing
              effective techniques, and applying practical strategies, digital
              creators can enhance their productivity, reduce stress, and
              achieve their creative goals. Incorporating these practices into
              their daily routines can lead to a more fulfilling and productive
              creative career.
            </span>
          </p>
        </div>
      )}
      {blog.src == "/image.jpg" && <div></div>}
      <p>Date: {blog.Bdate}</p>
      {/* Add more details as needed */}
    </div>
  );
}
