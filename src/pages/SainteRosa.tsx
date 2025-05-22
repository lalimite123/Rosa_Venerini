import React from 'react';
import Layout from '../components/Layout';

const SainteRosa: React.FC = () => {
  return (
    <Layout>
      {/* Page Title Section */}
      <div className="bg-cover bg-center h-64 flex items-end pt-16" style={{ backgroundImage: "url('/images/hero.jpg')", backgroundPosition: "center 30%" }}>
        <div className="container-custom pb-6">
          <h1 className="text-3xl font-bold text-white">Sainte Rosa Venerini</h1>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-2">
        <div className="container-custom">
          <p className="text-sm">
            <a href="/" className="text-primary hover:text-secondary">Accueil</a> &gt; Sainte Rosa Venerini
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-8">
        {/* Introduction Section */}
        <section className="mb-12">
          <div className="bg-gray-50 p-6 rounded-md">
            <h2 className="text-xl font-bold text-primary mb-4">QUI EST SAINTE ROSA VENERINI</h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-2/3">
                <p className="text-base mb-4">
                  Rosa Venerini (1656-1728) était une religieuse et éducatrice italienne qui a fondé la Congrégation des Maestres Pie Venerini.
                  Elle a consacré sa vie à l'éducation des jeunes filles et à la promotion de la foi et de la charité.
                </p>

                <h3 className="font-bold mb-3">BIOGRAPHIE</h3>
                <h4 className="font-semibold mb-2">La vie de Rosa Venerini</h4>
                <p className="text-base mb-4">
                  Rosa Venerini est née le 9 février 1656 à Viterbe, en Italie. Elle était la fille d'un médecin et a reçu une éducation solide.
                  À l'âge de 20 ans, elle a épousé un homme nommé Giovanni Antonio Marescotti, mais leur mariage a été de courte durée, car son mari est décédé quelques années plus tard.
                  Après la mort de ce dernier, Rosa Venerini a décidé de consacrer sa vie à Dieu et à l'éducation des jeunes filles.
                  Elle a fondé la Congrégation des Maestres Pie Venerini en 1685, avec l'aide de quelques compagnes.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                {/* Image placeholder - would be replaced with actual image */}
                <div className="w-48 h-64 bg-gray-300 rounded-md" />
              </div>
            </div>
          </div>
        </section>

        {/* L'oeuvre Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">L'ŒUVRE DE ROSA VENERINI</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-md">
              <h3 className="font-bold text-lg mb-3">Son engagement éducatif</h3>
              <p className="text-base mb-4">
                Rosa Venerini a consacré sa vie à l'éducation des jeunes filles et à la promotion de la foi et de la charité.
                Elle a créé des écoles et des institutions pour accueillir les jeunes filles et leur offrir une éducation solide.
                Sa méthode pédagogique était innovante pour l'époque. Elle insistait sur l'importance de l'éducation morale et religieuse,
                mais également sur la nécessité de développer les compétences pratiques et les connaissances scientifiques.
                Voilà pourquoi plus tard elle fonda sa congrégation.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-md">
              <h3 className="font-bold text-lg mb-3">La Congrégation des Maestres Pie Venerini</h3>
              <p className="text-base mb-4">
                La Congrégation des Maestres Pie Venerini a été fondée par Rosa Venerini en 1685. La congrégation a pour but de
                promouvoir l'éducation des jeunes filles et de les aider à devenir des femmes fortes et indépendantes.
              </p>
              <p className="text-base mb-4">
                Aujourd'hui, la Congrégation des Maestres Pie Venerini est présente dans de nombreux pays du monde, notamment en Italie,
                en Europe, en Amérique et en Afrique. Les sœurs de la congrégation travaillent dans les écoles, les hôpitaux, les orphelinats
                et les communautés pour promouvoir l'éducation, la santé et le bien-être des jeunes filles et des femmes.
                Ce qui lui a valu d'être élevée à la dignité de sainte par l'église catholique.
              </p>
            </div>
          </div>
        </section>

        {/* Béatification et Canonisation Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">BÉATIFICATION ET CANONISATION</h2>

          <div className="bg-gray-50 p-6 rounded-md">
            <p className="text-base mb-4">
              Rosa Venerini a été béatifiée par l'Église catholique en 1952 et canonisée en 2006. Elle est considérée comme une sainte
              patronne de l'éducation et des enseignants. Sa béatification et sa canonisation sont un témoignage de sa dévotion à Dieu
              et de son engagement en faveur de l'éducation et de la charité.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <h3 className="font-bold text-lg mb-3">Béatification</h3>
                <p className="text-base mb-4">
                  Le processus de béatification de Rosa Venerini a commencé en 1909, mais il a été interrompu pendant
                  la Première Guerre mondiale. Il a repris en 1920 et s'est achevé en 1952, lorsque le Pape Pie XII l'a proclamée
                  bienheureuse.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3">Canonisation</h3>
                <p className="text-base mb-4">
                  Le processus de canonisation a commencé peu après sa béatification. En 2006, le Pape Benoît XVI a proclamé
                  Rosa Venerini sainte, reconnaissant ainsi officiellement sa sainteté et sa contribution à l'Église et à la société.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Le charisme Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">LE CHARISME DES SŒURS DE ROSA VENERINI</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-md">
              <h3 className="font-bold text-lg mb-3">La contemplation dans l'action</h3>
              <p className="text-base mb-4">
                C'est l'approche qui consiste à être pleinement présent et conscient dans l'action, tout en maintenant une attitude
                de réflexion et de contemplation. Cela peut aider à améliorer la qualité de nos actions, à réduire le stress et à augmenter
                la satisfaction. Cette approche se manifeste par l'écoute active, la compréhension et l'empathie, la réflexion critique,
                l'action ciblée et l'évaluation continue.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-md">
              <h3 className="font-bold text-lg mb-3">La charité dans la relation fraternelle</h3>
              <p className="text-base mb-4">
                C'est un aspect fondamental de la vie sociale et spirituelle. Cette charité se manifeste par la solidarité, la compassion,
                la générosité et le respect de la dignité et de la valeur de chaque personne.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-md">
              <h3 className="font-bold text-lg mb-3">La passion missionnaire</h3>
              <p className="text-base mb-4">
                Elle désigne l'engagement profond et la motivation qui pousse une personne à poursuivre une mission de service,
                d'évangélisation ou de développement dans un contexte religieux, social ou humanitaire. Ses différentes caractéristiques
                sont : le sens de l'appel, une motivation intrinsèque, un engagement total et une vision claire.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-md">
              <h3 className="font-bold text-lg mb-3">Attitude d'accueil des signes et la prophétie de l'esprit</h3>
              <p className="text-base mb-4">
                Ceci désigne la posture spirituelle qui consiste à être ouvert et réceptif aux manifestations de Dieu dans nos vies.
                Ses caractéristiques sont : l'ouverture à la présence de Dieu, la sensibilité de l'esprit, l'attente de la manifestation
                de Dieu et la réceptivité à la parole de Dieu.
              </p>
            </div>
          </div>
        </section>

        {/* Citation */}
        <section className="mb-12">
          <div className="bg-primary text-white p-8 rounded-md text-center">
            <h2 className="text-2xl font-bold mb-4">Notre Devise</h2>
            <blockquote className="text-xl italic">"Educare et Evangelizare" <span className="font-normal">(Éduquer et Évangéliser)</span></blockquote>
            <p className="mt-4">
              Cette devise met en avant les deux missions fondamentales des sœurs de Rosa Venerini : éduquer et évangéliser.
              Les sœurs cherchent à éduquer les jeunes filles et les femmes pour les aider à atteindre leur plein potentiel,
              tout en cherchant à partager la Bonne Nouvelle de l'Évangile avec les autres.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SainteRosa;
