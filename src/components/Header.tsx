import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="w-full">
      {/* Top social icons and logo */}
      <div className="bg-primary py-4">
        <div className="container-custom flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/logo1.jpg"
              alt="Congrégation des Maîtresses Pieuses Venerini Logo"
              className="h-20 mr-4"
            />
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-semibold text-white">
                Congrégation des Soeurs Rosa Venerini
              </h1>
              <p className="italic text-sm md:text-base text-white ">
                Bureau de developement 
              </p>
            </div>
          </div>

          <div className="hidden md:flex space-x-3">
            <a
              href="https://www.facebook.com/congregazionempv/?ref=hl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent-beige"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              href="https://www.youtube.com/channel/UC4UKVWEAPWnsRmplvnuIU1A"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent-beige"
            >
              <i className="fab fa-youtube" />
            </a>
            <a
              href="https://www.flickr.com/photos/130825682@N02/albums"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent-beige"
            >
              <i className="fab fa-flickr" />
            </a>
            <a href="/contact" className="text-white hover:text-accent-beige">
              <i className="fas fa-envelope" />
            </a>
            <button className="text-white hover:text-accent-beige">
              <i className="fas fa-search" />
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white shadow-md">
        <div className="container-custom">
          <ul className="flex flex-wrap text-sm md:text-base">
            <li className="py-4 px-2 md:px-4 bg-secondary">
              <Link
                to="/"
                className="text-white font-medium hover:text-accent-beige"
              >
                Accueil
              </Link>
            </li>
            {/* Lien "Qui sommes-nous" supprimé */}
            <li className="py-4 px-2 md:px-4 hover:bg-gray-100">
              <Link
                to="/sainte-rosa-venerini"
                className="text-dark font-medium hover:text-primary"
              >
                Sainte Rosa Venerini
              </Link>
            </li>
            <li className="py-4 px-2 md:px-4 hover:bg-gray-100">
              <Link
                to="/communautes"
                className="text-dark font-medium hover:text-primary"
              >
                Communautés
              </Link>
            </li>
            <li className="py-4 px-2 md:px-4 hover:bg-gray-100">
              <Link
                to="/cameroun"
                className="text-dark font-medium hover:text-primary"
              >
                Cameroun
              </Link>
            </li>
            <li className="py-4 px-2 md:px-4 hover:bg-gray-100">
              <Link
                to="/spiritualite"
                className="text-dark font-medium hover:text-primary"
              >
                Spiritualité
              </Link>
            </li>
            <li className="py-4 px-2 md:px-4 hover:bg-gray-100">
              <Link
                to="/pastoral"
                className="text-dark font-medium hover:text-primary"
              >
                Pastoral
              </Link>
            </li>
            <li className="py-4 px-2 md:px-4 hover:bg-gray-100">
              <Link
                to="/services"
                className="text-dark font-medium hover:text-primary"
              >
                Services
              </Link>
            </li>
            <li className="py-4 px-2 md:px-4 hover:bg-gray-100">
              <Link
                to="/contact"
                className="text-dark font-medium hover:text-primary"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
