import { useParams } from "react-router-dom";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

import "../../styles/book.css";

const BookPage = () => {
  const { id } = useParams<{ id: string }>();

  // Simulate fetching book data based on bookId
  const book = {
    id: id,
    image: `/book${id}.png`,
    name: `Product ${id}`,
    description: `This is a description for Product ${id}.`,
  };
  return (
    <>
      <Header />
      <section className="flex items-center justify-around min-h-screen book-page">
        <div className="left">
          <img src={book.image} alt="book" />
        </div>
        <div className="right">
          <h2 className="text-8xl">{book.name}</h2>
          <p>{book.description}</p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BookPage;
