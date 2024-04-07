import WorkCarousel from "../ui/WorkCarousel";

const Work = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen gap-4 py-4 work">
      <h2 className="text-center min-[290px]:text-7xl md:text-[12rem]">Work</h2>
      <div className="container">
        <div className="work-boxs">
          <WorkCarousel />
        </div>
      </div>
    </section>
  );
};

export default Work;
