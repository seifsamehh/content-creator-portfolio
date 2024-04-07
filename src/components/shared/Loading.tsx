import { useState, useEffect } from "react";

import { gsap, CSSPlugin, Expo } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(CSSPlugin);

const Loading = () => {
  const [counter, setCounter] = useState(0);
  const [hasAppeared, setHasAppeared] = useState(false);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter) => (counter < 100 ? counter + 1 : 100));
    }, 25);

    return () => clearInterval(count);
  }, []);

  useGSAP(() => {
    if (!hasAppeared) {
      const t1 = gsap.timeline({
        onComplete: () => {
          setHasAppeared(true); // Mark the component as appeared
        },
      });
      t1.to(".follow", {
        width: "100%",
        ease: Expo.easeInOut,
        duration: 1.2,
        delay: 0.7,
      })
        .to(".hide", { opacity: 0, duration: 0.3 })
        .to(".hide", { display: "none", duration: 0.3 })
        .to(".follow", {
          height: "100%",
          ease: Expo.easeInOut,
          duration: 0.7,
          delay: 0.5,
        })
        .to(".content", { width: "100%", ease: Expo.easeInOut, duration: 0.7 })
        .to(".title-lines", { display: "block", duration: 0.1 })
        .to(".title-lines", {
          opacity: 1,
          stagger: 0.15,
          ease: Expo.easeInOut,
          duration: 0.6,
        });
    }
  });

  return hasAppeared ? null : (
    <section className="overflow-hidden loading">
      <div className="loader">
        <div className="follow"></div>
        <div
          className="hide"
          id="progress-bar"
          style={{ width: counter + "%" }}
        ></div>
        <div id="count" className="select-none hide">
          {counter}%
        </div>
      </div>
    </section>
  );
};

export default Loading;
