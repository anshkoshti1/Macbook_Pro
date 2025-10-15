import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Preloader = ({ children }) => {
  const preloaderRef = useRef(null);
  const logoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut" },
    });

    // Logo pulsing animation
    tl.fromTo(
      logoRef.current,
      { scale: 0.9, opacity: 0.4 },
      { scale: 1.1, opacity: 1, duration: 1.2, repeat: -1, yoyo: true }
    );

    // Simulate loading duration (you can tie this to actual resource loading)
    const timer = setTimeout(() => {
      gsap.to(preloaderRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          setIsLoading(false);
        },
      });
    }, 2000);

    return () => {
      clearTimeout(timer);
      tl.kill();
    };
  }, []);

  return (
    <>
      {isLoading && (
        <div
          ref={preloaderRef}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          <img
            src="/logo.svg"
            ref={logoRef}
            alt="Apple Logo"
            className="w-16 h-16 select-none"
          />
        </div>
      )}
      {!isLoading && children}
    </>
  );
};

export default Preloader;
