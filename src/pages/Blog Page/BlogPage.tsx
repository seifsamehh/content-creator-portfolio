import { useParams } from "react-router-dom";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

const BlogPage = () => {
  const { id } = useParams<{ id: string }>();

  // Simulate fetching blog data based on blogId
  const blog = {
    id: id,
    image: `/book1.png`,
    title: `blog ${id}`,
    description: `A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.`,
    list: ["Item 1", "Item 2", "Item 3"],
  };
  return (
    <>
      <Header />
      <section className="flex flex-col items-center justify-center min-h-screen blog-page">
        <div className="top">
          <img src={blog.image} alt="blog" />
        </div>
        <div className="max-w-5xl bottom min-[290px]:px-8 md:px-0 flex flex-col gap-8">
          <h2 className="text-8xl">{blog.title}</h2>
          <p>{blog.description}</p>
          <ul>
            {blog.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogPage;
