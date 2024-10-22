import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="py-8 text-white bg-gray-900">
    <div className="container grid grid-cols-1 px-4 mx-auto lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <h2 className="mb-4 text-xl font-bold">À propos</h2>
        <p className='sm:text-[12px] lg:text-[15px]'> Avec des avancées constantes, la technologie continue d'ouvrir de
              nouvelles possibilités. Que ce soit dans le domaine de la
              médecine, de l'éducation ou du divertissement, les innovations
              technologiques façonnent notre avenir. Pour en savoir plus,
              visitez notre</p>
      </div>
      <div>
        <h2 className="mb-4 text-xl font-bold">Liens Utiles</h2>
        <ul>
          <li><a href="#" className="hover:text-yellow-500 sm:text-[12px] lg:text-[15px]">Accueil</a></li>
          <li><a href="#" className="hover:text-yellow-500 sm:text-[12px] lg:text-[15px]">Services</a></li>
          <li><a href="#" className="hover:text-yellow-500 sm:text-[12px] lg:text-[15px]">Contact</a></li>
          <li><a href="#" className="hover:text-yellow-500 sm:text-[12px] lg:text-[15px]">À propos</a></li>
        </ul>
      </div>
      <div>
        <h2 className="mb-4 text-xl font-bold">Contact</h2>
        <ul>
          <li><a href="#" className="hover:text-yellow-500 sm:text-[12px] lg:text-[15px]">Email</a></li>
          <li><a href="#" className="hover:text-yellow-500 sm:text-[12px] lg:text-[15px]">Téléphone</a></li>
          <li><a href="#" className="hover:text-yellow-500 sm:text-[12px] lg:text-[15px]">Adresse</a></li>
        </ul>
      </div>
      <div>
        <h2 className="mb-4 text-xl font-bold">Suivez-nous</h2>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-yellow-500 sm:text-[12px] lg:text-[15px]"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-yellow-500 sm:text-[12px] lg:text-[15px]"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-yellow-500 sm:text-[12px] lg:text-[15px]"><i className="bg-white fab fa-facebook"></i></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
