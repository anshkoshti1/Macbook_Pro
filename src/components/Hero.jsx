import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef();
  const sectionRef = useRef();

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  }, []);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Start invisible (prevents flash before animation)
      gsap.set(sectionRef.current, { opacity: 0 });

      // Run after next frame → ensures browser has rendered DOM
      requestAnimationFrame(() => {
        gsap.to(sectionRef.current, {
          opacity: 1,
          duration: 1.6,
          ease: "power3.out",
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="hero">
      <div>
        <h1>MacBook Pro</h1>
        <img src="/title.png" alt="MacBook_Pro" />
      </div>

      <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />

      <button>Buy</button>

      <p>From $1599 or $133/mo. for 12 months.</p>
    </section>
  );
};

export default Hero;
