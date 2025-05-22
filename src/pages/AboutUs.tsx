import type React from 'react';
import Layout from '../components/Layout';

const AboutUs: React.FC = () => {
  return (
    <Layout>
      {/* Page Title Section */}
      <div className="bg-cover bg-center h-48 flex items-end" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
        <div className="container-custom pb-6">
          <h1 className="text-3xl font-bold text-white">Chi siamo</h1>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-2">
        <div className="container-custom">
          <p className="text-sm">
            <a href="/" className="text-primary hover:text-secondary">Home</a> &gt; Chi siamo
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-8">
        {/* Fondatrice Section */}
        <section className="mb-12">
          <div className="bg-gray-50 p-6 rounded-md">
            <h2 className="text-xl font-bold text-primary mb-4">LA FONDATRICE</h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-2/3">
                <h3 className="font-bold mb-3">I PRIMATI DI ROSA VENERINI</h3>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Fondazione della prima scuola pubblica femminile in Italia</li>
                  <li>Fondazione della prima Comunità femminile di vita Apostolica</li>
                  <li>Prima a dare professionalità alla donna "Maestra"</li>
                  <li>Elaborazione e pubblicazione della Regola per una comunità apostolica</li>
                  <li>Organizzazione autonoma dell'Amministrazione delle scuole e delle Comunità</li>
                </ul>

                <h3 className="font-bold mb-3">FAMIGLIA D'ORIGINE</h3>
                <p className="text-sm mb-4">
                  Rosa Venerini nacque a Viterbo, il 9 febbraio 1656. Il padre, Goffredo, era nato a Castelleone di
                  Suasa (Ancona), il 3 marzo 1612. Si era laureato in medicina; trasferitosi a Viterbo, esercitò brillantemente
                  la professione di medico nell'Ospedale Grande. La madre, Marzia Zampichetti, di antica famiglia viterbese,
                  era nata il 24...
                </p>

                <a href="/la-fondatrice" className="read-more-btn">Leggi di più</a>
              </div>
              <div className="md:w-1/3 flex justify-center">
                {/* Image placeholder - would be replaced with actual image */}
                <div className="w-48 h-64 bg-gray-300 rounded-md"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Beatificazione Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-50 p-6 rounded-md">
            <h2 className="text-xl font-bold text-primary mb-4">BEATIFICAZIONE DI ROSA VENERINI</h2>
            <p className="text-sm mb-4">
              Rosa Venerini morì a Roma, nella scuola di San Marco, il 4 maggio 1728, all'età di 72 anni. Fu sepolta,
              secondo il suo desiderio, nella vicina chiesa di Gesù. Aveva fondato una cinquantina di scuole. La sua fama
              di santità, che si era manifestata in vita e in morte, crebbe e...
            </p>
            <a href="/beatificazione-di-rosa-venerini" className="read-more-btn">Leggi di più</a>
          </div>

          <div className="bg-gray-50 p-6 rounded-md">
            <h2 className="text-xl font-bold text-primary mb-4">IL MIRACOLO</h2>
            <h3 className="font-bold mb-3">IL MIRACOLO CHE HA PORTATO ALLA CANONIZZAZIONE</h3>
            <p className="text-sm mb-4">
              Onguen Meyong, nato il 16 ottobre 1992, viveva a Sangmelima (Cameroun) con la mamma, Catherine, cinque
              fratelli e tre sorelle. Gli amici lo chiamavano Topolino. Nel 1997 cominciò a dare segni di malessere fisico:
              accusava febbre, debolezza e astenia. La mamma credeva si trattasse di...
            </p>
            <a href="/il-miracolo-2" className="read-more-btn">Leggi di più</a>
          </div>

          <div className="bg-gray-50 p-6 rounded-md">
            <h2 className="text-xl font-bold text-primary mb-4">CANONIZZAZIONE DI ROSA VENERINI</h2>
            <p className="text-sm mb-4">
              Papa Benedetto XVI, il 28 aprile 2006, durante un'udienza privata concessa al Card. José Saraiva Martins,
              prefetto della Congregazione delle Cause dei Santi, autorizza la detta Congregazione alla promulgazione del
              decreto riguardante un miracolo attribuito all'intercessione della beata Rosa Venerini. Il pontefice, il
              1 luglio 2006, convoca il concistoro...
            </p>
            <a href="/canonizzazione-di-rosa-venerini" className="read-more-btn">Leggi di più</a>
          </div>
        </div>

        {/* Carisma e Spiritualità Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">CARISMA E SPIRITUALITÀ</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-md overflow-hidden">
              <div className="h-48 bg-gray-300">
                {/* Image placeholder */}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">LA NOSTRA MISSIONE</h3>
                <p className="text-sm mb-3">
                  La Congregazione delle Maestre Pie Venerini è nata come realizzazione del sogno di salvezza di
                  una donna dal cuore grande...
                </p>
                <a href="/la-nostra-missione" className="read-more-btn">Leggi di più</a>
              </div>
            </div>

            <div className="border rounded-md overflow-hidden">
              <div className="h-48 bg-gray-300">
                {/* Image placeholder */}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">SPIRITUALITÀ VENERINI</h3>
                <p className="text-sm mb-3">
                  Rosa Venerini, affrontando con gioiosa fatica, il suo cammino illuminato dalla grazia divina,
                  cerca di approfondire la sua identità, soprattutto...
                </p>
                <a href="/spiritualita-venerini" className="read-more-btn">Leggi di più</a>
              </div>
            </div>

            <div className="border rounded-md overflow-hidden">
              <div className="h-48 bg-gray-300">
                {/* Image placeholder */}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">GESÙ IL MAESTRO: ESPERIENZA CARISMATICA DI S. ROSA VENERINI</h3>
                <p className="text-sm mb-3">
                  Prima di essere un'opera educativa, la missione di Rosa è stata esperienza della sua vita con Cristo,
                  vissuta in un...
                </p>
                <a href="/gesu-il-maestro-esperienza-carismatica-di-s-rosa-venerini" className="read-more-btn">Leggi di più</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutUs;
