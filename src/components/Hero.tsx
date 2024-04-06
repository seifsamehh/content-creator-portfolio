import { Facebook, Instagram, Twitter } from "lucide-react";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="flex items-center justify-center min-h-screen gap-8 min-[290px]:flex-wrap-reverse md:flex-nowrap overflow-hidden hero">
      <div className="left"></div>
      <div className="right">
        <div className="content">
          <p className="text-5xl text-indigo-700 job-title">
            I'm a content creator
          </p>
          <h1 className="min-[290px]:text-7xl md:text-9xl">Allen Walker</h1>
          <p className="max-w-2xl text-balance">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            omnis quidem in ratione maiores aspernatur minima, non adipisci
            nobis incidunt cumque sequi quo corporis consequatur accusantium!
            Maiores, iusto. Repudiandae, at.
          </p>
        </div>
        <div className="flex gap-4 my-6 social-links">
          {/* Facebook */}
          <a href="/" title="Facebook" aria-label="Facebook">
            <Facebook />
          </a>
          {/* Twitter */}
          <a href="/" title="Twitter" aria-label="Twitter">
            <Twitter />
          </a>
          {/* Instagram */}
          <a href="/" title="Instagram" aria-label="Instagram">
            <Instagram />
          </a>
        </div>
        <div className="flex flex-col gap-2 contact-information">
          {/* mobile call */}
          <a href="tel:+123456789" title="Call me" aria-label="Call me">
            +123456789
          </a>
          {/* email */}
          <a
            href="mailto:9e9Jf@example.com"
            title="Email me"
            aria-label="Email me"
          >
            9e9Jf@example.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
