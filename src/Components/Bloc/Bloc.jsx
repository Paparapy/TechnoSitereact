import React, { useEffect, useRef } from "react";
import "./Bloc.css";

const Bloc = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fadeInUp");
          } else {
            entry.target.classList.remove("fadeInUp");
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

  const blocs = [
    {
      id: 1,
      title: "Les dernières innovations",
      description: "Découvrez les dernières avancées technologiques.",
      text: "Plongez dans les innovations récentes et voyez comment elles transforment le monde. Visitez notre page pour en savoir plus sur les technologies émergentes.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW7Nh45ddPmQ6knb3Moef7lqyTXL510swoRg&s",
    },
    {
      id: 2,
      title: "Technologie de la santé",
      description: "Les innovations dans le domaine de la santé.",
      text: "La technologie médicale évolue rapidement. Découvrez comment ces avancées améliorent notre santé et bien-être. En savoir plus sur notre site.",
      imageUrl:
        "https://www.telecomreviewafrica.com/images/stories/2017/09/news-28-09-06.jpg",
    },
    {
      id: 3,
      title: "Intelligence artificielle",
      description:
        "Explorez le monde de l'IA et de l'apprentissage automatique.",
      text: "L'intelligence artificielle redéfinit les limites de l'innovation. Découvrez ses applications et impact sur divers secteurs. Apprenez plus sur notre page dédiée à l'IA.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Q08mrlcyblBRYwzkFGWYpf101LvbH88G4A&s",
    },
    {
      id: 4,
      title: "Technologies émergentes",
      description: "Les nouvelles technologies qui façonnent l'avenir.",
      text: "Les technologies émergentes ouvrent des voies inédites. Explorez les innovations qui changent notre futur. Cliquez ici pour voir plus.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRddipuE0WNr_pWG6wILB-UwGtoOywesII19w&s",
    },
    {
      id: 5,
      title: "Développement durable",
      description: "Les technologies pour un avenir durable.",
      text: "Le développement durable est au cœur de l'innovation technologique. Découvrez comment les technologies vertes contribuent à un avenir meilleur. En savoir plus ici.",
      imageUrl:
        "https://image.lecourrier.vn/uploaded/2022/7/11/154452593ts.jpg",
    },
    {
      id: 6,
      title: "Cybersécurité",
      description:
        "Protégez vos données avec les dernières avancées en cybersécurité.",
      text: "La cybersécurité est essentielle dans notre monde numérique. Apprenez comment protéger vos informations avec les dernières technologies. Plus d'infos ici.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwvKaXljrpLILmaOAZ-doznPvqYW2nyaC7Tg&s",
    },
    {
      id: 7,
      title: "Internet des objets",
      description: "Connectez votre monde avec l'Internet des objets.",
      text: "L'Internet des objets connecte nos vies de manière innovante. Découvrez comment ces technologies transforment nos environnements. Visitez notre page IoT.",
      imageUrl:
        "https://images.bfmtv.com/n1tCVqMkUYxKFl0WS5KXzN9ZnIA=/1x11:849x488/848x0/images/Nouvelles-technologies-transformation-digitale-Quelles-opportunites-pour-les-investisseurs-1481489.jpg",
    },
    {
      id: 8,
      title: "Technologie verte",
      description: "Les innovations vertes pour un environnement sain.",
      text: "Les technologies vertes sont cruciales pour un avenir durable. Explorez les solutions écologiques innovantes. Apprenez-en davantage ici.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjncErd2RPwxbzAV0Iys2soGxu4lzkxtCJCg&s",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="container min-h-screen py-16 mx-auto animate-up"
    >
      <div className="grid min-h-screen grid-cols-1 gap-8 p-4 border-2 border-blue-200 rounded-lg md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
        {blocs.map((bloc) => (
          <div
            key={bloc.id}
            className="p-6 sm:w-[250px] lg:w-[350px] rounded-lg shadow-lg bg-gradient-to-t from-gray-600 via-gray-300 to-gray-400 shadow-gray-500 sm:items-center"
          >
            <h3 className="mb-2 text-[18px] sm:text-[15px] font-semibold text-pink-800">
              {bloc.title}
            </h3>
            <div className="border-2 border-gray-200 rounded-lg img-container">
              <img
                src={bloc.imageUrl}
                alt={`Image for ${bloc.title}`}
                className="object-cover sm:w-[300px] sm:h-[150px] lg:w-full lg:h-[200px] p-2 rounded-xl"
              />
            </div>
            <p className="py-4 font-semibold sm:text-[15px] text-center text-gray-700">
              {bloc.description}
            </p>
            <p className="text-pink-100 sm:text-[10px] md:text-[12px] lg:text-[15px]">
              {bloc.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bloc;
