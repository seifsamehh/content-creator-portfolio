import { Link } from "react-router-dom";
import { BentoGridDemo } from "./BentoGridDemo";
import { Button } from "./ui/button";

const Work = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen gap-4 py-4 work">
      <h2 className="text-center xs:text-9xl md:text-[12rem]">Work</h2>
      <div className="container">
        <div className="work-boxs">
          <BentoGridDemo />
        </div>
      </div>
      <Link to="/work">
        <Button variant="secondary" className="text-white">
          View More
        </Button>
      </Link>
    </section>
  );
};

export default Work;
