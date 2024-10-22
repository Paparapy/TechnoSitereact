import React, { useState, useRef, useEffect } from "react";
import "./BlogPage.css";
import TextAnimation from "../Text-animation/TextAnimation";

const BlogPage = () => {
  const [activeImage, setActiveImage] = useState("image1");
  const containerRef = useRef(null);

  const handleClick = (image) => {
    setActiveImage(image);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fadeInDown");
          } else {
            entry.target.classList.remove("fadeInDown");
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
    <div ref={containerRef} className="full-screen-container animate-down">
      <div className="container w-full flex flex-col items-start py-16 mx-auto lg:flex-row sm:items-center min-h-[100vh]">
        <div className="lg:w-1/2">
          <div className="pb-6 lg:w-1/2">
            <TextAnimation text="A propos de moi et ma technologie" />
          </div>
          <p className="text-gray-700 lg:text-[15px] sm:text-[12px]">
            La technologie évolue constamment et façonne notre monde de manière
            impressionnante. Par exemple, les{" "}
            <a href="https://www.example.com/ai" className="text-pink-600 lg:text-[15px] sm:text-[12px]">
              avancées en intelligence artificielle
            </a>{" "}
            permettent de développer des machines plus intelligentes et
            autonomes. Les{" "}
            <a
              href="https://www.example.com/healthtech"
              className="text-pink-600 lg:text-[15px] sm:text-[12px]"
            >
              innovations dans le domaine de la santé
            </a>{" "}
            transforment les traitements et améliorent la qualité des soins.
          </p>
          <p className="text-gray-700 lg:text-[15px] sm:text-[12px]">
            En parallèle,{" "}
            <a href="https://www.example.com/iot" className="text-pink-600 lg:text-[15px] sm:text-[12px]">
              l'internet des objets (IoT)
            </a>{" "}
            connecte nos appareils quotidiens, créant des maisons et des villes
            plus intelligentes et efficaces. L'
            <a
              href="https://www.example.com/renewableenergy"
              className="text-pink-600 lg:text-[15px] sm:text-[12px]"
            >
              énergie renouvelable
            </a>{" "}
            joue également un rôle crucial pour un avenir durable, en réduisant
            notre empreinte carbone et en protégeant la planète.
          </p>
          <p className="text-gray-700 lg:text-[15px] sm:text-[12px]">
            Pour en savoir plus sur ces sujets passionnants, consultez ces liens
            et découvrez comment la technologie continue de transformer notre
            monde.vive cette monde du technologie
          </p>
        </div>
        <div className="relative flex justify-center mt-8 lg:w-1/2 lg:mt-0">
          <div className="relative w-96 h-96">
            <img
              src="https://db0dce98.rocketcdn.me/wp-content/uploads/2023/12/DALL%C2%B7E-2024-01-23-17.42.07-Une-illustration-originale-et-captivante-pour-un-article-sur-la-cybersecurite-en-format-16_9.-Limage-devrait-etre-dynamique-et-inventive-incluant-d-1024x585.png"
              alt="Image 1"
              className={`absolute lg:w-full lg:h-full sm:w-[250px] sm:h-[250px] object-cover rounded-lg shadow-lg cursor-pointer transition-all duration-300 ${
                activeImage === "image1"
                  ? "z-20"
                  : "z-10 top-8 left-8 opacity-80"
              }`}
              onClick={() => handleClick("image1")}
            />
            <img
              src="https://noblue.eu/cdn/shop/articles/replicate-prediction-hmk6tyjbzffoaq4fwonjobg2vq_1.jpg?v=1705493579&width=1100"
              alt="Image 2"
              className={`absolute lg:w-full lg:h-full w-[250px] h-[250px] object-cover rounded-lg shadow-lg cursor-pointer transition-all duration-300 ${
                activeImage === "image2"
                  ? "z-20"
                  : "z-10 top-8 left-8 opacity-80"
              }`}
              onClick={() => handleClick("image2")}
            />
            <div className="absolute z-30 flex items-center space-x-2 bottom-4 right-4">
              <p className="text-white">Cliquez l'image</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
