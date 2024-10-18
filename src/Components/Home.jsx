import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Global.css";

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fadeInUp');
          } else {
            entry.target.classList.remove('fadeInUp');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="flex items-center justify-center min-h-screen pt-20 sm:flex-col-reverse lg:pt-0 bg-gradient-to-r from-blue-800 via-gray-100 to-pink-600 animate-up">
      <div className="container flex flex-col items-center justify-between mx-auto lg:flex-row sm:pb-5">
        <div className="px-4 lg:text-left sm:text-center lg:w-1/2">
          <h1 className="mb-4 font-bold text-white lg:text-5xl sm:text-3xl animate-title animate-delay-1">
            La téchnologies dans notre monde
          </h1>
          <p className="pb-5 mb-4 sm:text-[15px] sm:text-center lg:text-justify text-gray-800 animate-paragraph animate-delay-2">
            En nous engageant à utiliser la technologie de manière responsable et éthique, nous pouvons faire de notre monde un endroit plus équitable, plus connecté et plus prospère pour les générations à venir. Pour plus d'informations, visitez notre <a href="https://www.example.com/responsibletech" className="text-pink-300">page sur la technologie responsable</a>.
          </p>
          <div className="animate-button animate-delay-1">
            <Link to="/technology">
              <button className="px-4 py-2 pb-3 font-semibold text-white transition-all duration-300 bg-blue-500 rounded-full hover:bg-blue-600 animated-button">
                Découvrez plus
              </button>
            </Link>
          </div>
        </div>
        <div className="relative px-4 pt-5 lg:w-1/2 sm:h-64 animate-background animate-delay-1">
          <img
            src="https://dropinblog.net/34253577/files/featured/telechargement__1_.jpeg"
            alt="Background"
            className="object-cover rounded-lg relative z-10 hover:shrink-animation w-[450px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
