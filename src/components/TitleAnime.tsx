import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TitleAnime = () => {
  useGSAP(() => {
    gsap.to(".title-1", {
      x: 300,
      ease: "power1.in",
      scrollTrigger: {
        trigger: ".title-anime",
        start: "top 50%",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(".title-2", {
      x: -300,
      ease: "power1.in",
      scrollTrigger: {
        trigger: ".title-anime",
        start: "top 50%",
        end: "bottom top",
        scrub: true,
      },
    });
  });
  return (
    <section className="overflow-hidden title-anime">
      <h2 className="title-1 xs:text-7xl md:text-[15rem] text-transparent bg-gradient-to-r from-[#8e2de2] via-[#851de0] to-[#4a00e0] bg-clip-text">
        Content
      </h2>
      <h2 className="title-2 xs:text-7xl md:text-[15rem] text-end text-transparent bg-gradient-to-l from-[#8e2de2] via-[#851de0] to-[#4a00e0] bg-clip-text">
        Creator
      </h2>
    </section>
  );
};

export default TitleAnime;
