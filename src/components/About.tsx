import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap.to(".about p", {
      scrollTrigger: {
        trigger: ".about",
        start: "top top",
        end: "bottom top",
      },
      color: "rgb(15 23 42)", // Change the color to whatever you want
    });
  });
  return (
    <section className="flex items-center justify-between min-h-screen xs:flex-wrap md:flex-nowrap xs:px-4 md:px-0 about">
      <h2 className="about-title xs:text-8xl md:text-9xl text-transparent bg-gradient-to-r from-[#8e2de2] via-[#851de0] to-[#4a00e0] bg-clip-text">
        About Me
      </h2>
      <p className="max-w-5xl xs:text-3xl md:text-5xl text-slate-400 text-balance">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum officiis,
        tenetur similique facere commodi ullam hic cumque a mollitia perferendis
        tempora quibusdam ipsum praesentium natus. Temporibus amet dolor
        voluptatum necessitatibus!
      </p>
    </section>
  );
};

export default About;
