import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    gsap.to(".hero", {
      scrollTrigger: {
        trigger: ".top h1",
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        scrub: true,
      },
    });
  });
  return (
    <section className="min-h-screen hero">
      <div className="top h-[50vh] relative">
        <h1 className="absolute inline-block font-bold text-transparent top-10 left-10 xs:text-5xl md:text-9xl bg-gradient-to-r from-[#8e2de2] via-[#851de0] to-[#4a00e0] bg-clip-text">
          I am content creator
        </h1>
        <p className="absolute bottom-10 right-10 text-7xl text-end">
          John Doe
        </p>
      </div>
      <div className="bottom">
        <img
          src="https://res.cloudinary.com/dp9iqarvw/image/upload/v1712331403/content-creator-bg_qkqrdz.webp"
          className="object-cover w-full xs:h-[50vh] md:h-full"
          alt="test"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;
