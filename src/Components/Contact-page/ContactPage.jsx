import React, { useRef, useEffect } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const containerRef = useRef(null);

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
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center min-h-[100vh] px-4 py-16 bg-gray-100 lg:flex-row animate-down"
    >
      <div className="order-1 w-full mb-8 text-center lg:w-1/2 lg:text-left lg:order-1 lg:mb-0">
        <h1 className="font-bold text-center sm:text-2xl lg:text-4xl animate-gradient-text animate-3d-title">
          Contactez Nous
        </h1>
      </div>
      <div className="order-2 w-full lg:w-1/2 lg:order-2">
        <form className="p-8 rounded-lg shadow-lg bg-gradient-to-r from-gray-600 to-gray-300 w-[350px]">
          <div className="form-input-container">
            <label className="block py-2 mb-2 sm:text-[15px] text-white" htmlFor="phone">
              Numéro
            </label>
            <input
              className="w-full p-2 sm:text-[12px] text-white bg-transparent border-2 border-gray-700 rounded-lg form-input focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="phone"
              placeholder="Votre numéro"
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div className="form-input-container">
            <label className="block py-2 mb-2 sm:text-[15px] text-white" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 sm:text-[12px] text-white bg-transparent border-2 border-gray-500 rounded-lg form-input focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              placeholder="Votre email"
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div className="form-input-container">
            <label className="block py-2 mb-2 sm:text-[15px] text-white" htmlFor="pseudo">
              Pseudo
            </label>
            <input
              className="w-full p-2 sm:text-[12px] text-white bg-transparent border-2 border-gray-500 rounded-lg form-input focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="pseudo"
              placeholder="Votre pseudo"
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div className="form-input-container">
            <label className="block py-2 mb-2 sm:text-[15px] text-white" htmlFor="comment">
              Commentaire
            </label>
            <textarea
              className="w-full p-2 sm:text-[12px] text-white bg-transparent border-2 border-gray-500 rounded-lg form-input focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="comment"
              rows="4"
              placeholder="Votre commentaire"
              style={{ borderRadius: "10px" }}
            ></textarea>
          </div>
          <button className="gradient-button lg:px-4 sm:px-3 lg:py-2 lg:text-[15px] sm:text-[12px]">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
