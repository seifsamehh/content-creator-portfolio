import "../styles/about.css";

const AboutMe = () => {
  return (
    <section className="flex items-center justify-between min-h-screen min-[290px]:flex-wrap md:flex-nowrap min-[290px]:py-8 md:py-0 overflow-hidden about">
      <div className="ml-4 min-[290px]:mb-4 md:mb-0 left">
        <h2 className="min-[290px]:text-7xl md:text-9xl">About Me</h2>
        <p className="max-w-2xl text-balance">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          magnam libero totam modi adipisci voluptates assumenda eos laborum.
          Repellendus veniam tempora, esse facere quae quia voluptatem sint
          numquam tempore hic.
        </p>
      </div>
      <div className="right"></div>
    </section>
  );
};

export default AboutMe;
