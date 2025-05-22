import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-cover bg-center h-96 flex items-center" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
        <div className="container-custom">
          <div className="bg-primary bg-opacity-80 p-8 md:p-12 max-w-2xl rounded-md">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Congrégation des Soeurs Rosa Venerini</h1>
            <p className="text-white text-lg mb-6">
              Une congrégation dédiée à l'éducation des jeunes filles et à la promotion de la foi chrétienne,
              fondée par Sainte Rosa Venerini en 1685.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/sainte-rosa-venerini"
                className="bg-secondary hover:bg-secondary-dark text-white py-2 px-6 rounded-sm transition-colors duration-200"
              >
                Découvrir Sainte Rosa
              </Link>
              <Link
                to="/cameroun"
                className="bg-white hover:bg-gray-100 text-primary py-2 px-6 rounded-sm transition-colors duration-200"
              >
                Nos missions au Cameroun
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Notre Mission</h2>
            <p className="text-gray-700 mb-4">
              Les Soeurs de Rosa Venerini se consacrent à l'instruction et à l'éducation chrétienne
              de la jeune fille. Notre mission s'étend au-delà de l'Italie, dans plusieurs pays dont
              l'Albanie, le Brésil, le Cameroun, le Chili, l'Inde, le Nigeria, la Roumanie, les États-Unis
              d'Amérique et le Bénin.
            </p>
            <p className="text-gray-700 mb-4">
              Notre devise, "Educare et Evangelizare" (Éduquer et Évangéliser), guide notre travail
              quotidien auprès des jeunes et des plus démunis.
            </p>
            <Link
              to="/qui-sommes-nous"
              className="text-secondary hover:text-secondary-dark font-medium"
            >
              En savoir plus sur notre histoire &rarr;
            </Link>
          </div>
          <div className="flex justify-center">
            {/* Placeholder for an image */}
            <div className="w-full max-w-md h-64 bg-gray-300 rounded-md" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-12">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">Nos Activités</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-md shadow-sm">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-graduation-cap text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Éducation</h3>
              <p className="text-gray-700 mb-4">
                Nous gérons des écoles primaires et secondaires, offrant une éducation de qualité
                avec un accent sur la formation morale et religieuse.
              </p>
              <Link
                to="/services"
                className="text-accent-blue hover:text-blue-600"
              >
                Nos établissements &rarr;
              </Link>
            </div>

            <div className="bg-white p-6 rounded-md shadow-sm">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-heartbeat text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Santé</h3>
              <p className="text-gray-700 mb-4">
                Nous gérons des hôpitaux et dispensaires, offrant des soins de santé de qualité
                aux personnes défavorisées, en particulier aux femmes et aux enfants.
              </p>
              <Link
                to="/services"
                className="text-accent-blue hover:text-blue-600"
              >
                Nos services de santé &rarr;
              </Link>
            </div>

            <div className="bg-white p-6 rounded-md shadow-sm">
              <div className="w-12 h-12 bg-accent-blue rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-hands-helping text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Formation professionnelle</h3>
              <p className="text-gray-700 mb-4">
                Nous offrons des programmes de formation dans divers domaines pour aider les jeunes
                à acquérir des compétences et trouver un emploi.
              </p>
              <Link
                to="/services"
                className="text-accent-blue hover:text-blue-600"
              >
                Nos programmes &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="container-custom py-12 text-center">
        <blockquote className="text-xl italic text-gray-700 max-w-3xl mx-auto">
          "Les Maîtresses doivent obtenir plus avec la douceur qu'avec la rigueur, plus avec l'amour qu'avec la crainte."
        </blockquote>
        <p className="text-primary font-semibold mt-4">- Sainte Rosa Venerini</p>
      </div>

      {/* CTA Section */}
      <div className="bg-primary py-12">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Rejoignez notre mission</h2>
          <p className="text-white text-lg mb-6 max-w-3xl mx-auto">
            Participez à notre œuvre en soutenant nos projets ou en vous engageant comme volontaire
            dans nos diverses activités au service des plus démunis.
          </p>
          <Link
            to="/contact"
            className="bg-white hover:bg-gray-100 text-primary py-2 px-6 rounded-sm transition-colors duration-200"
          >
            Contactez-nous
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
