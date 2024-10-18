import React from "react";
import "./Technology.css";

const TechnologyPage = () => {
  return (
    <div className="min-h-screen p-8 pt-20 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 fade-in">
      <h1 className="mb-8 text-5xl font-bold text-center gradient-text">
        La Technologie
      </h1>
      <div className="lg:flex lg:justify-between">
        <div className="lg:w-1/2 lg:pr-8">
          <section className="mb-8">
            <h2 className="mb-4 text-3xl font-semibold text-pink-600">
              Innovation et Progrès
            </h2>
            <p className="mb-4 text-justify text-gray-700 lg:text-[15px] sm:text-sm">
              La technologie a transformé notre monde de manière significative.
              Elle a révolutionné la façon dont nous communiquons, travaillons
              et vivons. Découvrez plus sur les{" "}
              <a
                href="https://www.example.com/innovation"
                className="text-pink-500"
              >
                dernières innovations
              </a>
              .
            </p>
            <p className="mb-4 text-justify text-gray-700 lg:text-[15px] sm:text-sm">
              Avec des avancées constantes, la technologie continue d'ouvrir de
              nouvelles possibilités. Que ce soit dans le domaine de la
              médecine, de l'éducation ou du divertissement, les innovations
              technologiques façonnent notre avenir. Pour en savoir plus,
              visitez notre{" "}
              <a
                href="https://www.example.com/future"
                className="text-pink-500"
              >
                page sur l'avenir de la technologie
              </a>
              .
            </p>
          </section>
          <section className="mb-8">
            <h2 className="mb-4 text-3xl font-semibold text-pink-600">
              Impact Positif
            </h2>
            <p className="mb-4 text-lg text-justify text-gray-700 lg:text-[15px] sm:text-sm">
              Les appareils intelligents, l'intelligence artificielle, et les
              réseaux de communication avancés sont des exemples concrets de
              l'impact de la technologie. Ces outils améliorent notre quotidien
              et nous permettent de réaliser des tâches autrefois inimaginables.
              Pour plus d'exemples, visitez notre{" "}
              <a
                href="https://www.example.com/smartdevices"
                className="text-pink-500"
              >
                page sur les appareils intelligents
              </a>
              .
            </p>
            <p className="mb-4 text-lg text-justify text-gray-700 lg:text-[15px] sm:text-sm">
              En utilisant ces technologies, nous pouvons résoudre des problèmes
              complexes, améliorer notre efficacité et vivre une vie plus
              connectée et enrichissante. Consultez{" "}
              <a
                href="https://www.example.com/connectedlife"
                className="text-pink-500"
              >
                cette page
              </a>{" "}
              pour des témoignages inspirants.
            </p>
          </section>
        </div>
        <div className="lg:w-1/2 lg:pl-8">
          <section className="mb-8">
            <h2 className="mb-4 text-3xl font-semibold text-pink-600">
              Vision pour l'Avenir
            </h2>
            <p className="mb-4 text-lg text-justify text-gray-700 lg:text-[15px] sm:text-sm">
              L'avenir de la technologie est rempli de promesses. Avec des
              innovations telles que la réalité virtuelle, l'Internet des objets
              et la biotechnologie, nous nous dirigeons vers une ère de
              possibilités illimitées. En savoir plus sur les{" "}
              <a
                href="https://www.example.com/futuretech"
                className="text-pink-500"
              >
                technologies du futur
              </a>
              .
            </p>
            <p className="mb-4 text-lg text-justify text-gray-700 lg:text-[15px] sm:text-sm">
              En embrassant ces nouvelles technologies, nous pouvons créer un
              monde où tout est possible, un monde où nous pouvons surmonter les
              défis mondiaux et améliorer la qualité de vie pour tous. Découvrez
              comment sur notre{" "}
              <a
                href="https://www.example.com/globalchallenges"
                className="text-pink-500"
              >
                page des défis mondiaux
              </a>
              .
            </p>
          </section>
          <section>
            <h2 className="mb-4 text-3xl font-semibold text-pink-600">
              Engagement pour un Monde Meilleur
            </h2>
            <p className="mb-4 text-lg text-justify text-gray-700 lg:text-[15px] sm:text-sm">
              En conclusion, la technologie est un moteur de progrès et
              d'innovation. Il est crucial de continuer à explorer et à adopter
              ces nouvelles technologies pour construire un avenir meilleur.
              Pour en savoir plus, visitez notre{" "}
              <a
                href="https://www.example.com/betterfuture"
                className="text-pink-500"
              >
                page sur l'avenir meilleur
              </a>
              .
            </p>
            <p className="mb-4 text-lg text-justify text-gray-700 lg:text-[15px] sm:text-sm">
              En nous engageant à utiliser la technologie de manière responsable
              et éthique, nous pouvons faire de notre monde un endroit plus
              équitable, plus connecté et plus prospère pour les générations à
              venir. Pour plus d'informations, visitez notre{" "}
              <a
                href="https://www.example.com/responsibletech"
                className="text-pink-500"
              >
                page sur la technologie responsable
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TechnologyPage;
