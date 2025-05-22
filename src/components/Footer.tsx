import type React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container-custom py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contattaci</h3>
            <h4 className="font-bold text-sm mb-2">MAESTRE PIE VENERINI (M.P.V.) Cod. Fisc. 97327030587</h4>
            <p className="text-sm mb-2">
              <strong>Address:</strong> Via Giuseppe Gioachino Belli 31 - 00193 ROMA
            </p>
            <p className="text-sm mb-2">
              <strong>Phone:</strong> tel. 06-32.13.205 - tel. 06-32.20.986
            </p>
            <p className="text-sm mb-2">tel. 06-32.21.222 - fax 06-32.11.596</p>
            <p className="text-sm mb-2">
              <strong>E-mail:</strong>{' '}
              <a href="mailto:mpvcongregazione@gmail.com" className="text-accent-beige hover:underline">
                mpvcongregazione@gmail.com
              </a>
            </p>
            <p className="text-sm">
              <strong>Website:</strong>{' '}
              <a href="https://maestrepievenerini.it" className="text-accent-beige hover:underline">
                https://maestrepievenerini.it
              </a>
            </p>
          </div>

          {/* Mission */}
          <div>
            <h3 className="text-lg font-semibold mb-4">La nostra missione</h3>
            <p className="text-sm leading-relaxed">
              Le Maestre Pie Venerini si dedicano all'istruzione e all'educazione cristiana della gioventù.
              Oltre che in Italia, sono presenti in Albania, Brasile, Camerun, Cile, India, Nigeria, Romania,
              Stati Uniti d'America e Benin.
            </p>
          </div>

          {/* Social Media and Photos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Seguici</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.facebook.com/Congregazione-Maestre-Pie-Venerini-997334310336941/?ref=hl"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-white hover:text-accent-beige">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="https://www.youtube.com/channel/UC4UKVWEAPWnsRmplvnuIU1A"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-white hover:text-accent-beige">
                <i className="fab fa-youtube" />
              </a>
              <a href="https://www.flickr.com/photos/130825682@N02/albums"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-white hover:text-accent-beige">
                <i className="fab fa-flickr" />
              </a>
            </div>

            <h3 className="text-lg font-semibold mb-4">Foto</h3>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <a key={num} href="https://www.flickr.com/photos/130825682@N02/albums" target="_blank" rel="noopener noreferrer">
                  <div className="w-full h-16 bg-gray-600 hover:opacity-80 transition-opacity">
                    {/* Placeholder for Flickr images */}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-black py-4">
        <div className="container-custom text-xs text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              Copyright © 2025. Congregazione delle Maestre Pie Venerini - Roma - Cod. Fisc. 97327030587 -
              <Link to="/privacy" className="ml-1 text-accent-beige hover:underline">Privacy</Link> -
              <Link to="/informativa-contatti" className="ml-1 text-accent-beige hover:underline">Informativa Contatti</Link>
            </div>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link to="/" className="hover:text-white">Home</Link>
              <Link to="/dove-siamo" className="hover:text-white">Dove siamo</Link>
              <Link to="/news-ed-eventi" className="hover:text-white">News ed eventi</Link>
              <Link to="#top" className="hover:text-white">Torna su</Link>
              <Link to="/cookie-policy" className="hover:text-white">Cookie Policy (UE)</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
